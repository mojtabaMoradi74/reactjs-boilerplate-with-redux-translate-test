import actionTypes from "./actionTypes"


export function getTodoSagaAsync(param) {
    return {
        type: actionTypes.GET_SAGA_TODO_REQUEST,
        ...param,
    }
}

export function deleteTodoSagaAsync(param) {
    return {
        type: actionTypes.DELETE_SAGA_TODO_REQUEST,
        ...param,
    }
}

export function patchToggleCompleteTodoSagaAsync(param) {
    return {
        type: actionTypes.PATCH_SAGA_TODO_COMPLETE_REQUEST,
        ...param,
    }
}


export function addTodoSagaAsync(param) {
    return {
        type: actionTypes.POST_SAGA_TODO_REQUEST,
        ...param,
    }
}
