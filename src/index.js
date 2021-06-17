import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserSignupPage from './pages/UserSignupPage';
import UserSignInPage from './pages/UserSignInPage';
import './bootstrap-override.scss';
import LanguageSelector from './components/LanguageSelector';
import reportWebVitals from './reportWebVitals';
import "./i18n";


ReactDOM.render(
<UserSignInPage></UserSignInPage>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();