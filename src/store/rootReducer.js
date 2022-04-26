import { combineReducers } from "redux";
import todoThunk from "containers/ReduxContainers/ReduxThunk/store/reducer";
import todoSaga from "containers/ReduxContainers/ReduxSaga/store/reducer";
import reduxTodo from "containers/ReduxContainers/Redux/store/reducer";
import count from "containers/ReduxContainers/ReduxCounter/store";


const rootReducer = combineReducers({
  todoThunk,
  reduxTodo,
  todoSaga,
  ...count
})


export default rootReducer;