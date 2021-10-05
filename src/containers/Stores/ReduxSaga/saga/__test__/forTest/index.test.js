import { call, put, takeEvery, take } from 'redux-saga/effects';

import { changeColorSaga, changeUI, chooseColor, CHOOSE_COLOR } from './sagaWithErrorHandling.js';

const gen = changeColorSaga();
const color = 'red';

// assert.deepEqual(
//   gen.next().value,
//   take(CHOOSE_COLOR),
//   'it should wait for a user to choose a color'
// );


// assert.deepEqual(
//   gen.next(chooseColor(color)).value,
//   put(changeUI(color)),
//   'it should dispatch an action to change the ui'
// );


// assert.deepEqual(
//   gen.next().done,
//   true,
//   'it should be done'
// );


describe('fetchAuthorsFromApi', () => {

  it('it should wait for a user to choose a color', () => {
    expect(gen.next().value).toEqual(take(CHOOSE_COLOR));
  });

  it('it should dispatch an action to change the ui', () => {
    expect(JSON.stringify(gen.next(chooseColor(color)).value)).toEqual(JSON.stringify(put(changeUI(color))));
  });

  it('it should be done', () => {
    expect(gen.next().done).toBeTruthy();
  });

});