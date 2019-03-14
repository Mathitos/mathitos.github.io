import React, { Component } from 'react'
export default class ToDoListCreateItem extends Component {
  constructor() {
    super()
    this.state = {
      taskName: '',
    }

    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    this.props.addItem(this.state.taskName)
    this.setState({ taskName: '' })
  }

  handleChange(event) {
    this.setState({ taskName: event.target.value })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.submitForm}>
            <input
              placeholder="Task"
              value={this.state.taskName}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit">
              {' '}
              Add Task{' '}
            </button>
          </form>
        </div>
      </div>
    )
  }
}
