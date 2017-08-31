import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createComment, editComment } from '../actions';
import { reset, Field, reduxForm } from 'redux-form';

class CommentForm extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-error' : ''}`;
		return (
			<div className={className}>
				<lable className="control-label" >{field.label}</lable>
				{ field.label == 'Author' ? <input
					className="form-control"
					type="text"
					{...field.input}
					/> : <textarea 
					className="form-control" 
					rows="3" 
					{...field.input} 
					/> 
				}
				<div className="help-block">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		if (this.props.form === 'editComment') {
			this.props.editComment(values.id, values.body, () => {
				this.props.history.push(`/posts/${values.parentId}`);
			});
		} else {
			this.props.createComment(this.props.parentId, values);
		}
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="New Comment"
					name="body"
					component={this.renderField}
				/>
				<Field
					label="Author"
					name="author"
					component={this.renderField}
					disabled={ this.props.form === 'editComment' }
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.body) {
		errors.body = "Enter a comment before submitting it!";
	}
	if (!values.author) {
		errors.author = "Enter your name!";
	}

	return errors;
}

function afterSubmit(result, dispatch) {
	dispatch(reset('createComment'));
}

export const CreateComment = reduxForm({
	validate,
	form: 'createComment', 
	onSubmitSuccess: afterSubmit
})(
	connect(null, { createComment })(CommentForm)
);

export const EditComment = withRouter(reduxForm({
  validate,
  form: 'editComment'
})(
	connect(null, { editComment })(CommentForm)
));
