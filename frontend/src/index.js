import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import  Routes  from './routes.js';
import {ProductProvider} from './context'

ReactDOM.render(
  <ProductProvider>
    <Router>
      <Routes />
    </Router> 
  </ProductProvider>
  ,
  document.getElementById('root'),
);

/*registerServiceWorker();
import registerServiceWorker from './registerServiceWorker';
*/