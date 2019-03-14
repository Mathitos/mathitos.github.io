import React, { Component } from 'react'
import SideMenu from './sideMenu'
import Editor from './editor'

import './side-bar-editor.sass'

export default class SideBarEditor extends Component {
  render() {
    return (
      <div className="flex-inline flex-row-reverse flex-justify-end container-full">
        <SideMenu />
        <Editor />
      </div>
    )
  }
}
