import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './components/App';
import '../style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));