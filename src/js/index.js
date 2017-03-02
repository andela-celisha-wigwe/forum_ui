'use strict'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
const css = require('../../src/sass/main.scss')

import Routes from './routes'

if (process.env.NODE_ENV === 'development') {
  // Enable React devtools
  window.React = React
}

ReactDOM.render(Routes, document.getElementById('app'))
