import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { withRouter } from 'react-router';

export class Posts extends Component {

	state = {
		sortBy: 'voteScore'
	}

	renderPosts() {
		if (_.keys(this.props.posts).length === 0) {
			if (this.props.match.params.category) {
				return (
					<li className="list-group-item" key="Not found">
						<h5>Could not find any post for this category.</h5>
					</li>
				);
			} else {
				return (
					<li className="list-group-item" key="Loading">
						<h5>Loading...</h5>
					</li>
				);
			}

		}
		const posts = _.sortBy(this.props.posts, this.state.sortBy).reverse();
		return posts.map(post => {
			return (
				<li className="post list-group-item" key={post.id}>
					<Post post={post} includeLink={true}/>
				</li>
			);
		});
	}

	render() {
		console.log(this.props);
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
				    <h3 className="panel-title">Posts</h3>
				</div>
				<div className="panel-body">
					<div className="pull-left">
						<span>Sort By </span>
						<div className="sort btn-group" role="group" aria-label="Sort By">
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="voteScore" type="button" className="btn btn-default">Vote</button>
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="timestamp" type="button" className="btn btn-default">Time</button>
						</div>
					</div>
  					<div className="pull-right">
  						<Link to="/new">
  							<button type="button" className="new-post btn btn-default">New Post</button>
  						</Link>
  					</div>
				</div>
				<ul className="list-group">
					{this.props.posts && this.renderPosts()}
				</ul>
			</div>
		);
	}
}
export default withRouter(Posts);