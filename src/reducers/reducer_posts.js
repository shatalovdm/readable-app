import _ from 'lodash';
import { FETCH_POSTS, FETCH_POSTS_CATEGORY, FETCH_POST, VOTE_POST, DELETE_POST, CREATE_POST, EDIT_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
		case FETCH_POSTS_CATEGORY:
			return _.mapKeys(action.payload, 'id');
		case FETCH_POST:
		case VOTE_POST:
		case DELETE_POST:
		case CREATE_POST:
		case EDIT_POST:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}