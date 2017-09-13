import postsReducer from '../../src/reducers/reducer_posts';
import { FETCH_POSTS_CATEGORY, FETCH_POSTS, FETCH_POST, VOTE_POST, DELETE_POST, CREATE_POST, EDIT_POST } from '../../src/actions';

describe('Posts Reducer', () => {
	const posts = {
		"8xf0y6ziyjabvozdd253nd": {
		    id: '8xf0y6ziyjabvozdd253nd',
		    timestamp: 1,
		    title: 'This project is created using React',
		    body: '',
		    author: 'Developer',
		    category: 'react',
		    voteScore: 6,
		    deleted: false 
		},
		  "6ni6ok3ym7mf1p33lnez": {
		    id: '6ni6ok3ym7mf1p33lnez',
		    timestamp: 2,
		    title: 'What about Redux',
		    body: 'Redux is used for state management in this awesome app.',
		    author: 'Another Developer',
		    category: 'redux',
		    voteScore: 4,
		    deleted: false
		}
	}

	it('handles action with unknown type', () => {
		expect(postsReducer({}, 'hey')).to.eql({});
	});

	describe('which results in many posts', () => {
		it('handles action of type FETCH_POSTS_CATEGORY', () => {
			const action = { type: FETCH_POSTS_CATEGORY, payload: posts };
			expect(postsReducer({}, action)).to.eql(posts);
		});	
		it('handles action of type FETCH_POSTS', () => {
			const action = { type: FETCH_POSTS, payload: posts };
			expect(postsReducer({}, action)).to.eql(posts);
		});			
	});

	describe('which results in one post', () => {
		const initialPost = {
			    id: '8xf0y6ziyjabvozdd253nd',
			    timestamp: 1,
			    title: 'This project is created using React',
			    body: '',
			    author: 'Developer',
			    category: 'react',
			    voteScore: 6,
			    deleted: false 
		}
		const resultPost = {
			"8xf0y6ziyjabvozdd253nd": {
			    id: '8xf0y6ziyjabvozdd253nd',
			    timestamp: 1,
			    title: 'This project is created using React',
			    body: '',
			    author: 'Developer',
			    category: 'react',
			    voteScore: 6,
			    deleted: false 
			}
		}	
		it('handles action of type VOTE_POST', () => {
			const action = { type: VOTE_POST, payload: initialPost };
			expect(postsReducer({}, action)).to.eql(resultPost);
		});		
		it('handles action of type FETCH_POST', () => {
			const action = { type: FETCH_POST, payload: initialPost };
			expect(postsReducer({}, action)).to.eql(resultPost);
		});		
		it('handles action of type CREATE_POST', () => {
			const action = { type: CREATE_POST, payload: initialPost };
			expect(postsReducer({}, action)).to.eql(resultPost);
		});
	});

	describe('which deletes post', () => {		
		it('handles action of type DELETE_POST', () => {
			const deletedPost = {
			    id: '8xf0y6ziyjabvozdd253nd',
			    timestamp: 1,
			    title: 'This project is created using React',
			    body: '',
			    author: 'Developer',
			    category: 'react',
			    voteScore: 6,
			    deleted: true
			}
			const result = {
				"6ni6ok3ym7mf1p33lnez": {
				    id: '6ni6ok3ym7mf1p33lnez',
				    timestamp: 2,
				    title: 'What about Redux',
				    body: 'Redux is used for state management in this awesome app.',
				    author: 'Another Developer',
				    category: 'redux',
				    voteScore: 4,
				    deleted: false
				}
			}
			const action = { type: DELETE_POST, payload: deletedPost };
			expect(postsReducer(posts, action)).to.eql(result);
		});	
	});
});