'use strict'

import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import SubforumStore from '../../shared/stores/subforum_store'
import SubforumAction from '../../shared/actions/subforum_action'
import SubforumCard from './SubforumCard'

import PostAction from '../../shared/actions/post_action'
import PostStore from '../../shared/stores/post_store'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [],
			subforum: {},
			showForm: true
		}
		this.onPosts = this.onPosts.bind(this)
		this.onSubforum = this.onSubforum.bind(this)
		this.handleFormToggle = this.handleFormToggle.bind(this)
	}

	componentDidMount () {
		this.unsubscribePosts = PostStore.listen(this.onPosts)
		this.unsubscribeSubforum = SubforumStore.listen(this.onSubforum)

		PostAction.listPosts(this.props.params.id)
		SubforumAction.viewSubforum(this.props.params.id)
	}

	componentWillUnmount () {
		this.unsubscribePosts()
		this.unsubscribeSubforum()
	}

	handleFormToggle () {
		this.setState({
			showForm: !this.state.showForm
		})
	}

	onSubforum (subforum) {
		this.setState({
			subforum
		})
	}

	onPosts (posts) {
		if (posts.constructor !== Array ) {
			posts = [posts].concat(this.state.posts)
		}
		this.setState({
			posts
		})
	}

	render () {
		const formClass = this.state.showForm ? 'form-showing' : 'form-hiding'
		const postList = this.state.posts.map((post) =>
			(<PostCard body={post.body} key={post._id["$oid"]} title={post.title} id={post._id["$oid"]} />)
		)
		return (
			<div>
				<Card>
					<div className="single-subforum-header subforum-header">
						<CardHeader title={this.state.subforum.name}/>
						<span onClick={this.handleFormToggle} className="toggleForm"> &times; </span>
					</div>
					<div className="subforum-container">
						<div className={`new-post-container ${formClass}`}>
							<NewPostForm subforumId={this.props.params.id} />
						</div>
						<div className={`posts-cards-container ${formClass}`}>
							{ postList }
						</div>
					</div>
				</Card>
			</div>
		)
	}
}