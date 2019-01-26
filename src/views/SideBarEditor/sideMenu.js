import React, { Component } from 'react';

export default class SideMenu extends Component {

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    })
  }

  render() {
    return (
      <div className= "flex-inline flex-row-reverse container-auto">
        <div className= "left-menu"/>
        <div className= "sidebar"/>
      </div>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}
