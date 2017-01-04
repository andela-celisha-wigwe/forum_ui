import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.showSubforum = this.showSubforum.bind(this)
  }

  showSubforum () {
    window.location.href = `/subforums/${this.props.id}`
  }

  render () {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
        />
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton label="View" onClick={this.showSubforum} />
        </CardActions>
      </Card>
    );
  }
}