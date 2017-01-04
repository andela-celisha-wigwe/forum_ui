'use strict'

import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export default class extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card>
        <CardText>
          {this.props.body}
        </CardText>
      </Card>
    );
  }
}