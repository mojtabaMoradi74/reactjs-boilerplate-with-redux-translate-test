import { takeEvery, call } from 'redux-saga/effects';
import rootSaga, { addTodoSaga, deleteTodoSaga, getTodoSaga, toggleCompleteSaga } from '../index';
import actionTypes from '../actionTypes';
import { fetchTodoApi, deleteTodoApi, patchTodoApi, postTodoApi } from 'config/api/services';


describe('fetchAuthorsFromApi', () => {

  describe('WATCHER ROOT', () => {
    const genObject = rootSaga();
    it('should wait for every FETCH_AUTHORS action and call makeAuthorsApiRequest', () => {
      expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(takeEvery(actionTypes.GET_SAGA_TODO_REQUEST, getTodoSaga)));
      expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(takeEvery(actionTypes.POST_SAGA_TODO_REQUEST, getTodoSaga)));
      expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(takeEvery(actionTypes.DELETE_SAGA_TODO_REQUEST, getTodoSaga)));
      expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(takeEvery(actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST, getTodoSaga)));
    });


    it('should be done on next iteration', () => {
      expect(genObject.next().done).toBeTruthy();
    });

  });
  describe('WATCHER ROOT', () => {

    // const deleteObject = deleteTodoSaga();
    // const patchObject = toggleCompleteSaga();
    describe('FETCH_TODO_API', () => {
      const genObject = getTodoSaga();
      it('FETCH_TODO_API', async () => {
        expect(JSON.stringify(genObject.next().value)).toEqual(JSON.stringify(call(fetchTodoApi)));
      });
      // it('should be done on next iteration', () => {
      //   // expect(genObject.next().done).toBeTruthy();
      // });
    });


    describe('FETCH_TODO_API', () => {
      const postObject = addTodoSaga({ title: "hello" });
      it('POST_TODO_API', async () => {
        expect(JSON.stringify(postObject.next().value)).toEqual(JSON.stringify(call(postTodoApi, { title: "hello" })));
      });
      // it('should be done on next iteration', () => {
      //   // expect(postObject.next().done).toBeTruthy();
      // });
    });

    // it('DELETE_TODO_API', async () => {
    //   expect(JSON.stringify(deleteObject.next().value)).toEqual(JSON.stringify(call(deleteTodoApi)));
    // });

    // it('PATCH_TODO_API', async () => {
    //   expect(JSON.stringify(patchObject.next().value)).toEqual(JSON.stringify(call(patchTodoApi)));
    // });

    // it('should be done on next iteration', () => {
    //   expect(genObject.next().done).toBeTruthy();
    // });

  });

});