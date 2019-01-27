import React from 'react'

export const Item = (props) => {
  const deleteAction = props.deleteAction ? props.deleteAction : (() => null)
  return(
    <div className='item' id={props.keyId} onClick={() => deleteAction(props.keyId)}>
      {props.item}
    </div>
  )
}
