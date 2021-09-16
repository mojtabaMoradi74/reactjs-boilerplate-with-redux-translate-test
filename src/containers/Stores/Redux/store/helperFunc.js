import { uniqId } from "utils/uniqId";

export const addTodoFunc = (state, action) => {
    const todo = { id: uniqId(), title: action.payload.title, completed: false, };
    state.data.push(todo);
};

export const toggleCompleteFunc = (state, action) => {
    const index = state.data.findIndex((todo) => todo.id === action.payload.id);
    state.data[index].completed = action.payload.completed;
};

export const deleteTodoFunc = (state, action) => {
    return { ...state, data: state.data.filter((todo) => todo.id !== action.payload.id) }
};