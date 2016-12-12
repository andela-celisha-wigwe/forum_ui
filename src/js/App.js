'use strict'

import React from 'react'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './components/Footer'
import Alert from './components/Alert'

export class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Header />
        <Alert />
        { this.renderChildren() }
        <Footer />
      </MuiThemeProvider>
    )
  }
}