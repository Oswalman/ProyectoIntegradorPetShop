import React from 'react';
import { render } from 'react-dom';
import './style/style.css';
import './style/icons/styles.css';

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
                    <li className="menu__item"><a className="menu__link select" href="">Inicio</a></li>
                    <li className="menu__item"><a className="menu__link" href="">Adopción</a></li>
                    <li className="menu__item"><a className="menu__link" href="">Busqueda de mascota</a></li>
                    <li className="menu__item"><a className="menu__link" href="">Tienda</a></li>
                </ul>
            </nav>
        </div>
    </header>

      );
    }
  }

  export default Header;
