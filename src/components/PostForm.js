import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, editPost, fetchPost } from '../actions';
import { Field, reduxForm } from 'redux-form';

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title'
	},
	body: {
		type: 'textarea',
		label: 'Content'
	},
	category: {
		type: 'input',
		label: 'Category'
	},
	author: {
		type: 'input',
		label: 'Author'
	}
}

class PostForm extends Component {
	renderField(field) {
		const fieldConfig = FIELDS[field.input.name];
		return (
			<div className={`form-group ${field.meta.touched && field.meta.error ? 'has-error' : ''} `}>
				<label>{fieldConfig.label}</label>
				{(fieldConfig.type === 'textarea') ? 
					<fieldConfig.type className='form-control' rows='3' type='text' {...field.input} /> :
					<fieldConfig.type className='form-control' type='text' {...field.input} />
				}
				<div className='help-block'>{field.meta.touched ? field.meta.error : ""}</div>
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

	componentDidMount() {
		if (this.props.form === 'editPost') {
			this.props.fetchPost(this.props.match.params.postId);
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
						{ _.keys(FIELDS).map( key => {
							return <Field name={key} key={key} component={this.renderField} />;
							})
						}
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}!`;
		}
	});

	return errors;
}

function mapStateToProps({ posts }, ownProps) {
	return {initialValues: posts[ownProps.match.params.postId]}
}

export const CreatePost = reduxForm({
	validate,
	form: 'createPost',
	fields: _.keys(FIELDS)
})(
	connect(null, { createPost })(PostForm)
);

export let EditPost = reduxForm({
	validate,
	form: 'editPost',
	fields: _.keys(FIELDS),
	enableReinitialize: true
})(PostForm);

EditPost = connect(mapStateToProps, { editPost, fetchPost })(EditPost);

