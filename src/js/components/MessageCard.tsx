'use strict'

import * as React from 'react'
import * as Moment from 'moment'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export interface MessageCardProps {
  body: string,
  at: string,
  id: string
}

export interface MessageCardState {
}

export default class extends React.Component <MessageCardProps, MessageCardState> {

  constructor (props: MessageCardProps) {
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