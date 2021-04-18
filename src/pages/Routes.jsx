// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGE_MAIN, PAGE_PRICES } from 'constants/PAGES'
import PageHome from 'pages/PageHome/PageHome'
import PagePrices from 'pages/PagePrices/PagePrices'

const Routes = () => {
  return (
    <Switch>
      <Route path={PAGE_MAIN} exact component={PageHome} />
      <Route path={PAGE_PRICES} exact component={PagePrices} />
    </Switch>
  )
}
export default Routes
