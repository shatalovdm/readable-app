import categoriesReducer from '../../src/reducers/reducer_categories';
import { FETCH_POSTS_CATEGORIES } from '../../src/actions';

describe('Categories Reducer', () => {
	it('handles action with unknown type', () => {
		expect(categoriesReducer({}, 'hey')).to.eql({});
	});

	it('handles action of type FETCH_POSTS_CATEGORIES', () => {
		const action = { type: FETCH_POSTS_CATEGORIES, payload: {categories: ['react', 'redux']} };
		expect(categoriesReducer({}, action)).to.eql(['react', 'redux']);
	});
});