import React from 'react';
import './App.css';
import ToDoList from './ToDoList.js'
import { connect } from 'react-redux';
import { actionClearTodoList, taskFilters, actionChangeFilter } from './actions/todoActions.js';

class App extends React.Component {

  clearTodoList() {
    this.props.clearTodoList();
  }

  changeFilter(filter) {
    this.props.changeFilter(filter);
  }

  render() {
    return (
        <div className="App">
          Todo List using React - Redux
          <div>
            <button onClick={() => this.clearTodoList() }>Clear todo list</button>
          </div>
          <div>
            <h4>Current filter: {this.props.currentFilter}</h4>
            <h5>Change filter :
              <button onClick={() => this.changeFilter(taskFilters.ALL)}>All</button>
              <button onClick={() => this.changeFilter(taskFilters.PENDING)}>Pending</button>
              <button onClick={() => this.changeFilter(taskFilters.COMPLETED)}>Completed</button>
            </h5>
          </div>
          <div>
            <ToDoList filter = {this.props.currentFilter}/>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentFilter: state.currentFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearTodoList: () => {
      dispatch(actionClearTodoList());
    },
    changeFilter: (filter) => {
      dispatch(actionChangeFilter(filter));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
