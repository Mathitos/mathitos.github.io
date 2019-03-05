import React, { Component } from 'react'

export default class Editor extends Component {
  render() {
    return EditorModal('lalala')
  }
}

function EditorModal(text) {
  return <div style={{ flexGrow: 1 }}> {text}</div>
}
