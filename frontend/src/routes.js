import React from 'react';

import  Home  from './client/views/home';
import  Login  from './client/views/Login';
import  About  from './client/views/About';
import  Register  from './client/views/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NoMatch  from './client/views/NoMatch';
import  Search  from './client/views/Search';
import  NavBar  from './client/components/header';
import Footer from './client/components/footer';
import { Route, Switch, Redirect } from 'react-router-dom';


 const Routes = () => {
  return (
    <div >
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Home} />
        <Route component={NoMatch} />
        
        
      </Switch>
      <Footer></Footer>
      
    </div>
  );
};
export default Routes;
