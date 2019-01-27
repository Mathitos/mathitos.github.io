import React from 'react'

export const Item = (props) => {
  return(
    <div className='item' id={props.keyId}>
      {props.item}
    </div>
  )
}
