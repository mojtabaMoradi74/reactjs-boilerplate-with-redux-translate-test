import todoSaga from "containers/Stores/ReduxSaga/store";
import todoThunk from "containers/Stores/ReduxThunk/store";
import reduxTodo from "containers/Stores/Redux/store";
import count from "containers/Stores/ReduxCounter/store";


const rootReducer = {
  todoThunk,
  reduxTodo,
  todoSaga,
  ...count
}


export default rootReducer;