import _ from 'lodash';
import { FETCH_POSTS, FETCH_POSTS_CATEGORY, FETCH_POST, VOTE_POST, DELETE_POST, CREATE_POST, EDIT_POST } from '../actions';

export default function(state = {}, action) {
	let posts = {};
	switch (action.type) {
		case FETCH_POSTS:
		case FETCH_POSTS_CATEGORY:
			posts = getNotDeletedPosts(action.payload);
			return _.mapKeys(posts, 'id');
		case FETCH_POST:
		case VOTE_POST:
		case CREATE_POST:
		case EDIT_POST:
			posts = getNotDeletedPosts(action.payload);
			return { ...state, [posts.id]: posts };
		case DELETE_POST:
			return _.omit(state, action.payload.id);
		default:
			return state;
	}
}

function getNotDeletedPosts(posts) {
	return _.pickBy(posts, function(o) { return !o.deleted });
}