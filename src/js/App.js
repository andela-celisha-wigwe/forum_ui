'use strict'

import React from 'react'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './components/Footer'
import Message from './components/Message'

export class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Header />
        <Message />
        { this.renderChildren() }
        <Footer />
      </MuiThemeProvider>
    )
  }
}
