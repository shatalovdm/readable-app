import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import CategoriesReducer from './reducer_categories';
import CommentsReducer from './reducer_comments';

const rootReducer = combineReducers({
	categories: CategoriesReducer,
	posts: PostsReducer,
	comments: CommentsReducer,
	form: formReducer
});

export default rootReducer;
