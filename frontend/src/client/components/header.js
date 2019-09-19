import React from 'react';
import { render } from 'react-dom';
import '.././style/style.css';
import '.././style/icons/styles.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boolean: true,
      location: this.props.location
    };

    this.toggleSidenav= this.toggleSidenav.bind(this);
  }

  toggleSidenav() {
    this.setState(state =>(
      {
        boolean: !state.boolean,
        
      })); 
}

    render() 
    {
      return (
        
          
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid">
          <Link to="/home" className="navbar-brand">PetSafe</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <Link to="/home" className="nav-item nav-link">Home<span class="sr-only">(current)</span></Link>
               
              </li>
              <li class="nav-item">
              <Link to="/shop" className="nav-item nav-link">Tienda</Link>
                
              </li>
             
              <li class="nav-item">
              <Link to="/get" className="nav-link">Adopción</Link>
                
              </li>
              <li class="nav-item">
              <Link to="/search" className="nav-link">Busqueda</Link>
                
              </li>
              <li class="nav-item">
              <Link to="/about" className="nav-link">Acerca de </Link>
            
              </li>
            
              
            </ul>
            <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li class="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
                
              </li>

            </ul>
          </div>
          </div>
      </nav>

         

        
  

      );
    }
  }

  export default Header;
