import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './redux/reducer.js';
import thunk from 'redux-thunk';

import Mapp from './Main';

import '../stylesheets/style_1.css';

import { database } from './database/config';

const enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
];

const store = createStore(rootreducer, compose(...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Mapp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
