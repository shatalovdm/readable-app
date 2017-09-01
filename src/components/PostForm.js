import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, editPost } from '../actions';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-error' : ''}`;
		return (
			<div className={className}>
				<lable className="control-label" >{field.label}</lable>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/> 
				<div className="help-block">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		if (this.props.form === 'editPost') {
			this.props.editPost(values.id, values, () => {
				this.props.history.push('/');
			});
		} else {
			this.props.createPost(values, () => {
				this.props.history.push('/');
			});
		}
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
				    <h3 className="panel-title">{this.props.form === 'editPost' ? 'Edit Post' : 'New Post'}</h3>
				</div>
				<div className="panel-body">
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field
							label="Title"
							name="title"
							component={this.renderField}
						/>
						<Field
							label="Text"
							name="body"
							component={this.renderField}
						/>
						<Field
							label="Category"
							name="category"
							component={this.renderField}
						/>
						<Field
							label="Author"
							name="author"
							component={this.renderField}
							disabled={ this.props.form === 'editPost' }
						/>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
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

function mapStateToProps({ posts }, ownProps) {
	return {initialValues: posts[ownProps.match.params.postId]}
}

export const CreatePost = reduxForm({
	validate,
	form: 'createPost'
})(
	connect(null, { createPost })(PostForm)
);

export const EditPost = reduxForm({
  validate,
  form: 'editPost'
})(
	connect(mapStateToProps, { editPost })(PostForm)
);
