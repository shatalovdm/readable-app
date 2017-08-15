import _ from 'lodash';
import { FETCH_POSTS_CATEGORIES } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS_CATEGORIES:
			return action.payload.categories;
		default:
			return state;
	}
}