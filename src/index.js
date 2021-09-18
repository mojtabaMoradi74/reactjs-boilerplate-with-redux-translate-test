import React from 'react';
import ReactDOM from 'react-dom';
import './style/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LocalizedRouter from 'containers/LocalizedRouter';
import { Provider } from "react-redux";
import { appStrings } from './hook/i18nConfigs/index.js';
import configStore from 'store/configStore';

const rootElement = document.getElementById("root");
const preloadedState = {};
const store = configStore(preloadedState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <LocalizedRouter appStrings={appStrings}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LocalizedRouter>
    </Provider>
  </BrowserRouter>, rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
