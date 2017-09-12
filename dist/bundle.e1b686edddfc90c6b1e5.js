webpackJsonp([1,2],{

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
	_inherits(Post, _Component);

	function Post() {
		_classCallCheck(this, Post);

		return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
	}

	_createClass(Post, [{
		key: 'renderTitle',
		value: function renderTitle() {
			var _props$post = this.props.post,
			    title = _props$post.title,
			    id = _props$post.id,
			    category = _props$post.category;

			if (this.props.includeLink) {
				return _react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/' + category + '/' + id },
					_react2.default.createElement(
						'h5',
						{ className: 'post-title list-group-item-heading' },
						title
					)
				);
			}
			return _react2.default.createElement(
				'h5',
				{ className: 'post-title list-group-item-heading' },
				title
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchComments(this.props.post.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props$post2 = this.props.post,
			    timestamp = _props$post2.timestamp,
			    body = _props$post2.body,
			    author = _props$post2.author,
			    category = _props$post2.category,
			    voteScore = _props$post2.voteScore,
			    id = _props$post2.id;

			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-1 text-center' },
					_react2.default.createElement(
						'i',
						{ onClick: function onClick() {
								return _this2.props.votePost(id, "upVote");
							}, className: 'material-icons md-36' },
						'keyboard_arrow_up'
					),
					_react2.default.createElement(
						'h5',
						null,
						voteScore
					),
					_react2.default.createElement(
						'i',
						{ onClick: function onClick() {
								return _this2.props.votePost(id, "downVote");
							}, className: 'material-icons md-36' },
						'keyboard_arrow_down'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-11' },
					this.renderTitle(),
					_react2.default.createElement(
						'p',
						{ className: 'list-group-item-text' },
						body
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-3 col-md-offset-9' },
							_react2.default.createElement(
								'ul',
								{ className: 'list-inline' },
								_react2.default.createElement(
									'li',
									null,
									'by ',
									author
								),
								_react2.default.createElement(
									'li',
									null,
									new Date(timestamp).toDateString()
								),
								_react2.default.createElement(
									'li',
									null,
									_lodash2.default.keys(this.props.comments).length,
									' Comment(s)'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Post;
}(_react.Component);

function mapStateToProps(state, ownProps) {
	return { comments: _lodash2.default.pickBy(state.comments, function (o) {
			return o.parentId == ownProps.post.id;
		}) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { votePost: _actions.votePost, voteComment: _actions.voteComment, fetchComments: _actions.fetchComments })(Post);

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});
exports.DELETE_COMMENT = exports.EDIT_COMMENT = exports.VOTE_COMMENT = exports.CREATE_COMMENT = exports.FETCH_COMMENT = exports.FETCH_COMMENTS = exports.DELETE_POST = exports.EDIT_POST = exports.VOTE_POST = exports.CREATE_POST = exports.FETCH_POST = exports.FETCH_POSTS = exports.FETCH_POSTS_CATEGORY = exports.FETCH_POSTS_CATEGORIES = undefined;
exports.fetchPostsCategories = fetchPostsCategories;
exports.fetchPostsCategory = fetchPostsCategory;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.createPost = createPost;
exports.votePost = votePost;
exports.editPost = editPost;
exports.deletePost = deletePost;
exports.fetchComments = fetchComments;
exports.fetchComment = fetchComment;
exports.createComment = createComment;
exports.voteComment = voteComment;
exports.editComment = editComment;
exports.deleteComment = deleteComment;

var _axios = __webpack_require__(112);

var _axios2 = _interopRequireDefault(_axios);

var _guid = __webpack_require__(113);

var _guid2 = _interopRequireDefault(_guid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_POSTS_CATEGORIES = exports.FETCH_POSTS_CATEGORIES = 'fetch_posts_categories';
var FETCH_POSTS_CATEGORY = exports.FETCH_POSTS_CATEGORY = 'fetch_posts_category';
var FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';
var FETCH_POST = exports.FETCH_POST = 'fetch_post';
var CREATE_POST = exports.CREATE_POST = 'create_post';
var VOTE_POST = exports.VOTE_POST = 'vote_post';
var EDIT_POST = exports.EDIT_POST = 'edit_post';
var DELETE_POST = exports.DELETE_POST = 'delete_post';
var FETCH_COMMENTS = exports.FETCH_COMMENTS = 'fetch_comments';
var FETCH_COMMENT = exports.FETCH_COMMENT = 'fetch_comment';
var CREATE_COMMENT = exports.CREATE_COMMENT = 'create_comment';
var VOTE_COMMENT = exports.VOTE_COMMENT = 'vote_comment';
var EDIT_COMMENT = exports.EDIT_COMMENT = 'edit_comment';
var DELETE_COMMENT = exports.DELETE_COMMENT = 'delete_comment';

var AUTH_KEY = 'banana';

var instance = _axios2.default.create({
			baseURL: 'https://cryptic-depths-44463.herokuapp.com/',
			timeout: 10000,
			headers: { 'Authorization': AUTH_KEY }
});

function fetchPostsCategories() {
			var result = instance.get('/categories');
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_POSTS_CATEGORIES, payload: response.data });
						});
			};
}

function fetchPostsCategory(category) {
			var result = instance.get('/' + category + '/posts');
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_POSTS_CATEGORY, payload: response.data });
						});
			};
}

