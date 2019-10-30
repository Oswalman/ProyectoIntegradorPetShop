import React from 'react';
import { render } from 'react-dom';
import Slider from '../../components/slider';
import { Link } from 'react-router-dom';

import foto1 from '../../img/img2/shop.jpg'
import foto2 from '../../img/img2/bg2.png'
import foto3 from '../../img/img2/adoptame.jpg'
import foto4 from '../../img/img2/ByGandres.jpg'
import foto5 from '../../img/img2/ByGangarita.jpg'
import foto6 from '../../img/img2/ByGFabs.jpg'
import foto7 from '../../img/img2/ByGjhon.jpg'

//import '../../style/style.css';

const Home = () => {
  return (
    <div className="container-fluid bg-light" >
 
            <header className="main-header">
                <div className="background-overlay text-white py-5">
                      <div className="container text-center">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                    <div className="row d-flex h-100">
                                        <div className="col-sm-8">
                                            <img src={foto1} class="d-block w-100" alt="class="img-fluid></img>
                                        </div>
                                    
                                    <div className="col-sm-4 text-center justify-content-center align-self-center">
                                        <h1><p>ADOPTA UN PERRITO</p></h1>
                                        <p>Se responsable de uno de nuestros animales, ellos te pueden dar amor, cariño, compañia
                                            todo esto a cambio de ¡exactamente lo mismo!
                                        </p>
                                        <Link to="adopt" className="btn btn-dark text-center" role="button" aria-pressed="true">SABER MAS</Link>
                                    </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                    <div className="row d-flex h-100">
                                            
                                        
                                        <div className="col-sm-4 text-center justify-content-center align-self-center">
                                            <h1><p>¡COMPRA EN NUESTRA TIENDA ONLINE!</p></h1>
                                            <p>Nuestras mascotas merecen lo mejor, por que no darles un gusto con los distintos accesorios y juguetes
                                                que ofrecemos en nuestra tienda, ademas, tambien podrás encontrar su comida favorita 
                                            </p>
                                            <Link to="shop" className="btn btn-dark text-center" role="button" aria-pressed="true">SABER MAS</Link>
                                        </div>
                                        <div className="col-sm-8">
                                                <img src={foto2} class="d-block w-100" alt="class="img-fluid></img>
                                            </div>
                                    </div>
                              </div>
                              <div className="carousel-item">
                                    <div className="row d-flex h-100">
                                            <div className="col-sm-8">
                                                <img src={foto3} className="d-block w-100" alt="class="img-fluid></img>
                                            </div>
                                        
                                        <div className="col-sm-4 text-center justify-content-center align-self-center">
                                            <h1><p>¿SE TE PERDIÓ TU PERRO?</p></h1>
                                            <p>Acá puede publicar la información y nuestros usuarios te ayudarán a encontrarlos
                                            </p>
                                            <Link to="search" className="btn btn-dark text-center" role="button" aria-pressed="true">SABER MAS</Link>
                                        </div>
                                    </div>
                              </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                </div>
            </div>
        </header>
         
         <section className="container text-center p-5" style={{fontSize: "30px"}}>
            
                    <a href="#" className="btn btn-outline-dark" role="button" aria-pressed="true"><h1>¡CONOCENOS!</h1></a>
                    <pre>

                    </pre>
                    
                    <div className="row">
                            
                            <div className  ="col-lg-3">
                                <div className="card">
                                    <div className="card body p-2" >
                                        <center>
                                        <img src={foto4} className="img-fluid rounded-circle w-50 c" alt="Angarita"></img>
                                        </center>
                                    </div>
                                        
                                </div>
                            </div>
                            
                            <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card body p-2" >
                                            <center>
                                            <img src={foto5} className="img-fluid rounded-circle w-50 c" alt="Angarita"></img>
                                            </center>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card body p-2" >
                                            <center>
                                            <img src={foto6} className="img-fluid rounded-circle w-50 c" alt="Angarita"></img>
                                            </center>
                                            
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card body p-2" >
                                            <center>
                                            <img src={foto7} className="img-fluid rounded-circle w-50 c" alt="Angarita"></img>
                                            </center>
                                            
                                        </div>
                                    </div>
                            </div>
                    </div>
            
        </section> 


  </div>
  );

};

export default Home;