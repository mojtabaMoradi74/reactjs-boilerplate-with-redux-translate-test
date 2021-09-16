
export const getTodoFunc = (state, action) => {
    return { ...state, data: action.payload.todos };
};

export const addTodoFunc = (state, action) => {
    state.data.push(action.payload.todo);
};

export const toggleCompleteFunc = (state, action) => {
    const index = state.data.findIndex((todo) => todo.id === action.payload.todo.id);
    state.data[index] = action.payload.todo;
    console.log({ state, action }, action.payload.todo, index);
    // return state;
};

export const deleteTodoFunc = (state, action) => {
    return { ...state, data: state.data.filter((todo) => todo.id !== action.payload.id) }
};