import axios from 'axios';
import Guid from 'guid';

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
  timeout: 10000,
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

export function createPost(values, callback) {
	var data = {
		id: Guid.raw(),
        timestamp: Date.now(),
        title: values.title,
        body: values.body,
        author: values.author,
        category: values.category
	}
	const result = instance.post('/posts', data);
    return (dispatch) => {
	    result.then(response => dispatch({type: CREATE_POST, payload: response.data})
	    ).then(() => callback());
    };
}

export function votePost(id, option) {
	var data = {option: option};
	const result = instance.post(`/posts/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: VOTE_POST, payload: response.data}));
    };
}

export function editPost(id, values, callback) {
	var data = { 
		timestamp: Date.now(),
		title: values.title,
		body: values.body 
	};
	const result = instance.put(`/posts/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: EDIT_POST, payload: response.data})
	    ).then(() => callback());
    };
}

export function deletePost(id, callback) {
	const result = instance.delete(`/posts/${id}`);
    return (dispatch) => {
	    result.then(response => dispatch({type: DELETE_POST, payload: response.data})
		).then(() => callback());
    };
}

export function fetchComments(id) {
	const result = instance.get(`/posts/${id}/comments`);
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_COMMENTS, payload: response.data}));
    };
}

export function fetchComment(id) {
	const result = instance.get(`/comments/${id}`);
    return (dispatch) => {
	    result.then(response => dispatch({type: FETCH_COMMENT, payload: response.data}));
    };
}

export function createComment(id, values) {
	var data = {
		id: Guid.raw(),
        timestamp: Date.now(),
        body: values.body,
        author: values.author,
        parentId: id
	}
	const result = instance.post('/comments', data);
    return (dispatch) => {
	    result.then(response => dispatch({type: CREATE_COMMENT, payload: response.data}));
    };
}

export function voteComment(id, option) {
	var data = {option: option};
	const result = instance.post(`/comments/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: VOTE_COMMENT, payload: response.data}));
    };
}

export function editComment(id, body, callback) {
	var data = {
		body,
        timestamp: Date.now()
	}
	const result = instance.put(`/comments/${id}`, data);
    return (dispatch) => {
	    result.then(response => dispatch({type: EDIT_COMMENT, payload: response.data})
	    ).then(() => callback());
    };
}

export function deleteComment(id) {
	const result = instance.delete(`/comments/${id}`);
    return (dispatch) => {
	    result.then(response => dispatch({type: DELETE_COMMENT, payload: response.data}));
    };
}