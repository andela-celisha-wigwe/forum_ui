'use strict'
import 'babel-polyfill'
// this brings in some functions that are not available in ES5.
// Like array.from and array.include
// and the definition of Promises.

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Routes from './routes'

if (process.env.NODE_ENV === 'development') {
  // Enable React devtools
  // window["React"] = React // much later
}

ReactDOM.render(Routes, document.getElementById('app'))
