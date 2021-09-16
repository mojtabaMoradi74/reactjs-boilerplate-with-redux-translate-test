import todoSaga from "containers/Stores/ReduxSaga/store";
import todoThunk from "containers/Stores/ReduxThunk/store";
import reduxTodo from "containers/Stores/Redux/store";


const rootReducer = {
  todoSaga,
  todoThunk,
  reduxTodo
}


export default rootReducer;