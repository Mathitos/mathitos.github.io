import React, { Component } from 'react'
import ToDoListCreateItem from './createItem'
import { ItemsList } from '../../components/ItemsList'

export default class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    }
  }

  addItem = item => {
    this.setState(
      {
        items: this.state.items.concat(
          {
            value: item,
            key: this.state.items.length
          }
        )
      }
    )
  }

  render() {
    return (
      <div>
        <ItemsList items={this.state.items} />
        <ToDoListCreateItem addItem={this.addItem} />
      </div>
    )
  }
}
