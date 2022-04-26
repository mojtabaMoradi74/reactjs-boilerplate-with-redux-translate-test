
import actionTypes from "./actionTypes";
import initialState from "./initialState"
import { getTodo, addTodo, deleteTodo, initial, toggleComplete } from "./operation"



const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actionTypes.REDUX_GET_TODO:
      return getTodo(state, action)
    case actionTypes.REDUX_ADD_TODO:
      return addTodo(state, action)
    case actionTypes.REDUX_DELETE_TODO:
      return deleteTodo(state, action)
    case actionTypes.REDUX_TOGGLE_COMPLETE:
      return toggleComplete(state, action)
    case actionTypes.REDUX_INITIAL:
      return initial(state, action)
    default:
      return state
  }
}

export default reducer;