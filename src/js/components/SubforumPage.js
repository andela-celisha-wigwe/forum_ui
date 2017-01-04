'use strict'

import React from 'react'
import PostAction from '../actions/post_action'
import PostStore from '../stores/post_store'
import PostCard from './PostCard'

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: []
		}
		this.onPosts = this.onPosts.bind(this)
	}

	componentDidMount () {
		this.unsubscribe = PostStore.listen(this.onPosts)
		// console.log(this.props.params.id)
		PostAction.listPosts(this.props.params.id)
	}

	componentWillUnmount () {
		this.unsubscribe()
	}

	onPosts (posts) {
		this.setState({
			posts
		})
	}

	render () {
		const postList = this.state.posts.map((post) =>
			(<PostCard body={post.body} key={post._id["$oid"]} title={post.title} id={post._id["$oid"]} />)
		)
		return (
			<div>{ postList }</div>
		)
	}
}