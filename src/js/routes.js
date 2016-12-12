'use strict'

import React from 'react'
// import path from 'path'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App'
import HomePage from './components/HomePage'
import SubforumPage from './components/SubforumPage'
import PostPage from './components/PostPage'
import NoMatch from './components/NoMatch'

export default (
  // Write the routes
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
)
