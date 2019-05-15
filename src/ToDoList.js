import React from 'react';
import { connect } from 'react-redux';
import { actionAddTodo, actionChangeTaskFilter ,taskFilters} from './actions/todoActions.js';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.counter = 1;
    }

    addTodo() {
        this.props.addTodo(`Task ${this.counter++}`);
    }
    changeTaskFilter(todotask){
        this.props.changeTaskFilter(todotask)
    }

    mapAll() {
        return this.props.todoTasks.map((item, index) =>{ return this.renderTaskItem(item, index);});
                
    }

    mapPending() {
        return this.props.todoTasks.map((item, index) => {if(item.done == false) return this.renderTaskItem(item, index);});
    }

    mapCompleted() {
        return this.props.todoTasks.map((item, index) => {if(item.done == true) return this.renderTaskItem(item, index);});
    }

    render() {
        var display_tasks=[];
        if (this.props.currentFilter == taskFilters.ALL) 
        {
           console.log(this.props.currentFilter);
            display_tasks = this.mapAll();
            console.log(display_tasks);
        } 
        else if(this.props.currentFilter == taskFilters.PENDING)
        {
            console.log(this.props.currentFilter);
            display_tasks = this.mapPending();
            console.log(display_tasks);
        }
        else
        {
            console.log(this.props.currentFilter);
            display_tasks = this.mapCompleted();
            console.log(display_tasks);
        }

        return (
            <div>
                Todo List : {this.counter}
                <div>
                    <button onClick={() => this.addTodo()}>Add Todo</button>
                </div>
                <h3>Items</h3>
                {display_tasks}
            </div>
        );
    }

    renderTaskItem(item, index) {
        return(
            <div key={index} style={{border:"1px solid black"}}>
                <h4>{item.task}</h4>
                <div>{item.done ? 'completed' : 'pending'}
                <button type="button" class="btn btn-secondary btn-sm" style={{float:'right'}} onClick={() => this.changeTaskFilter(item)}>completed</button>
                </div>
                
            </div>
        )
    }
    
}


function mapStateToProps(state) {
    return {
        todoTasks: state.todoTasks,
        currentFilter: state.currentFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (item) => {
            dispatch(actionAddTodo(item));
        },
        changeTaskFilter: (todotask) => {
            dispatch(actionChangeTaskFilter(todotask))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