function fetchPosts() {
			var result = instance.get('/posts');
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_POSTS, payload: response.data });
						});
			};
}

function fetchPost(id) {
			var result = instance.get('/posts/' + id);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_POST, payload: response.data });
						});
			};
}

function createPost(values, callback) {
			var data = {
						id: _guid2.default.raw(),
						timestamp: Date.now(),
						title: values.title,
						body: values.body,
						author: values.author,
						category: values.category
			};
			var result = instance.post('/posts', data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: CREATE_POST, payload: response.data });
						}).then(function () {
									return callback();
						});
			};
}

function votePost(id, option) {
			var data = { option: option };
			var result = instance.post('/posts/' + id, data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: VOTE_POST, payload: response.data });
						});
			};
}

function editPost(id, values, callback) {
			var data = {
						timestamp: Date.now(),
						title: values.title,
						body: values.body
			};
			var result = instance.put('/posts/' + id, data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: EDIT_POST, payload: response.data });
						}).then(function () {
									return callback();
						});
			};
}

function deletePost(id, callback) {
			var result = instance.delete('/posts/' + id);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: DELETE_POST, payload: response.data });
						}).then(function () {
									return callback();
						});
			};
}

function fetchComments(id) {
			var result = instance.get('/posts/' + id + '/comments');
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_COMMENTS, payload: response.data });
						});
			};
}

function fetchComment(id) {
			var result = instance.get('/comments/' + id);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: FETCH_COMMENT, payload: response.data });
						});
			};
}

function createComment(id, values) {
			var data = {
						id: _guid2.default.raw(),
						timestamp: Date.now(),
						body: values.body,
						author: values.author,
						parentId: id
			};
			var result = instance.post('/comments', data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: CREATE_COMMENT, payload: response.data });
						});
			};
}

function voteComment(id, option) {
			var data = { option: option };
			var result = instance.post('/comments/' + id, data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: VOTE_COMMENT, payload: response.data });
						});
			};
}

function editComment(id, body, callback) {
			var data = {
						body: body,
						timestamp: Date.now()
			};
			var result = instance.put('/comments/' + id, data);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: EDIT_COMMENT, payload: response.data });
						}).then(function () {
									return callback();
						});
			};
}

function deleteComment(id) {
			var result = instance.delete('/comments/' + id);
			return function (dispatch) {
						result.then(function (response) {
									return dispatch({ type: DELETE_COMMENT, payload: response.data });
						});
			};
}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(24);

var _actions = __webpack_require__(19);

var _Categories = __webpack_require__(221);

