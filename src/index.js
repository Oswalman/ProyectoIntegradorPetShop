import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import  Routes  from './routes.js';


ReactDOM.render(
  <Router>
    <Routes />
    </Router>
  ,
  document.getElementById('root'),
);

/*registerServiceWorker();
import registerServiceWorker from './registerServiceWorker';
*/