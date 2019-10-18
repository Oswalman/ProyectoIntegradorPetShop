import React from 'react';
import '../../style/perfiles.css';
import foto1 from '../../img/je.png';
import foto2 from '../../img/oa.png';
import foto3 from '../../img/fa.png';
import foto4 from '../../img/af.png';



class About extends React.Component
{
    render(){
        return(
          
          <div className="row containerP">
            <header className="main-header">
              <div className="background-overlay text-white py-5">
                <div className="container">
                  <div className="row d-flex h-100">
                    <div className="col-sm-6 text-center justify-content-center align-self-center">
                      <h1>¿QUIENES SOMOS?</h1>
                        <p style={{fontSize:"25px"}}>
                          un grupo de estudiantes con una gran conciencia, que desean crear una plataforma 
                          principal que centralice la información sobre mascotas perdidas para pedirle a la comunidad 
                          una ayuda integra en la búsqueda de estos, así mismo también queremos ser una herramienta para 
                          aquellas personas que quieran adoptar a una mascota y ofrecer productos para el cuidado esencial 
                          de los mas pequeños de la familia.
                        </p>   
                    </div>
                    <div className="col-sm-6">   
                      <img src="img/about.webp" alt="Foto baby" class="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="container text-center p-5" style={{fontSize: "30px"}}>
              <div className="row justify-content-center">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <h2>MISION</h2>
                        </button>
                      </h2>
                    </div>                          
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                        Promover un cuidado especial para nuestras mascotas, siendo intermediario en el proceso de búsqueda de estas y del mejor hogar posible para ellas.
                        <img src="img/mision.jpg" alt="Foto baby" class="img-fluid p-5"/>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <h2>VISION</h2>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        Nos vemos en 5 años como la pagina principal para la comunicación a todo lo referente a mascotas en Bucaramanga, teniendo convenios con las empresas mas importantes de la región.                                
                        <img src="img/vision.jpg" alt="Foto baby" class="img-fluid p-5"/>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <h2>¿POR QUE ELEGIRNOS?</h2>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        Estamos dedicados al cuidado de las mascotas, tenemos una vocación gigante para esto y ofrecemos distintos servicios que puede ayudarlo a solucionar alguna necesidad establecida:
                         -	Publica tu mascota perdida o ayudanos a encontrarlos
                        <img src="img/lost dog.jpg" alt="Foto baby" class="img-fluid p-5"/>
                         -	Dale un hogar feliz a alguna mascota necesitada
                        <img src="img/AdoptMe.webp" alt="Foto baby" class="img-fluid p-5"/>
                         -	Tienda de alimentos y accesorios que le alegraran los dias
                        <img src="img/shop.jpg" alt="Foto baby" class="img-fluid p-5"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 

            <div className="row containerP">
              <div className="col-lg-3 pf">
                <div className="img">
                  <img src={foto1} className="img-P"></img>
                </div>
                <h3>Jhon Edinson</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
              </div>
              <div className="col-lg-3 pf">
                <div className="img">
                  <img src={foto2} className="img-P" ></img>
                </div>
                <h3>Oswaldo Andres</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
              </div>
              <div className="col-lg-3 pf">
                <div className="img">
                  <img src={foto3} className="img-P"></img>
                </div>
                <h3>Fabian Andres</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
              </div>
              <div className="col-lg-3 pf">
                <div className="img">
                  <img src={foto4} className="img-P"></img>
                </div>
                <h3>Andres Felipe</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
              </div>  
            </div>                                  
          </div>
          
        )
        }

}

export default About;