var _Categories2 = _interopRequireDefault(_Categories);

var _Posts = __webpack_require__(225);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'renderPosts',
		value: function renderPosts() {
			return _react2.default.createElement(_Posts2.default, { posts: this.props.posts });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var category = this.props.match.params.category;

			if (category) {
				this.props.fetchPostsCategory(category);
			} else {
				this.props.fetchPosts();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var category = nextProps.match.params.category;

			if (this.props.match.params.category !== category) {
				if (category) {
					this.props.fetchPostsCategory(category);
				} else {
					this.props.fetchPosts();
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'app row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-8' },
					this.renderPosts()
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-md-4' },
					_react2.default.createElement(_Categories2.default, null)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

function mapStateToProps(state) {
	return { posts: state.posts };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _actions.fetchPosts, fetchPostsCategory: _actions.fetchPostsCategory })(App);

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NotFound = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = exports.NotFound = function NotFound(props) {
	return _react2.default.createElement(
		'h5',
		null,
		'Oops! This page does not exist.'
	);
};

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditPost = exports.CreatePost = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _actions = __webpack_require__(19);

var _reduxForm = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FIELDS = {
	title: {
		type: 'input',
		label: 'Title'
	},
	body: {
		type: 'textarea',
		label: 'Content'
	},
	category: {
		type: 'input',
		label: 'Category'
	},
	author: {
		type: 'input',
		label: 'Author'
	}
};

var PostForm = function (_Component) {
	_inherits(PostForm, _Component);

	function PostForm() {
		_classCallCheck(this, PostForm);

		return _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).apply(this, arguments));
	}

	_createClass(PostForm, [{
		key: 'renderField',
		value: function renderField(field) {
			var fieldConfig = FIELDS[field.input.name];
			return _react2.default.createElement(
				'div',
				{ className: 'form-group ' + (field.meta.touched && field.meta.error ? 'has-error' : '') + ' ' },
				_react2.default.createElement(
					'label',
					null,
					fieldConfig.label
				),
				fieldConfig.type === 'textarea' ? _react2.default.createElement(fieldConfig.type, _extends({ className: 'form-control', rows: '3', type: 'text' }, field.input)) : _react2.default.createElement(fieldConfig.type, _extends({ className: 'form-control', type: 'text' }, field.input)),
				_react2.default.createElement(
					'div',
					{ className: 'help-block' },
					field.meta.touched ? field.meta.error : ""
				)
			);
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(values) {
			var _this2 = this;

			if (this.props.form === 'editPost') {
				this.props.editPost(values.id, values, function () {
					_this2.props.history.push('/');
				});
			} else {
				this.props.createPost(values, function () {
					_this2.props.history.push('/');
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.form === 'editPost') {
				this.props.fetchPost(this.props.match.params.postId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var handleSubmit = this.props.handleSubmit;


			return _react2.default.createElement(
				'div',
				{ className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						this.props.form === 'editPost' ? 'Edit Post' : 'New Post'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(
						'form',
						{ onSubmit: handleSubmit(this.onSubmit.bind(this)) },
						_lodash2.default.keys(FIELDS).map(function (key) {
							return _react2.default.createElement(_reduxForm.Field, { name: key, key: key, component: _this3.renderField });
						}),
						_react2.default.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary' },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return PostForm;
}(_react.Component);

function validate(values) {
	var errors = {};
	_lodash2.default.each(FIELDS, function (type, field) {
		if (!values[field]) {
			errors[field] = 'Enter a ' + field + '!';
		}
	});

	return errors;
}

function mapStateToProps(_ref, ownProps) {
	var posts = _ref.posts;

	return { initialValues: posts[ownProps.match.params.postId] };
}

var CreatePost = exports.CreatePost = (0, _reduxForm.reduxForm)({
	validate: validate,
	form: 'createPost',
	fields: _lodash2.default.keys(FIELDS)
})((0, _reactRedux.connect)(null, { createPost: _actions.createPost })(PostForm));

var EditPost = exports.EditPost = (0, _reduxForm.reduxForm)({
	validate: validate,
	form: 'editPost',
	fields: _lodash2.default.keys(FIELDS),
	enableReinitialize: true
})(PostForm);

exports.EditPost = EditPost = (0, _reactRedux.connect)(mapStateToProps, { editPost: _actions.editPost, fetchPost: _actions.fetchPost })(EditPost);

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _actions = __webpack_require__(19);

var _Post = __webpack_require__(119);

var _Post2 = _interopRequireDefault(_Post);

var _Comments = __webpack_require__(224);

var _Comments2 = _interopRequireDefault(_Comments);

var _reactRouterDom = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostView = function (_Component) {
	_inherits(PostView, _Component);

	function PostView() {
		_classCallCheck(this, PostView);

		return _possibleConstructorReturn(this, (PostView.__proto__ || Object.getPrototypeOf(PostView)).apply(this, arguments));
	}

	_createClass(PostView, [{
		key: 'onDeleteClick',
		value: function onDeleteClick() {
			var _this2 = this;

			this.props.deletePost(this.props.post.id, function () {
				_this2.props.history.push('/');
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var postId = this.props.match.params.postId;

			this.props.fetchPost(postId);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			if (!this.props.post) {
				return _react2.default.createElement(
					'h5',
					null,
					'Oops! This post does not exist...'
				);
			}

			if (this.props.post.deleted) {
				return _react2.default.createElement(
					'h5',
					null,
					'This post is no longer available...'
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: 'post-view' },
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this3.props.history.goBack();
						}, className: 'btn btn-default' },
					'Back'
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel panel-default' },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						_react2.default.createElement(
							'h3',
							{ className: 'panel-title' },
							'Post'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						_react2.default.createElement(
							'ul',
							{ className: 'list-inline pull-right' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouterDom.Link,
									{ to: this.props.post.id + '/edit' },
									_react2.default.createElement(
										'button',
										{ className: 'btn btn-primary' },
										'Edit'
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'button',
									{ onClick: this.onDeleteClick.bind(this), className: 'btn btn-danger' },
									'Delete'
								)
							)
						),
						_react2.default.createElement(_Post2.default, { post: this.props.post, includeLink: false })
					)
				),
				_react2.default.createElement(_Comments2.default, { postId: this.props.post.id })
			);
		}
	}]);

	return PostView;
}(_react.Component);

function mapStateToProps(_ref, ownProps) {
	var posts = _ref.posts;

	return { post: posts[ownProps.match.params.postId] };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _actions.fetchPost, deletePost: _actions.deletePost })(PostView);

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(28);

var _reduxForm = __webpack_require__(47);

var _reducer_posts = __webpack_require__(228);

var _reducer_posts2 = _interopRequireDefault(_reducer_posts);

var _reducer_categories = __webpack_require__(226);

var _reducer_categories2 = _interopRequireDefault(_reducer_categories);

var _reducer_comments = __webpack_require__(227);

var _reducer_comments2 = _interopRequireDefault(_reducer_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	categories: _reducer_categories2.default,
	posts: _reducer_posts2.default,
	comments: _reducer_comments2.default,
	form: _reduxForm.reducer
});

exports.default = rootReducer;

/***/ },

/***/ 203:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(24);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_Component) {
	_inherits(Categories, _Component);

	function Categories() {
		_classCallCheck(this, Categories);

		return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).apply(this, arguments));
	}

	_createClass(Categories, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchPostsCategories();
		}
	}, {
		key: 'renderCategories',
		value: function renderCategories() {
			return _lodash2.default.map(this.props.categories, function (category) {
				return _react2.default.createElement(
					'li',
					{ className: 'list-group-item', key: category.name },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/' + category.path },
						category.name
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						'Categories'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/' },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-default' },
							'Show All'
						)
					)
				),
				_react2.default.createElement(
					'ul',
					{ className: 'list-group' },
					this.renderCategories()
				)
			);
		}
	}]);

	return Categories;
}(_react.Component);

