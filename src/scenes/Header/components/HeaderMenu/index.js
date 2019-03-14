import React from 'react'

import { NavLink } from 'react-router-dom'

const HeaderMenu = () => (
  <div className="header__menu  flex flex-row flex-justify-space-around flex-align-center">
    <MenuItem name="resume" url="/resume" />
    <MenuItem name="Rpg Sheets" url="/rpg-sheets" />
    <MenuItem name="To Do List" url="/to-do-list" />
  </div>
)

const MenuItem = ({ name, url }) => (
  <div className="header__menu__item">
    <NavLink to={url} className="header__menu__item" activeClassName="header__menu__item--selected">{name}</NavLink>
  </div>
)

export default HeaderMenu
