import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import a11y from './config/a11y';
import '@fontsource/roboto/400.css';
import App from './pages/App';
import reportWebVitals from './config/reportWebVitals';

a11y(React, ReactDOM, 1000);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
