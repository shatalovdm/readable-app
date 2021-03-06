import _ from 'lodash';
import React from 'react';
import { voteComment, deleteComment } from '../actions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

const Comment = (props) =>  {	
	const {timestamp, body, author, category, voteScore, id} = props.comment;
	return (
		<div className="row">
			<ul className="list-inline pull-right">
			  	<li>
			  		<Link to={`${props.match.url}/comments/${id}`}>
			  			<button className="btn btn-primary">Edit</button>
			  		</Link>
			  	</li>
			  	<li>
			  		<button onClick={() => props.deleteComment(id)} className="btn btn-danger">Delete</button>
			  	</li>
			</ul>
			<div className="col-xs-1 text-center">
				<i onClick={() => props.voteComment(id, "upVote")} className="material-icons md-36">keyboard_arrow_up</i>
				<h5>{voteScore}</h5>
				<i onClick={() => props.voteComment(id, "downVote")} className="material-icons md-36">keyboard_arrow_down</i>
			</div>
			<div className="col-xs-11">
				<p className="list-group-item-text">{body}</p>
				<div className="row">
					<div className="col-md-3 col-md-offset-9">
						<ul className="list-inline">
						  	<li>by {author}</li>
						  	<li>{new Date(timestamp).toDateString()}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(connect(null, { voteComment, deleteComment })(Comment));