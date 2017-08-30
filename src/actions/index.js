import axios from 'axios';

export const FETCH_POSTS_CATEGORIES = 'fetch_posts_categories';
export const FETCH_POSTS_CATEGORY = 'fetch_posts_category';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const VOTE_POST = 'vote_post';
export const EDIT_POST = 'edit_post';
export const DELETE_POST = 'delete_post';
export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_COMMENT = 'fetch_comment';
export const CREATE_COMMENT = 'create_comment';
export const VOTE_COMMENT = 'vote_comment';
export const EDIT_COMMENT = 'edit_comment';
export const DELETE_COMMENT = 'delete_comment';

const AUTH_KEY = 'banana';

const instance = axios.create({
  baseURL: 'https://cryptic-depths-44463.herokuapp.com/',
  timeout: 5000,
  headers: { 'Authorization': AUTH_KEY }
});

export function fetchPostsCategories() {
    const result = instance.get('/categories');
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_POSTS_CATEGORIES, payload: response.data}));
    };
}

export function fetchPostsCategory(category) {
	const result = instance.get(`/${category}/posts`);
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_POSTS_CATEGORY, payload: response.data}));
    };
}

export function fetchPosts() {
	const result = instance.get('/posts');
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_POSTS, payload: response.data}));
    };
}

export function fetchPost(id) {
	const result = instance.get(`/posts/${id}`);
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_POST, payload: response.data}));
    };
}

export function createPost(values) {
	var data = {
		id: guid(),
        timestamp: Date.now(),
        title: values.title,
        body: values.body,
        owner: values.owner,
        category: values.category
	};
	const result = fetch('/api/posts', { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: CREATE_POST, payload: post})
	    );
    };
}

export function votePost(id, option) {
	var data = {option: option};
	const result = instance.post(`/posts/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: VOTE_POST, payload: response.data}));
    };
}

export function editPost(id, values) {
	var data = { 
		timestamp: Date.now(),
		title: values.title,
		body: values.body 
	};
	const result = fetch(`/api/posts/${id}`, { method: 'PUT', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: EDIT_POST, payload: post})
	    );
    };
}

export function deletePost(id) {
	const result = fetch(`/api/posts/${id}`, { method: 'DELETE', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: DELETE_POST, payload: post})
	    );
    };
}

export function fetchComments(id) {
	const result = instance.get(`/posts/${id}/comments`);
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_COMMENTS, payload: response.data}));
    };
}

export function fetchComment(id) {
	const result = fetch(`/api/comments/${id}`, { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: FETCH_COMMENT, payload: comment})
	    );
    };
}

export function createComment(id, values) {
	var data = {
		id: guid(),
        timestamp: Date.now(),
        body: values.body,
        owner: values.owner,
        parentId: id
	}
	const result = fetch('/api/comments', { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: CREATE_COMMENT, payload: comment})
	    );
    };
}

export function voteComment(id, option) {
	var data = {option: option};
	const result = instance.post(`/comments/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: VOTE_COMMENT, payload: response.data}));
    };
}

export function editComment(id, body) {
	var data = { 
		timestamp: Date.now(),
		body 
	};
	const result = fetch(`/api/comments/${id}`, { method: 'PUT', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: EDIT_COMMENT, payload: comment})
	    );
    };
}

export function deleteComment(id) {
	const result = fetch(`/api/comments/${id}`, { method: 'DELETE', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    result.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: DELETE_COMMENT, payload: comment})
	    );
    };
}