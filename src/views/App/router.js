import React from 'react'
import Resume from '../Resume'
import SideBarEditor from '../SideBarEditor'
import RpgSheets from '../RpgSheets'
import PageNotFound from '../PageNotFound'
import { Switch, Route } from 'react-router-dom'

export const Router = () => {
  return(
    <Switch>
      <Route exact path="/" component={Resume}/>
      <Route path="/side-bar" component={SideBarEditor}/>
      <Route path="/rpg-sheets" component={RpgSheets}/>
      <Route component={PageNotFound}/>
    </Switch>
  )
}
