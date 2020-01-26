import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-globally';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  authToken: "",
  userId: null
};

ReactDOM.render(
  <Provider globalState={initialState}>
      <App />
  // </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
