import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPostsCategory } from '../actions';

class Categories extends Component {

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

export default Categories;