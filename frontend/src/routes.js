import React from 'react';

import  Home  from './client/views/home';
import  Login  from './client/views/Login';
import  About  from './client/views/About';
import  Register  from './client/views/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NoMatch  from './client/views/NoMatch';
import  Search  from './client/views/Search';
import  Manager  from './client/views/Manager';
import  Adopt from './client/views/adopt';
import SearchRegister from './client/views/SearchRegister';
import  NavBar  from './client/components/header';
import Footer from './client/components/footer';
import Chat from './client/components/chat';
import Tienda from './client/views/Tienda';
import Detalles from './client/components/details';
import Modal from './client/components/Modal';
import Cart from './client/components/Cart/cart';
import DetallesPet from './client/views/detailsMP';
import { Route, Switch, Redirect } from 'react-router-dom';

 const Routes = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/adopt" component={Adopt} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path="/searchRegister" component={SearchRegister}/>
        <Route exact path="/shop" component={Tienda}/>
        <Route exact path="/details" component={Detalles}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Home} />
        <Route exact path="/DetailsPet" component={DetallesPet} />
        <Route component={NoMatch} />
      </Switch>
      <Chat></Chat>
      <Footer></Footer>
    </div>
  );
};
export default Routes;
