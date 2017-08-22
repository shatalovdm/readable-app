import _ from 'lodash';
import React, { Component } from 'react';
import { votePost, fetchComments } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

class Post extends Component {


	voteUp() {
		this.props.votePost(this.props.post.id, "upVote");
	}
	voteDown() {
		this.props.votePost(this.props.post.id, "downVote");
	}
	componentDidMount() {
			this.props.fetchComments(this.props.post.id);
	}

	render() {
		const { title, timestamp, body, author, category, voteScore } = this.props.post;
		return (
			<div className="row">
				<div className="col-xs-1 text-center">
					<i onClick={this.voteUp.bind(this)} className="material-icons md-36">keyboard_arrow_up</i>
					<h5>{voteScore}</h5>
					<i onClick={this.voteDown.bind(this)} className="material-icons md-36">keyboard_arrow_down</i>
				</div>
				<div className="col-xs-11">
					<Link to={`posts/${this.props.id}`} > 
						<h5 className="list-group-item-heading">{title}</h5>
					</Link>
					<p className="list-group-item-text">{body}</p>
					<p className="text-right">{_.keys(this.props.comments).length} Comment(s)</p>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state, ownProps) {

	return { comments:  _.pickBy(state.comments, function(o) { return o.parentId == ownProps.post.id; }) }
}

export default connect(mapStateToProps, { votePost, fetchComments })(Post);
