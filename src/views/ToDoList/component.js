import React, { Component } from 'react'
export default class ToDoListComponent extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
