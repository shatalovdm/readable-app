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
				<li className="list-group-item" key={category.name}>
					<Link to={`/categories/${category.path}`}>
						{category.name}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
				    <h3 className="panel-title">Categories</h3>
				</div>
				<div className="panel-body">
					<Link to="/">
						<button className="btn btn-default">
							Show All
						</button>
					</Link>
				</div>
				<ul className="list-group">
					{this.renderCategories()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchPostsCategories })(Categories);