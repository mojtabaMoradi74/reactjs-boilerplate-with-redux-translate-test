import { uniqId } from 'utils/uniqId';
import reducer from '../reducer';
import action from '../action';
import initialState from '../initialState';

const newData = {
  id: uniqId(),
  title: 'new append',
  completed: true,
}

describe('Redux todo Reducer', () => {

  test('should return the initial state', () => {
    let newReducer = reducer(undefined, {});
    expect(newReducer).toEqual(initialState)
  })

  test('append new data in state', () => {
    let newReducer = reducer({}, action.addTodo(newData));
    expect(newReducer.data[0]).toEqual(newData);
  })

  test('delete data in state', () => {
    let removeId = initialState.data[0].id
    let newReducer = reducer({ ...initialState }, action.deleteTodo({ id: removeId }));
    let newInitialState = { ...initialState }
    newInitialState.data = initialState.data.filter((param) => {
      if (param.id !== removeId) return true;
      return false;
    })
    expect(newReducer).toEqual(newInitialState);
  })

})
