/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import store, { history } from '../redux'

import ProjectPage from '../components/pages/Project_page.js'
import ProjectsListPage from '../components/pages/ProjectsList_page'
import SearchPage from '../components/pages/Search_page'

import NotFound from '../components/404'

export default (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} location={props.location} context={props.context}>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <SearchPage />} />
            <Route exact path="/:user" component={() => <ProjectsListPage />} />
            <Route exact path="/:user/:project" component={() => <ProjectPage />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}