function mapStateToProps(state) {
	return { categories: state.categories };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPostsCategories: _actions.fetchPostsCategories })(Categories);

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(19);

var _reactRouter = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(24);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function Comment(props) {
	var _props$comment = props.comment,
	    timestamp = _props$comment.timestamp,
	    body = _props$comment.body,
	    author = _props$comment.author,
	    category = _props$comment.category,
	    voteScore = _props$comment.voteScore,
	    id = _props$comment.id;

	return _react2.default.createElement(
		'div',
		{ className: 'row' },
		_react2.default.createElement(
			'ul',
			{ className: 'list-inline pull-right' },
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: props.match.url + '/comments/' + id },
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-primary' },
						'Edit'
					)
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return props.deleteComment(id);
						}, className: 'btn btn-danger' },
					'Delete'
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'col-xs-1 text-center' },
			_react2.default.createElement(
				'i',
				{ onClick: function onClick() {
						return props.voteComment(id, "upVote");
					}, className: 'material-icons md-36' },
				'keyboard_arrow_up'
			),
			_react2.default.createElement(
				'h5',
				null,
				voteScore
			),
			_react2.default.createElement(
				'i',
				{ onClick: function onClick() {
						return props.voteComment(id, "downVote");
					}, className: 'material-icons md-36' },
				'keyboard_arrow_down'
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'col-xs-11' },
			_react2.default.createElement(
				'p',
				{ className: 'list-group-item-text' },
				body
			),
			_react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-md-3 col-md-offset-9' },
					_react2.default.createElement(
						'ul',
						{ className: 'list-inline' },
						_react2.default.createElement(
							'li',
							null,
							'by ',
							author
						),
						_react2.default.createElement(
							'li',
							null,
							new Date(timestamp).toDateString()
						)
					)
				)
			)
		)
	);
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(null, { voteComment: _actions.voteComment, deleteComment: _actions.deleteComment })(Comment));

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditComment = exports.CreateComment = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _reactRouter = __webpack_require__(11);

