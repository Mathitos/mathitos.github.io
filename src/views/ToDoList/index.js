import React, { Component } from 'react'
import ToDoListComponent from './component'

export default class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    }
  }

  addItem = e => {
    e.preventDefault()
    console.log('Hello World')
  }

  render() {
    return (
      <ToDoListComponent addItem={this.addItem}/>
    )
  }
}
