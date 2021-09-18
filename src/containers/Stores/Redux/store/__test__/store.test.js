


import { uniqId } from 'utils/uniqId';
import reducer, { addTodo } from '../index';
import initialState from '../initialState';

const newData = {
  id: uniqId(),
  title: 'todo 1',
  completed: true,
}

describe('Redux todo Reducer', () => {

  test('should return the initial state', () => {
    const newReducer = reducer(undefined, {});
    // console.log({ newReducer });
    expect(newReducer).toEqual(initialState)
  })

  test('append new data in state', () => {
    const newReducer = reducer(initialState, addTodo(newData));
    const afterState = { ...initialState, data: [...initialState.data, newData] }
    expect(newReducer).toEqual(afterState);
  })

  test('delete data in state', () => {

  })

})
