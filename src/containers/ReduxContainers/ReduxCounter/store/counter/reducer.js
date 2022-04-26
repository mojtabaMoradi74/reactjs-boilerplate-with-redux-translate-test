
import actionTypes from "./actionTypes";
import initialState from "./initialState"
import { decrement, increment, incrementIfOdd, zero } from "./operation"



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DECREMENT:
      return decrement(state, action)
    case actionTypes.INCREMENT:
      return increment(state, action)
    case actionTypes.INCREMENT_IF_ODD:
      return incrementIfOdd(state, action)
    case actionTypes.ZERO:
      return zero(state, action)
    default:
      return state
  }
}

export default reducer;