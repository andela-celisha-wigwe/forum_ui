'use strict';

import React from 'react';
import path from 'path';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './controllers/App'
import HomePage from './controllers/HomePage'
import SubforumPage from './controllers/SubforumPage'
import PostPage from './controllers/PostPage'
import NoMatch from './controllers/NoMatch'

export default {
  // Write the routes
  <Router history={ browserHistory }>
  	<Route path="/" component={ App }>
  		<IndexRoute component={ HomePage } />

  		<Route path="/subforum/:subforum" component={ SubforumPage } />
  		<Route path="/subforum/:subforum/post/:post" component={ PostPage } />

  		<Route path="*" component={ NoMatch } />
  	</Route>
  </Router>
}