
export const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    CLEAR_TODO: 'CLEAR_TODO',
    CHANGE_FILTER: 'CHANGE_FILTER',
    CHANGE_TASK_FILTER: 'CHANGE_TASK_FILTER'
};

export const taskFilters = {
    ALL: 'ALL',
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED'
};

export function actionAddTodo(text) {
    return {
        type: actionTypes.ADD_TODO,
        text
    };
}

export function actionClearTodoList() {
    return {
        type: actionTypes.CLEAR_TODO
    };
}

export function actionChangeFilter(filter) {
    return {
        type: actionTypes.CHANGE_FILTER,
        filter
    };
}

export function actionChangeTaskFilter(todotask) {
    return {
        type: actionTypes.CHANGE_TASK_FILTER,
        todotask
    };
}
