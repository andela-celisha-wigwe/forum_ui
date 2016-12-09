'use strict'

import React from 'react'
import SubHeader from 'material-ui/Subheader'

export class Header extends React.Component {
  render () {
    return (
      <SubHeader>
        <a href='/'>Home</a>
      </SubHeader>
    )
  }
}
