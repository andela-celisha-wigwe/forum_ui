import * as React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export interface SubforumCardProps {
  id: string,
  name: string,
  description: string
}

export interface SubforumCardState {

}

export default class extends React.Component <SubforumCardProps, SubforumCardState> {

  constructor (props: SubforumCardProps) {
    super(props)
    this.showSubforum = this.showSubforum.bind(this)
  }

  showSubforum () {
    window.location.href = `/subforums/${this.props.id}`
  }

  render () {
    return (
      <div className="subforum-card" onClick={this.showSubforum}>
        <Card>
          <div className="subforum-header">
            <CardHeader title={this.props.name}/>
          </div>
          <div className="subforum-body">
            <CardText>
              {this.props.description}
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}