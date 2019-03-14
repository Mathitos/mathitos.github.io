import React, { Component } from 'react'
import ToDoListCreateItem from './createItem'
import { ItemsList } from './components/ItemsList'

export default class ToDoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
      indexNumber: 0,
    }
  }

  addItem = item => {
    this.setState({
      items: this.state.items.concat({
        value: item,
        key: this.state.indexNumber,
      }),
      indexNumber: this.state.indexNumber + 1,
    })
  }

  removeItem = itemKey => {
    this.setState({
      items: this.state.items.filter(item => {
        return item.key != itemKey
      }),
    })
  }

  render() {
    return (
      <div>
        <ItemsList
          items={this.state.items}
          eventOnDeleteElement={this.removeItem}
        />
        <ToDoListCreateItem addItem={this.addItem} />
      </div>
    )
  }
}
