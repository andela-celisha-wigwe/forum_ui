'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
const css = require('../../src/sass/main.scss')
console.log(css, "this is the css")

import Routes from './routes'

if (process.env.NODE_ENV === 'development') {
  // Enable React devtools
  window.React = React
}

ReactDOM.render(Routes, document.getElementById('app'))
