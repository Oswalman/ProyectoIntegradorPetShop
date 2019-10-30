import React from "react";
import "../../style/perfiles.css";
import "../../style/main.css";
import foto1 from "../../img/img2/ByGjhon.jpg";
import foto2 from "../../img/img2/ByGangarita.jpg";
import foto3 from "../../img/img2/ByGFabs.jpg";
import foto4 from "../../img/img2/ByGandres.jpg";
import foto5 from "../../img/img2/about.webp";
import foto6 from "../../img/img2/vision.jpg";
import foto7 from "../../img/img2/lost dog.jpg";
import foto8 from "../../img/img2/AdoptMe.webp";
import foto9 from "../../img/img2/shop.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="row container">
        <header className="main-header">
          <div className="background-overlay text-white py-5">
            <div className="container">
              <div className="row d-flex h-100">
                <div className="col-sm-6 text-center justify-content-center align-self-center">
                  <h1>¿QUIENES SOMOS?</h1>
                  <p style={{ fontSize: "25px" }}>
                    un grupo de estudiantes con una gran conciencia, que desean
                    crear una plataforma principal que centralice la información
                    sobre mascotas perdidas para pedirle a la comunidad una
                    ayuda integra en la búsqueda de estos, así mismo también
                    queremos ser una herramienta para aquellas personas que
                    quieran adoptar a una mascota y ofrecer productos para el
                    cuidado esencial de los mas pequeños de la familia.
                  </p>
                </div>
                <div className="col-sm-6">
                  <img src={foto5} alt="Foto baby" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          className="container text-center p-5"
          style={{ fontSize: "30px" }}
        >
          <div className="row justify-content-center">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h2>MISIÓN</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Promover un cuidado especial para nuestras mascotas, siendo
                    intermediario en el proceso de búsqueda de estas y del mejor
                    hogar posible para ellas.
                    <img src={foto6} alt="Foto baby" class="img-fluid p-5" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h2>VISION</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Nos vemos en 5 años como la pagina principal para la
                    comunicación a todo lo referente a mascotas en Bucaramanga,
                    teniendo convenios con las empresas mas importantes de la
                    región.
                    <img src={foto6} alt="Foto baby" class="img-fluid p-5" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h2>¿POR QUE ELEGIRNOS?</h2>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Estamos dedicados al cuidado de las mascotas, tenemos una
                    vocación gigante para esto y ofrecemos distintos servicios
                    que puede ayudarlo a solucionar alguna necesidad
                    establecida: - Publica tu mascota perdida o ayudanos a
                    encontrarlos
                    <img src={foto7} alt="Foto baby" class="img-fluid p-5" />
                    - Dale un hogar feliz a alguna mascota necesitada
                    <img src={foto8} alt="Foto baby" class="img-fluid p-5" />
                    - Tienda de alimentos y accesorios que le alegraran los dias
                    <img src={foto9} alt="Foto baby" class="img-fluid p-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="team text-center ">
          <div class="background-overlay p-5 ">
            <h1 class="text-white">CONOCE A NUESTRO EQUIPO</h1>
            <p class="text-white">
              Somos estudiantes de la Universidad Pontificia Bolivariana de la
              carrera Ingeniería de Sistemas e Informática
            </p>
            <div class="row">
              <div class="col-lg-3">
                <div class="card">
                  <div class="card body p-2">
                    <center>
                      <img
                        src={foto2}
                        class="img-fluid rounded-circle w-50 c"
                        alt="Angarita"
                      />
                    </center>
                    <h3>Oswaldo Andres Angarita Leon</h3>
                    <p>Desarrollador Backend y Frontend!</p>
                    <div class="row justify-content-center">
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.facebook.com/oswaldoandres01"
                            target="_blank"
                          >
                            <i class="fab fa-facebook-square s-5px"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.instagram.com/oswalman1/"
                            target="_blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a href="https://github.com/Oswalman" target="_blank">
                            <i class="fab fa-github-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="card">
                  <div class="card body p-2">
                    <center>
                      <img
                        src={foto4}
                        class="img-fluid rounded-circle w-50 c"
                        alt="Angarita"
                      />
                    </center>
                    <h3>Andres Felipe Herrera Jerez</h3>
                    <p>Testing</p>
                    <div class="row justify-content-center">
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.facebook.com/andresherrera028"
                            target="_blank"
                          >
                            <i class="fab fa-facebook-square s-5px"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.instagram.com/afhj20/"
                            target="_blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a href="https://github.com/Andresxv" target="_blank">
                            <i class="fab fa-github-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="card">
                  <div class="card body p-2">
                    <center>
                      <img
                        src={foto3}
                        class="img-fluid rounded-circle w-50 c"
                        alt="Angarita"
                      />
                    </center>
                    <h3>Fabian Andres Barreto Rodriguez</h3>
                    <p>Desarrollador Frontend</p>
                    <div class="row justify-content-center">
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.facebook.com/fabiancho2198"
                            target="_blank"
                          >
                            <i class="fab fa-facebook-square s-5px"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.instagram.com/elfabss/"
                            target="_blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://github.com/PapiCarryFabs"
                            target="_blank"
                          >
                            <i class="fab fa-github-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="card">
                  <div class="card body p-2">
                    <center>
                      <img
                        src={foto1}
                        class="img-fluid rounded-circle w-50 c"
                        alt="Angarita"
                      />
                    </center>
                    <h3>Jhon Edinson Castañeda Oviedo</h3>
                    <p>Desarrollador Frontend</p>
                    <div class="row justify-content-center">
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.facebook.com/vamos.SrPlayer.GG"
                            target="_blank"
                          >
                            <i class="fab fa-facebook-square s-5px"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://www.instagram.com/shongo_edinson/"
                            target="_blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex flex-row justify-content-center">
                          <a
                            href="https://github.com/PapiCarryShongo"
                            target="_blank"
                          >
                            <i class="fab fa-github-alt"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
