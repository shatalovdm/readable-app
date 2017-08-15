import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './Post';

class Posts extends Component {

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<Link key={post.id} className="list-group-item" to={`/posts/${post.id}`}>
					<Post post={post}/>
				</Link>
			);
		});
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<h4>Posts</h4>
				<div className="list-group">
					{this.renderPosts()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);