var _actions = __webpack_require__(19);

var _reduxForm = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentForm = function (_Component) {
	_inherits(CommentForm, _Component);

	function CommentForm() {
		_classCallCheck(this, CommentForm);

		return _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).apply(this, arguments));
	}

	_createClass(CommentForm, [{
		key: 'renderField',
		value: function renderField(field) {
			var _field$meta = field.meta,
			    touched = _field$meta.touched,
			    error = _field$meta.error;

			var className = 'form-group ' + (touched && error ? 'has-error' : '');
			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'lable',
					{ className: 'control-label' },
					field.label
				),
				field.label == 'Author' ? _react2.default.createElement('input', _extends({
					className: 'form-control',
					type: 'text'
				}, field.input)) : _react2.default.createElement('textarea', _extends({
					className: 'form-control',
					rows: '3'
				}, field.input)),
				_react2.default.createElement(
					'div',
					{ className: 'help-block' },
					touched ? error : ''
				)
			);
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(values) {
			var _this2 = this;

			if (this.props.form === 'editComment') {
				this.props.editComment(values.id, values.body, function () {
					_this2.props.history.push('/posts/' + values.parentId);
				});
			} else {
				this.props.createComment(this.props.parentId, values);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var handleSubmit = this.props.handleSubmit;


			return _react2.default.createElement(
				'form',
				{ onSubmit: handleSubmit(this.onSubmit.bind(this)) },
				_react2.default.createElement(_reduxForm.Field, {
					label: 'New Comment',
					name: 'body',
					component: this.renderField
				}),
				_react2.default.createElement(_reduxForm.Field, {
					label: 'Author',
					name: 'author',
					component: this.renderField,
					disabled: this.props.form === 'editComment'
				}),
				_react2.default.createElement(
					'button',
					{ type: 'submit', className: 'btn btn-primary' },
					'Submit'
				)
			);
		}
	}]);

	return CommentForm;
}(_react.Component);

