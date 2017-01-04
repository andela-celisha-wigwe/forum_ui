'use strict'

import React from 'react'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './components/Footer'
import Alert from './components/Alert'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const myTheme = getMuiTheme({
  palette: {
    textColor: '#333333',
    alternateTextColor: '#ffffff',
    primary1Color: '#30445C',
    primary2Color: '#ffffff',
    primary3Color: '#333333',
    accent1Color: '#4dcadd',
    disabledColor: '#f2f2f2'
  },
  fontFamily: 'Roboto'
  // spacing: '' // spacing between elements
})

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

	/**
   * Render current page
   */
  renderChildren() {
    return React.cloneElement(this.props.children, {});
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
				<div>
	        <Header />
  	      <Alert />
    	    {this.renderChildren()}
      	  <Footer />
				</div>
      </MuiThemeProvider>
    )
  }
}
