'use-strict';

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        	{ this.renderChildren() }
        <Footer />
      </div>
    )
  }
}