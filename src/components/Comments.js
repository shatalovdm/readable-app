import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchComments, deleteComment } from '../actions';
import { connect } from 'react-redux';
import Item from './Item';
import NewComment from './NewComment';

class Comments extends Component {

	state = {
		sortBy: 'voteScore'
	}

	renderComments() {
		const comments = _.sortBy(this.props.comments, this.state.sortBy).reverse();
		return comments.map(comment => {
			return (
				<li className="list-group-item" key={comment.id}>
					<ul className="list-inline pull-right">
					  	<li>
					  		<Link to="/edit">
					  			<button className="btn btn-primary">Edit</button>
					  		</Link>
					  	</li>
					  	<li>
					  		<button onClick={() => this.props.deleteComment(comment.id)} className="btn btn-danger">Delete</button>
					  	</li>
					</ul>
					<Item item={comment} includeLink={false}/>
				</li>
			);
		});
	}

	componentDidMount() {
		this.props.fetchComments(this.props.postId);
	}

	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
				    <h3 className="panel-title">Comments</h3>
				</div>
				<div className="panel-body">
					<NewComment parentId={this.props.postId}/>
				</div>
				<ul className="list-group">
					<li className="list-group-item" key="Sort by">
						<span>Sort By </span>
						<div className="btn-group" role="group" aria-label="Sort By">
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="voteScore" type="button" className="btn btn-default">Vote</button>
						  	<button onClick={(e) => this.setState({	sortBy: e.target.value })} value="timestamp" type="button" className="btn btn-default">Time</button>
						</div>
					</li>
					{this.renderComments()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { comments: _.pickBy(state.comments, function(o) { return o.parentId == ownProps.postId }) }
}

export default connect(mapStateToProps, { fetchComments, deleteComment })(Comments);