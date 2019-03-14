import React from 'react'
import { render } from 'react-dom'
import { Main } from './main'
import Header from '../../components/Header'
import '../../styles/defaultStyles.sass'

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
