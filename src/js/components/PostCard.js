'use strict'

import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.showPost = this.showPost.bind(this)
  }

  showPost () {
    window.location.href = `/posts/${this.props.id}`
  }

  render () {
    return (
      <Card>
        <CardHeader
          title={this.props.title}
        />
        <CardText>
          {this.props.body}
        </CardText>
        <CardActions>
          <FlatButton label="View" onClick={this.showPost} />
        </CardActions>
      </Card>
    );
  }
}