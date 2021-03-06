import React from 'react'
import { Item } from './item'

import './item-list.sass'

export const ItemsList = props => {
  return (
    <div className="items-list">
      {props.items.map(item => (
        <Item
          key={item.key}
          keyId={item.key}
          item={item.value}
          deleteAction={props.eventOnDeleteElement}
        />
      ))}
    </div>
  )
}
