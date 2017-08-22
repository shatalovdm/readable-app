import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsCategory, fetchPosts } from '../actions';
import Categories from './Categories';
import Posts from './Posts';

class App extends Component {

	renderPosts() {
		const {posts} = this.props;
		if ((_.keys(posts).length === 0) && this.props.match.params.category) {
			return <div>Could not find any post for this category.</div>;
		} else if (_.keys(posts).length === 0) {
			return <div>Loading...</div>;
		} else {
			return <Posts posts={this.props.posts}/>;
		}
	}

	componentDidMount() {
		const {category} = this.props.match.params;
		console.log(category);
		if (category) {
			this.props.fetchPostsCategory(category);	
		} else {
			this.props.fetchPosts();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.category != nextProps.match.params.category) {
			this.props.fetchPostsCategory(nextProps.match.params.category);	
		}
	}

	render() {
		console.log('oals');
		return (
			<div className="row">
				<div className="col-md-8">
					{ this.renderPosts() }
				</div>
				<div className="col-md-4">
					<Categories />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts, fetchPostsCategory })(App);