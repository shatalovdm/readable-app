import _ from 'lodash';
import { FETCH_COMMENTS } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_COMMENTS:
			return Object.assign({}, state, _.mapKeys(action.payload, 'id'));
		default:
			return state;
	}
}