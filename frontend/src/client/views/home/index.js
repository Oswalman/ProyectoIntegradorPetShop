import React from 'react';
import { render } from 'react-dom';
import Slider from '../../components/slider';


import foto1 from '../../img/1.png'
import foto2 from '../../img/2.png'
import foto3 from '../../img/3.png'

//import '../../style/style.css';

const Home = () => {
  return (
    <div className="container-fluid">
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={foto1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto2}  alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto3} alt="Third slide"/>
      <div></div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  </div>
  );

};

export default Home;