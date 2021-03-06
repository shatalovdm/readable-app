import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsCategory, fetchPosts } from '../actions';
import Categories from './Categories';
import Posts from './Posts';

export class App extends Component {

	renderPosts() {
		return <Posts posts={this.props.posts} />;
	}

	componentDidMount() {
		const {category} = this.props.match.params;
		if (category) {
			this.props.fetchPostsCategory(category);	
		} else {
			this.props.fetchPosts();
		}
	}

	componentWillReceiveProps(nextProps) {
		const {category} = nextProps.match.params;
		if (this.props.match.params.category !== category) {
			if (category) {
				this.props.fetchPostsCategory(category);	
			} else {
				this.props.fetchPosts();
			}
		}
	}

	render() {
		return (
			<div className="app row">
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