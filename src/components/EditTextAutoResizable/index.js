import React, { Component } from 'react'

const DEFAULT_FONT_SIZE = 24
export default class EditTextAutoResizable extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      originalFontSize: props.fontSize || DEFAULT_FONT_SIZE,
      fontSize: props.fontSize || DEFAULT_FONT_SIZE,
    }
  }

  value = ''
  resized = false

  componentDidUpdate(prevProps) {
    this.checkForResize()
  }

  resizeUp = () => {
    if (this.state.fontSize < this.state.originalFontSize) {
      this.increaseFontSize()
    } else {
      this.resized = false
    }
  }

  checkForResize = () => {
    if (this.isOverflow()) this.handleOverflow()
    else if (this.resized) this.resizeUp()
  }

  handleOverflow = () => {
    this.decreaseFontSize()
  }

  isOverflow = () => {
    const element = this.myRef.current
    if (element) {
      return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      )
    } else return false
  }

  increaseFontSize = () => {
    this.setState({ fontSize: this.state.fontSize + 1 })
    this.resized = true
  }

  decreaseFontSize = () => {
    this.setState({ fontSize: this.state.fontSize - 1 })
    this.resized = false
  }

  handleChange = () => {
    this.checkForResize()
    const newValue = this.myRef.current.value
    if (this.value.length > newValue.length) this.increaseFontSize()
    this.value = newValue
  }

  render() {
    return (
      <div>
        <textarea
          ref={this.myRef}
          placeholder="text"
          onChange={this.handleChange}
          style={{
            fontSize: this.state.fontSize,
            minHeight: '100px',
            minWidth: '200px',
            height: '100px',
            width: '200px',
          }}
        />
      </div>
    )
  }
}
