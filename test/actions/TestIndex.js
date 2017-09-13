import { fetchPosts, FETCH_POSTS } from '../../src/actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const AUTH_KEY = 'banana';

describe('Actions', () => {
	// afterEach(() => {
 //    	nock.cleanAll()
 //  	});

	// describe('fecthPosts', () => {

	// 	// it('has the correct type', () => {
	// 	//     const action = fecthPosts;
	// 	//     expect(action.type).to.equal(FETCH_POSTS);
	//  //    });

	// 	it('returns all posts', () => {
	// 		const result  = nock('https://cryptic-depths-44463.herokuapp.com/', {
	// 				reqheaders: {
	// 					'Authorization': AUTH_KEY
	// 				}
	// 			})
	// 			.get('/posts')
	// 			.reply(200);
	// 		console.log(result);
	// 		const store = mockStore({});
	// 		console.log(store.dispatch(fetchPosts()))
	// 			const actualActions = store.getActions().map(action => action.type)
 //        		expect(actualActions).to.eql(FETCH_POSTS)
	// 	});
	// 	// it('has the correct payload', () => {
	// 	// 	const action = fetchPosts();
	// 	// 	expect(action.payload).to
	// 	// });
	// });
});