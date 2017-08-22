import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

export default class Posts extends Component {

	state = {
		sortBy: 'voteScore'
	}

	renderPosts() {
		const posts = _.sortBy(this.props.posts, this.state.sortBy).reverse();
		return posts.map( post => {
			return (
				<div className="list-group-item" key={post.id}>
					<Post post={post}/>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h4>Posts</h4>
				<div className="row">
					<div className="col-md-4">
						<span>Sort By </span>
						<div className="btn-group" role="group" aria-label="Sort By">
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="voteScore" type="button" className="btn btn-default">Vote</button>
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="timestamp" type="button" className="btn btn-default">Time</button>
						</div>
					</div>
  					<div className="col-md-2 col-md-offset-6">
  						<button type="button" className="btn btn-default">New Post</button>
  					</div>
				</div>
				<div className="list-group">
					{this.renderPosts()}
				</div>
			</div>
		);
	}
}