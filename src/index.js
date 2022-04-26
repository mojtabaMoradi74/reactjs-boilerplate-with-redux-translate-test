import React from 'react';
import ReactDOM from 'react-dom';
import './style/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LocalizedRouter from 'containers/LocalizedRouter';
import { Provider } from "react-redux";
import { appLocales } from './hook/i18nConfigs/index.js';
import configStore from 'store/configStore';
import i18n from "./i18n";
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById("root");
const preloadedState = {};
const store = configStore(preloadedState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <LocalizedRouter appStrings={appLocales}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </LocalizedRouter>
      </I18nextProvider>
    </Provider>
  </BrowserRouter>, rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
