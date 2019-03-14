import React from 'react'
import { render } from 'react-dom'
import { Main } from './main'
import Header from 'scenes/Header'

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
