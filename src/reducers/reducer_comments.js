import _ from 'lodash';
import { FETCH_COMMENTS, VOTE_COMMENT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_COMMENTS:
			return Object.assign({}, state, _.mapKeys(action.payload, 'id'));
		case VOTE_COMMENT:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}