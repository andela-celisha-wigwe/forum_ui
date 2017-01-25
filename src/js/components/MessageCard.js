'use strict'

import React from 'react'
import Moment from 'moment'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export default class extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card className="message-body">
        <CardText>
          {this.props.body}
          <div className="message-time">
            { Moment(this.props.at, "YYYYMMDD").fromNow() }
          </div>
        </CardText>

      </Card>
    );
  }
}