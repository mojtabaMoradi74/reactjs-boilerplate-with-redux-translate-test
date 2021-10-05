import { take, put, race, call, cancelled } from 'redux-saga/effects'
import actionTypes from 'containers/Stores/ReduxCounter/saga/actionTypes'
import { countdownTerminated, incrementAsync } from "../store/countdown";
import { increment } from "../store/counter";
import { watchIncrementsAsync, incrementsAsync, countdown } from 'containers/Stores/ReduxCounter/saga'

const getState = () => ({
  value: 10,
})


describe('counter saga', () => {
  describe('watchIncrementAsync Saga', () => {
    const generator = watchIncrementsAsync()
    let next


    it('watchIncrementAsync takes INCREMENT_ASYNC action', () => {
      next = generator.next()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(take(actionTypes.INCREMENT_ASYNC)));
    });



    it('starts Race between async incremention and cancellation', async () => {
      next = generator.next(getState())
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(race([call(incrementsAsync, getState()), take(actionTypes.CANCEL_INCREMENT_ASYNC)])));
    });

  })

  describe('incrementAsync Saga successful', () => {
    const generator = incrementsAsync(getState())
    let next;


    it('counter Saga instantiates channel emitter', async () => {
      next = generator.next()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(call(countdown, getState().value)));
    });



    it('take action from eventChannel', () => {
      const chan = countdown(getState().value)
      next = generator.next(chan)
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(take(chan)));
    });


    it('updates countdown value in the store', () => {
      next = generator.next(9)
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(incrementAsync({ value: 9 }))));
    });

    //end smoothly the saga

    it('eventEmitter is done', () => {
      next = generator.return()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(cancelled()));
    });

    //resume the saga

    it('Actual increment is performed', () => {
      next = generator.next(false)
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(increment())));
    });


    it('The countdown is terminated', () => {
      next = generator.next()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(countdownTerminated())));
    });
  })

  describe('incrementAsync Saga with cancellation', () => {
    const generator = incrementsAsync(getState())
    let next



    it('instanciation of the channel emitter with the provided value to wait', () => {
      next = generator.next()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(call(countdown, getState().value)));
    });



    it('takes action from eventChannel', () => {
      const chan = countdown(getState().value)
      next = generator.next(chan)
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(take(chan)));
    });

    it('put counter value to store', () => {
      next = generator.next(9)
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(put(incrementAsync({ value: 9 }))));
    });

    //end the saga

    it('eventEmitter is done', () => {
      next = generator.return()
      expect(JSON.stringify(next.value)).toEqual(JSON.stringify(cancelled()));
    });
    //resume the saga with a cancel call

    it('Saga is done', () => {
      next = generator.next(true)
      expect(next.done).toBeTruthy();
    });

  })
})
