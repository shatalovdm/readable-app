import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsCategories } from '../actions';

class Categories extends Component {

	componentDidMount() {
		this.props.fetchPostsCategories();
	}

	renderCategories() {
		return _.map(this.props.categories, category => {
			return (
				<Link key={category.name} className="list-group-item" to={`/categories/${category.path}`}>
					{category.name}
				</Link>
			);
		});
	}

	render() {
		return (
			<div>
				<h4>Categories</h4>
				<div className="list-group">
					{this.renderCategories()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchPostsCategories })(Categories);