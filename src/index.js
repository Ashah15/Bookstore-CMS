import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = [
  { id: 0, title: 'Friday 13', category: 'Horror' },
  { id: 1, title: 'Wild-life Dangers', category: 'Learning' },
  { id: 2, title: 'Toonami', category: 'Kids' },
];

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
