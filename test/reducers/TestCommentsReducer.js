import commentsReducer from '../../src/reducers/reducer_comments';
import { FETCH_COMMENTS, VOTE_COMMENT, CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../../src/actions';

describe('Comments Reducer', () => {
	const comments = {
		"894tuq4ut84ut8v4t8wun89g": {
			id: '894tuq4ut84ut8v4t8wun89g',
			parentId: "8xf0y6ziyjabvozdd253nd",
			timestamp: 1468166872634,
			body: 'Hi there! I am a COMMENT.',
			author: 'thingtwo',
			voteScore: 6,
			deleted: false,
			parentDeleted: false 
		},
		"8tu4bsun805n8un48ve89": {
			id: '8tu4bsun805n8un48ve89',
			parentId: "8xf0y6ziyjabvozdd253nd",
			timestamp: 1469479767190,
			body: 'Comments. Are. Cool.',
			author: 'thingone',
			voteScore: -5,
			deleted: false,
			parentDeleted: false
		}
	}

	it('handles action with unknown type', () => {
		expect(commentsReducer({}, 'hey')).to.eql({});
	});

	describe('resulting in many comments', () => {
		it('handles action of type FETCH_POSTS_CATEGORY', () => {
			const action = { type: FETCH_COMMENTS, payload: comments };
			expect(commentsReducer({}, action)).to.eql(comments);
		});	
	});

	describe('resulting in one comment', () => {
		const initialComment = {
			id: '894tuq4ut84ut8v4t8wun89g',
			parentId: "8xf0y6ziyjabvozdd253nd",
			timestamp: 1468166872634,
			body: 'Hi there! I am a COMMENT.',
			author: 'thingtwo',
			voteScore: 6,
			deleted: false,
			parentDeleted: false 
		}
		const resultComment = {
			'894tuq4ut84ut8v4t8wun89g': {
				id: '894tuq4ut84ut8v4t8wun89g',
				parentId: "8xf0y6ziyjabvozdd253nd",
				timestamp: 1468166872634,
				body: 'Hi there! I am a COMMENT.',
				author: 'thingtwo',
				voteScore: 6,
				deleted: false,
				parentDeleted: false 
			}
		}
		it('handles action of type VOTE_COMMENT', () => {
			const action = { type: VOTE_COMMENT, payload: initialComment };
			expect(commentsReducer({}, action)).to.eql(resultComment);
		});			
		it('handles action of type CREATE_COMMENT', () => {
			const action = { type: CREATE_COMMENT, payload: initialComment };
			expect(commentsReducer({}, action)).to.eql(resultComment);
		});
		it('handles action of type EDIT_COMMENT', () => {
			const action = { type: EDIT_COMMENT, payload: initialComment };
			expect(commentsReducer({}, action)).to.eql(resultComment);
		});	
	});
	describe('which deletes comment', () => {		
		it('handles action of type DELETE_COMMENT', () => {
			const deletedComment = {
			    id: '894tuq4ut84ut8v4t8wun89g',
				parentId: "8xf0y6ziyjabvozdd253nd",
				timestamp: 1468166872634,
				body: 'Hi there! I am a COMMENT.',
				author: 'thingtwo',
				voteScore: 6,
				deleted: true,
				parentDeleted: false 
			}
			const result = {
				"8tu4bsun805n8un48ve89": {
					id: '8tu4bsun805n8un48ve89',
					parentId: "8xf0y6ziyjabvozdd253nd",
					timestamp: 1469479767190,
					body: 'Comments. Are. Cool.',
					author: 'thingone',
					voteScore: -5,
					deleted: false,
					parentDeleted: false
				}
			}
			const action = { type: DELETE_COMMENT, payload: deletedComment };
			expect(commentsReducer(comments, action)).to.eql(result);
		});	
	});
});