import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './components/App';
import PostView from './components/PostView';
import NotFound from './components/NotFound';
import { CreatePost, EditPost } from './components/PostForm';
import '../style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/new" component={CreatePost} />
          <Route exact path="/:category" component={App} />
          <Route exact path="/:category/:postId/edit" component={EditPost} />
          <Route exact path="/:category/:postId" component={PostView} />
          <Route path="/:category/:postId/comments/:commentId" component={PostView} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));