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

export function fetchPostsCategories() {
    const request = fetch('/categories', { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(categories => 
	      	dispatch({type: FETCH_POSTS_CATEGORIES, payload: categories})
	    );
    };
}

export function fetchPostsCategory(category) {
	const request = fetch(`/${category}/posts`, { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(posts => 
	      	dispatch({type: FETCH_POSTS_CATEGORY, payload: posts})
	    );
    };
}

export function fetchPosts() {
	const request = fetch('/posts', { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(posts => 
	      	dispatch({type: FETCH_POSTS, payload: posts})
	    );
    };
}

export function fetchPost(id) {
	const request = fetch(`/posts/${id}`, { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: FETCH_POST, payload: post})
	    );
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
	const request = fetch('/posts', { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: CREATE_POST, payload: post})
	    );
    };
}

export function votePost(id, option) {
	var data = { option };
	const request = fetch(`/posts/${id}`, { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: VOTE_POST, payload: post})
	    );
    };
}

export function editPost(id, values) {
	var data = { 
		timestamp: Date.now(),
		title: values.title,
		body: values.body 
	};
	const request = fetch(`/posts/${id}`, { method: 'PUT', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: EDIT_POST, payload: post})
	    );
    };
}

export function deletePost(id) {
	const request = fetch(`/posts/${id}`, { method: 'DELETE', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(post => 
	      	dispatch({type: DELETE_POST, payload: post})
	    );
    };
}

export function fetchComments(id) {
	const request = fetch(`/posts/${id}/comments`, { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(comments => 
	      	dispatch({type: FETCH_COMMENTS, payload: comments})
	    );
    };
}

export function fetchComment(id) {
	const request = fetch(`/comments/${id}`, { method: 'GET', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
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
	const request = fetch('/comments', { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: CREATE_COMMENT, payload: comment})
	    );
    };
}

export function voteComment(id, option) {
	var data = { option };
	const request = fetch(`/comments/${id}`, { method: 'POST', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: VOTE_COMMENT, payload: comment})
	    );
    };
}

export function editComment(id, body) {
	var data = { 
		timestamp: Date.now(),
		body 
	};
	const request = fetch(`/comments/${id}`, { method: 'PUT', body: data, headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: EDIT_COMMENT, payload: comment})
	    );
    };
}

export function deleteComment(id) {
	const request = fetch(`/comments/${id}`, { method: 'DELETE', headers: { 'Authorization': AUTH_KEY }});
    return (dispatch) => {
	    request.then(response => response.json()
	    ).then(comment => 
	      	dispatch({type: DELETE_COMMENT, payload: comment})
	    );
    };
}