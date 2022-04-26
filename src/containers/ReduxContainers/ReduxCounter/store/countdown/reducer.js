
import actionTypes from "./actionTypes";
import initialState from "./initialState"
import { increment, cancelIncrement, countdownTerminated } from "./operation"



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return increment(state, action)
    case actionTypes.CANCEL_INCREMENT:
      return cancelIncrement(state, action)
    case actionTypes.COUNT_DOWN_TERMINATED:
      return countdownTerminated(state, action)
    default:
      return state
  }
}

export default reducer;