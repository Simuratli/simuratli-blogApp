import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './redux/reducer/auth'
import fetchPost from './redux/reducer/post'
import writeReducer from './redux/reducer/writeNew'
import fetchItselfPost from './redux/reducer/PostItself'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  auth:authReducer,
  fetchPost:fetchPost,
  writeReducer:writeReducer,
  fetchItselfPost:fetchItselfPost
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
