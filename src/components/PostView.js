import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import Item from './Item';
import Comments from './Comments';
import { Link } from 'react-router-dom';


class PostView extends Component {

	deletePost() {

	}

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
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
						  		<Link to="/edit">
						  			<button className="btn btn-default">Edit</button>
						  		</Link>
						  	</li>
						  	<li>
						  		<button onClick={this.deletePost()} className="btn btn-default">Delete</button>
						  	</li>
						</ul>
						<div className="row">
							<Item item={this.props.post} includeLink={false}/>
						</div>
					</div>
				</div>
				<Comments postId={this.props.post.id}/>
			</div>
		);
	}


}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostView);