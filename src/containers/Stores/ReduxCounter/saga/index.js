import { take, put, call, fork, race, cancelled } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import actionTypes from './actionTypes'
import { countdownTerminated, incrementAsync } from "../store/countdown";
import { increment } from "../store/counter";


export const countdown = secs => {
    console.log('countdown', secs)
    return eventChannel(listener => {
        const iv = setInterval(() => {
            secs -= 1
            console.log('countdown', secs)
            if (secs > 0) listener(secs)
            else {
                listener(END)
                clearInterval(iv)
                console.log('countdown terminated')
            }
        }, 1000)
        return () => {
            clearInterval(iv)
            console.log('countdown cancelled')
        }
    })
}

export function* incrementsAsync({ value }) {
    const chan = yield call(countdown, value)
    try {
        while (true) {
            let seconds = yield take(chan)
            yield put(incrementAsync({ value: seconds }))
        }
    } finally {
        console.log("finally");
        if (!(yield cancelled())) {
            yield put(increment())
            yield put(countdownTerminated())
        }
        chan.close()
    }
}

export function* watchIncrementsAsync() {
    try {
        while (true) {
            const action = yield take(actionTypes.INCREMENT_ASYNC)
            // starts a 'Race' between an async increment and a user cancel action
            // if user cancel action wins, the incrementsAsync will be cancelled automatically
            yield race([call(incrementsAsync, action), take(actionTypes.CANCEL_INCREMENT_ASYNC)])
        }
    } finally {
        console.log('watchIncrementsAsync terminated')
    }
}

export default function* rootSaga() {
    yield fork(watchIncrementsAsync)
}
