import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import Post from './Post';
import Comments from './Comments';
import { Link } from 'react-router-dom';


class PostView extends Component {

	onDeleteClick() {
		this.props.deletePost(this.props.post.id, () => {
			this.props.history.push('/');
		});
	}

	componentDidMount() {
		const {postId} = this.props.match.params;
		this.props.fetchPost(postId);
	}

	render() {
		if (!this.props.post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
					    <h3 className="panel-title">Post</h3>
					</div>
					<div className="panel-body">
						<ul className="list-inline pull-right">
						  	<li>
						  		<Link to={`/posts/${this.props.post.id}/edit`}>
						  			<button className="btn btn-primary">Edit</button>
						  		</Link>
						  	</li>
						  	<li>
						  		<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete</button>
						  	</li>
						</ul>
						<Post post={this.props.post} includeLink={false}/>
					</div>
				</div>
				<Comments postId={this.props.post.id}/>
			</div>
		);
	}


}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.postId] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostView);