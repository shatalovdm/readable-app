import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsCategories } from '../actions';
import Categories from './Categories';
import Posts from './Posts';

class App extends Component {
	componentDidMount() {
		this.props.fetchPostsCategories();
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<Posts categories={this.props.categories}/>
				</div>
				<div className="col-md-4">
					<Categories categories={this.props.categories}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchPostsCategories })(App);