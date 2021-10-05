
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


