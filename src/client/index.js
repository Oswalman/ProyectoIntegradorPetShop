import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import './style/style.css';

const App = () => {
  return <Header/>
};

render(
  <App/>,
  document.getElementById('app')
);