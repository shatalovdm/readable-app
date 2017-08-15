import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
	categories: CategoriesReducer,
	posts: PostsReducer
});

export default rootReducer;
