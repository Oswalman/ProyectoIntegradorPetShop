import React from 'react';

import  Home  from './client/views/home';
import  Login  from './client/views/Login';
import  Registro  from './client/views/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NoMatch  from './client/views/NoMatch';
import  NavBar  from './client/components/header';
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
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/login" component={Home} />
        <Route component={NoMatch} />
        
        
      </Switch>
      
    </div>
  );
};
export default Routes;
