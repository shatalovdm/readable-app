import _ from 'lodash';
import { FETCH_COMMENTS, VOTE_COMMENT, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_COMMENTS:
			return { ...state, ...(_.mapKeys(action.payload, 'id'))};
		case VOTE_COMMENT:
		case CREATE_COMMENT:
		case EDIT_COMMENT:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_COMMENT:
			return _.omit(state, action.payload.id);
		default:
			return state;
	}
}