import { actionTypes, taskFilters } from '../actions/todoActions.js';
import { combineReducers } from 'redux';

const initialState = {
    currentFilter: taskFilters.ALL,
    todoTasks: [
        { task: 'Initial task', done: false}
    ]
};

function todosReducer(state = [], action) {
    if (action.type === actionTypes.ADD_TODO) {
        return state.concat({ task: action.text, done: false });

    } else if (action.type === actionTypes.CLEAR_TODO) {
        return [];
    }
    else if (action.type === actionTypes.CHANGE_TASK_FILTER) {
        let item = action.todotask;
        let new_state = state.slice();
        for( var obj of new_state){
            if(obj.task === item.task){
                obj.done = true;
            }
        };
        return new_state;
    }
    return state;
}

function visibilityFilterReducer(state = taskFilters.ALL, action) {
    if (action.type === actionTypes.CHANGE_FILTER) {

        return action.filter;
    }
    
    return state;
}


// Reducer version - entire state not handled by respective reducers
// export function reducer(state = initialState, action) {
//     if (action.type === actionTypes.ADD_TODO) {
//         return Object.assign({}, state, {
//             todoTasks: todosReducer(state.todoTasks, action)
//         });
//     } else if (action.type === actionTypes.CLEAR_TODO) {
//         return Object.assign({}, state, {
//             todoTasks: todosReducer(state.todoTasks, action)
//         });
//     } else if (action.type === actionTypes.CHANGE_FILTER) {
//         return Object.assign({}, state, {
//             currentFilter: action.filter
//         });
//     }

//     return state;
// }


// Reducer version - Entire state handled by separate reducers
export function reducer(state = initialState, action) {
    return {
        currentFilter: visibilityFilterReducer(state.currentFilter, action),
        todoTasks: todosReducer(state.todoTasks, action)
    };
}


// Reducer version - Use combineReducers
// export const reducer = combineReducers({
//     currentFilter: visibilityFilterReducer,
//     todoTasks: todosReducer
// });
