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
      <div className="post-card" >
        <Card>
          <CardHeader title={this.props.title} className="post-header" />
          <CardText className="post-body">
            {this.props.body}
            <CardActions className="actions-bar">
              <FlatButton label="follow" onClick={this.showPost} />
            </CardActions>
          </CardText>
        </Card>
      </div>
    );
  }
}