function validate(values) {
	var errors = {};
	if (!values.body) {
		errors.body = "Enter a comment before submitting it!";
	}
	if (!values.author) {
		errors.author = "Enter your name!";
	}

	return errors;
}

function afterSubmit(result, dispatch) {
	dispatch((0, _reduxForm.reset)('createComment'));
}

var CreateComment = exports.CreateComment = (0, _reduxForm.reduxForm)({
	validate: validate,
	form: 'createComment',
	onSubmitSuccess: afterSubmit
})((0, _reactRedux.connect)(null, { createComment: _actions.createComment })(CommentForm));

var EditComment = exports.EditComment = (0, _reactRouter.withRouter)((0, _reduxForm.reduxForm)({
	validate: validate,
	form: 'editComment'
})((0, _reactRedux.connect)(null, { editComment: _actions.editComment })(CommentForm)));

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(19);

var _reactRedux = __webpack_require__(9);

var _reactRouter = __webpack_require__(11);

var _Comment = __webpack_require__(222);

var _Comment2 = _interopRequireDefault(_Comment);

var _CommentForm = __webpack_require__(223);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_Component) {
	_inherits(Comments, _Component);

	function Comments() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Comments);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			sortBy: 'voteScore'
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Comments, [{
		key: 'renderComments',
		value: function renderComments() {
			var _this2 = this;

			var comments = _lodash2.default.sortBy(this.props.comments, this.state.sortBy).reverse();
			return comments.map(function (comment) {
				if (_this2.props.match.params.commentId === comment.id) {
					return _react2.default.createElement(
						'li',
						{ className: 'list-group-item', key: comment.id },
						_react2.default.createElement(_CommentForm.EditComment, { initialValues: comment })
					);
				} else {
					return _react2.default.createElement(
						'li',
						{ className: 'list-group-item', key: comment.id },
						_react2.default.createElement(_Comment2.default, { comment: comment })
					);
				}
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchComments(this.props.postId);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						'Comments'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(_CommentForm.CreateComment, { parentId: this.props.postId })
				),
				_react2.default.createElement(
					'ul',
					{ className: 'list-group' },
					_react2.default.createElement(
						'li',
						{ className: 'list-group-item', key: 'Sort by' },
						_react2.default.createElement(
							'span',
							null,
							'Sort By '
						),
						_react2.default.createElement(
							'div',
							{ className: 'btn-group', role: 'group', 'aria-label': 'Sort By' },
							_react2.default.createElement(
								'button',
								{ onClick: function onClick(e) {
										return _this3.setState({ sortBy: e.target.value });
									}, value: 'voteScore', type: 'button', className: 'btn btn-default' },
								'Vote'
							),
							_react2.default.createElement(
								'button',
								{ onClick: function onClick(e) {
										return _this3.setState({ sortBy: e.target.value });
									}, value: 'timestamp', type: 'button', className: 'btn btn-default' },
								'Time'
							)
						)
					),
					this.renderComments()
				)
			);
		}
	}]);

	return Comments;
}(_react.Component);

function mapStateToProps(state, ownProps) {
	return { comments: _lodash2.default.pickBy(state.comments, function (o) {
			return o.parentId == ownProps.postId;
		}) };
}

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, { fetchComments: _actions.fetchComments })(Comments));

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Posts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _Post = __webpack_require__(119);

var _Post2 = _interopRequireDefault(_Post);

