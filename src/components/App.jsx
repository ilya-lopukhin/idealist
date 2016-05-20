import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>ksdas</div>
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}