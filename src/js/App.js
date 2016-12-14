'use strict'

import React from 'react'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './components/Footer'
import Alert from './components/Alert'

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
      <MuiThemeProvider>
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
