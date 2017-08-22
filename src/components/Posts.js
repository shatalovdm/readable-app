import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostIndex from './PostIndex';

export default class Posts extends Component {

	state = {
		sortBy: 'voteScore'
	}

	renderPosts() {
		const posts = _.sortBy(this.props.posts, this.state.sortBy).reverse();
		return posts.map( post => {
			return (
				<li className="list-group-item" key={post.id}>
					<PostIndex post={post} includeLink={true}/>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
				    <h3 className="panel-title">Posts</h3>
				</div>
				<div className="panel-body">
					<div className="pull-left">
						<span>Sort By </span>
						<div className="btn-group" role="group" aria-label="Sort By">
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="voteScore" type="button" className="btn btn-default">Vote</button>
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="timestamp" type="button" className="btn btn-default">Time</button>
						</div>
					</div>
  					<div className="pull-right">
  						<button type="button" className="btn btn-default">New Post</button>
  					</div>
				</div>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}