import { call, put, takeEvery, take } from 'redux-saga/effects';

import { cloneableGenerator } from '@redux-saga/testing-utils';
import { doStuffThenChangeColor, doStuff, chooseNumber, CHOOSE_NUMBER, changeColorSaga, changeUI, chooseColor, CHOOSE_COLOR } from './sagaWithErrorHandling.js';
// const gen = doStuffThenChangeColor();
// const color = 'red';

describe('doStuffThenChangeColor', () => {
  const gen = cloneableGenerator(doStuffThenChangeColor)();
  gen.next(); // DO_STUFF
  gen.next(); // DO_STUFF
  gen.next(); // CHOOSE_NUMBER

  describe('user choose an even number', () => {

    const clone = gen.clone();

    it('should change the color to red', () => {
      expect(JSON.stringify(clone.next(chooseNumber(2)).value)).toEqual(JSON.stringify(put(changeUI('red'))));
    });

    it('it should be done', () => {
      expect(clone.next().done).toBeTruthy();
    });

  });

  describe('user choose an odd number', () => {

    const clone = gen.clone();

    it('should change the color to red', () => {
      expect(JSON.stringify(clone.next(chooseNumber(3)).value)).toEqual(JSON.stringify(put(changeUI('blue'))));
    });

    it('it should be done', () => {
      expect(clone.next().done).toBeTruthy();
    });

  });

});

// describe('fetchAuthorsFromApi', () => {

//   it('it should wait for a user to choose a color', () => {
//     expect(gen.next().value).toEqual(take(CHOOSE_COLOR));
//   });

//   it('it should dispatch an action to change the ui', () => {
//     expect(JSON.stringify(gen.next(chooseColor(color)).value)).toEqual(JSON.stringify(put(changeUI(color))));
//   });

//   it('it should be done', () => {
//     expect(gen.next().done).toBeTruthy();
//   });

// });


