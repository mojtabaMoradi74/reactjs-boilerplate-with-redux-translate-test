import { uniqId } from 'utils/uniqId';
import { takeEvery } from 'redux-saga/effects';
import rootSaga, { addTodoSaga, deleteTodoSaga, getTodoSaga, toggleCompleteSaga } from '../index';
import actionTypes from '../actionTypes';


describe('fetchAuthorsFromApi', () => {
  const genObject = rootSaga();

  it('should wait for every FETCH_AUTHORS action and call makeAuthorsApiRequest', () => {
    expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga)));
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

});