var _reactRouter = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = exports.Posts = function (_Component) {
	_inherits(Posts, _Component);

	function Posts() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Posts);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Posts.__proto__ || Object.getPrototypeOf(Posts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			sortBy: 'voteScore'
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Posts, [{
		key: 'renderPosts',
		value: function renderPosts() {
			if (_lodash2.default.keys(this.props.posts).length === 0) {
				if (this.props.match.params.category) {
					return _react2.default.createElement(
						'li',
						{ className: 'post list-group-item', key: 'Not found' },
						_react2.default.createElement(
							'h5',
							null,
							'Could not find any post for this category.'
						)
					);
				} else {
					return _react2.default.createElement(
						'li',
						{ className: 'post list-group-item', key: 'Loading' },
						_react2.default.createElement(
							'h5',
							null,
							'Loading...'
						)
					);
				}
			}
			var posts = _lodash2.default.sortBy(this.props.posts, this.state.sortBy).reverse();
			return posts.map(function (post) {
				return _react2.default.createElement(
					'li',
					{ className: 'post list-group-item', key: post.id },
					_react2.default.createElement(_Post2.default, { post: post, includeLink: true })
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						'Posts'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					_react2.default.createElement(
						'div',
						{ className: 'pull-left' },
						_react2.default.createElement(
							'span',
							null,
							'Sort By '
						),
						_react2.default.createElement(
							'div',
							{ className: 'sort btn-group', role: 'group', 'aria-label': 'Sort By' },
							_react2.default.createElement(
								'button',
								{ onClick: function onClick(e) {
										return _this2.setState({ sortBy: e.target.value });
									}, value: 'voteScore', type: 'button', className: 'btn btn-default voteScore' },
								'Vote'
							),
							_react2.default.createElement(
								'button',
								{ onClick: function onClick(e) {
										return _this2.setState({ sortBy: e.target.value });
									}, value: 'timestamp', type: 'button', className: 'btn btn-default timestamp' },
								'Time'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'pull-right' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/new' },
							_react2.default.createElement(
								'button',
								{ type: 'button', className: 'new-post btn btn-default' },
								'New Post'
							)
						)
					)
				),
				_react2.default.createElement(
					'ul',
					{ className: 'list-group' },
					this.props.posts && this.renderPosts()
				)
			);
		}
	}]);

	return Posts;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Posts);

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_POSTS_CATEGORIES:
			return action.payload.categories;
		default:
			return state;
	}
};

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_COMMENTS:
			return Object.assign({}, state, _lodash2.default.mapKeys(action.payload.data, 'id'));
		case _actions.VOTE_COMMENT:
		case _actions.CREATE_COMMENT:
		case _actions.EDIT_COMMENT:
			return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));
		case _actions.DELETE_COMMENT:
			return _lodash2.default.omit(state, action.payload.id);
		default:
			return state;
	}
};

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	var posts = {};
	switch (action.type) {
		case _actions.FETCH_POSTS:
		case _actions.FETCH_POSTS_CATEGORY:
			posts = getNotDeletedPosts(action.payload);
			return _lodash2.default.mapKeys(posts, 'id');
		case _actions.FETCH_POST:
		case _actions.VOTE_POST:
		case _actions.CREATE_POST:
		case _actions.EDIT_POST:
			posts = getNotDeletedPosts(action.payload);
			return _extends({}, state, _defineProperty({}, posts.id, posts));
		case _actions.DELETE_POST:
			return _lodash2.default.omit(state, action.payload.id);
		default:
			return state;
	}
};

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getNotDeletedPosts(posts) {
	return _lodash2.default.pickBy(posts, function (o) {
		return !o.deleted;
	});
}

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(67);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(28);

var _reactRouterDom = __webpack_require__(24);

var _reducers = __webpack_require__(202);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(68);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = __webpack_require__(198);

var _App2 = _interopRequireDefault(_App);

var _PostView = __webpack_require__(201);

var _PostView2 = _interopRequireDefault(_PostView);

var _NotFound = __webpack_require__(199);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _PostForm = __webpack_require__(200);

__webpack_require__(203);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: createStoreWithMiddleware(_reducers2.default) },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _App2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/new', component: _PostForm.CreatePost }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:category', component: _App2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:category/:postId/edit', component: _PostForm.EditPost }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:category/:postId', component: _PostView2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/:category/:postId/comments/:commentId', component: _PostView2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
      )
    )
  )
), document.querySelector('#root'));

/***/ }

},[544]);