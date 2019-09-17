import React from 'react';
import { render } from 'react-dom';
import '.././style/style.css';
import '.././style/icons/styles.css';
import { Link } from 'react-router-dom';
var btmenu = document.getElementById("btn-menu");
  var nav = document.getElementById("nav");
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boolean: true};

    this.toggleSidenav= this.toggleSidenav.bind(this);
  }

  toggleSidenav() {
    this.setState(state =>(
      {
        boolean: !state.boolean
      })); 
}

    render() 
    {
      return (
        <header className="header">
        <div className="contenedor">
            <h1 className="logo">Pet Safe</h1>
            <span className="icon-menu" id="btn-menu" onClick={this.toggleSidenav}></span>
            <nav className={this.state.boolean? 'nav':'mostrar'} id="nav">
                <ul className="menu">
                    <li className="menu__item"><Link to="/home" className="menu__link select">Home</Link></li>
                    <li className="menu__item"><Link to="/adopcion" className="menu__link">Adopción</Link></li>
                    <li className="menu__item"><Link to="/busqueda" className="menu__link">Busqueda</Link></li>
                    <li className="menu__item"><Link to="/tienda" className="menu__link">Tienda</Link></li>
                    <li className="menu__item"><Link to="/login" className="menu__link">Login</Link></li>
                </ul>
            </nav>
        </div>
    </header>

      );
    }
  }

  export default Header;
