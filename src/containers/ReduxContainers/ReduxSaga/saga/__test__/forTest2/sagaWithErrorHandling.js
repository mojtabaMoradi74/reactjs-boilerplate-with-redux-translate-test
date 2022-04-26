
import { call, put, takeEvery, take } from 'redux-saga/effects';






export const CHOOSE_COLOR = 'CHOOSE_COLOR';
export const CHANGE_UI = 'CHANGE_UI';

export const chooseColor = (color) => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
});

export const changeUI = (color) => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
});


export function* changeColorSaga() {
  const action = yield take(CHOOSE_COLOR);
  yield put(changeUI(action.payload.color));
}

// -----------------------------------------------------


export const CHOOSE_NUMBER = 'CHOOSE_NUMBER';
export const DO_STUFF = 'DO_STUFF';

export const chooseNumber = (number) => ({
  type: CHOOSE_NUMBER,
  payload: {
    number,
  },
});

export const doStuff = () => ({
  type: DO_STUFF,
});





export function* doStuffThenChangeColor() {
  yield put(doStuff());
  yield put(doStuff());
  const action = yield take(CHOOSE_NUMBER);
  if (action.payload.number % 2 === 0) {
    yield put(changeUI('red'));
  } else {
    yield put(changeUI('blue'));
  }
}