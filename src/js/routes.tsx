'use strict'

import * as React from 'react'
// import path from 'path'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App'
import HomePage from './components/HomePage'
import SubforumPage from './components/SubforumPage'
import PostPage from './components/PostPage'
import UserLoginPage from './components/UserLoginPage'
import UserRegistrationPage from './components/UserRegistrationPage'
// import NoMatch from './components/NoMatch'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/" component={HomePage} />
      <Route path="subforums/:id" component={SubforumPage} />
      <Route path="posts/:id" component={PostPage} />
      <Route path="/login" component={UserLoginPage} />
      <Route path="/register" component={UserRegistrationPage} />
    </Route>
  </Router>
)