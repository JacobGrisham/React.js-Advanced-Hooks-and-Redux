// React
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestUsers } from './reducers/reducers';
// Redux Middleware
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// Components
import App from './components/App';
// Styling
import './assets/index.css';
import 'tachyons';

const logger = createLogger();

const rootRedcuer = combineReducers({ searchRobots, requestUsers });
const store = createStore(rootRedcuer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
