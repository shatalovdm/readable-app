import _ from 'lodash';
import React, { Component } from 'react';

class Post extends Component {

	render() {
		const { title, timestamp, body, author, category, voteScore } = this.props.post;
		return (
			<div className="row">
				<div className="col-xs-1 text-center">
					<h5>{voteScore}</h5>
				</div>
				<div className="col-xs-11">
					<h5 className="list-group-item-heading">{title}</h5>
					<p className="list-group-item-text">{body}</p>
				</div>
			</div>
		);
	}
}

export default Post;
