import { uniqId } from 'utils/uniqId';
import reducer, { addTodo, deleteTodo } from '../index';
import initialState from '../initialState';

const newData = {
  id: uniqId(),
  title: 'todo 1',
  completed: true,
}

describe('Redux todo Reducer', () => {

  test('should return the initial state', () => {
    let newReducer = reducer(undefined, {});
    expect(newReducer).toEqual(initialState)
  })

  test('append new data in state', () => {
    let newReducer = reducer(initialState, addTodo(newData));
    let newState = { ...initialState, data: [...initialState.data, newData] }
    expect(newReducer).toEqual(newState);
  })

  test('delete data in state', () => {
    let removeId = initialState.data[0].id
    let newReducer = reducer(initialState, deleteTodo({ id: removeId }));
    let newInitialState = { ...initialState }
    newInitialState.data = initialState.data.filter((param) => {
      if (param.id !== removeId) return true;
      return false;
    })
    expect(newReducer).toEqual(newInitialState);
  })

})
