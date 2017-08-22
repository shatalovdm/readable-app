import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class Comments extends Component {
	render() {
		return (
			<ul className="list-group">
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { comments: state.commets }
}

export default connect(mapStateToProps, { fetchComments })(Comments);