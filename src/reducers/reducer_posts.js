import _ from 'lodash';
import { FETCH_POSTS, FETCH_POSTS_CATEGORY, FETCH_POST, VOTE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload, 'id');
		case FETCH_POSTS_CATEGORY:
			return _.mapKeys(action.payload, 'id');
		case FETCH_POST:
			return { ...state, [action.payload.id]: action.payload };
		case VOTE_POST:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}