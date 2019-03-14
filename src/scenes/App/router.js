import React from 'react'
import Resume from '../Resume'
import RpgSheets from '../RpgSheets'
import ToDoList from '../ToDoList'
import PageNotFound from '../PageNotFound'
import { Switch, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Resume} />
      <Route exact path="/resume" component={Resume} />
      <Route path="/rpg-sheets" component={RpgSheets} />
      <Route path="/to-do-list" component={ToDoList} />
      <Route component={PageNotFound} />
    </Switch>
  )
}
