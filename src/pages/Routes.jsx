// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_MAIN } from 'constants/PAGES'
import PageHome from 'pages/PageHome/PageHome'

const Routes = () => {
  return (
    <Switch>
      <Route path={PAGE_MAIN} exact component={PageHome} />
    </Switch>
  )
}
export default Routes
