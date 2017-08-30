import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import { Field, reduxForm } from 'redux-form';

class NewComment extends Component {


	render() {

	}
}

export default reduxForm({
	validate,
	form: 'NewComment'
})(
	connect(null, { createComment })(NewComment)
);