import React, { Component } from 'react'
import ToDoListMain from './component'

class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    }
  }

  addItem = () => {
    console.log('Hello Add Item')
  }

  render() {
    return (
      <ToDoListMain addItem={this.addItem}/>
    )
  }
}
