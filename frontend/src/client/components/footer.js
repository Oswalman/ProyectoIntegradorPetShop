import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const divStyle = {
    width: '60px'
  };

  const style={
      color:"#fff"
  }

class footer extends Component {

<<<<<<< HEAD
render() {
  return (
    <footer className="page-footer text-white bg-dark">
      <div className="bg-primary">
        <div className="container-fluid">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">¡Conéctate con nosotros en las redes sociales!</h6>
            </div>        
            <div className="col-md-6 col-lg-7 text-center text-md-right">
            <a href="https://www.facebook.com/UPB-BUS-766221750396402/" style={style} className="icon-facebook">
              </a>
=======
    render() {
        return (
        <footer className="page-footer text-white bg-dark ">

            <div className="bg-primary">
                <div className="container-fluid">

      
                    <div className="row py-4 d-flex align-items-center">

       
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">¡Conéctate con nosotros en las redes sociales!</h6>
                            </div>
       

        
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                       
                       <a href="https://www.facebook.com/UPB-BUS-766221750396402/" style={style} className="icon-facebook">
                          </a>
                        
                     
                        
            
                        

                        </div>
      

                     </div>
     

>>>>>>> 47a944d21c4d29267f27f3651c671d7c9d69126a
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center text-md-left mt-5 ">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold">PetSafe</h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={divStyle}/> 
          <p>Unete a esta gran comunidad que busca ayudar a las mascotas.</p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">Productos</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={divStyle}/>
        <p>
          <a href="#!">Adopcion</a>
        </p>
        <p>
          <a href="#!">Accesorios</a>
        </p>
        <p>
          <a href="#!">Veterinarias</a>
        </p>
       
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">enlaces útiles</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={divStyle}/>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase font-weight-bold">Contacto</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={divStyle}/>
        <p>
          <i className="icon-home3"></i> Colombia, Bucaramanga</p>
        <p>
          <i className="icon-envelop"></i> oswaldo.angarita.2016@upb.edu.co</p>
        <p>
          <i className="icon-phone"></i> + 3165286284</p>
        <p>
          <i className="icon-printer"></i> + 01 234 567 89</p>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="/"> PetSafe</a>
  </div>
</footer>
        )
    }
}

export default footer
