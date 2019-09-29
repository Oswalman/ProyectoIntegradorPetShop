import React from 'react';
import '../../style/perfiles.css';
//import foto1 from '../img/je.png';
//import foto2 from '../img/oa.png';
//import foto3 from '../img/fa.png';
//import foto4 from '../img/af.png';



class About extends React.Component
{
    render(){
        return(
          <div className="row containerP">
            <div className="col-lg-3 pf">
              <div className="img">
                <img></img>
              </div>
              <h3>Jhon Edinson</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
            </div>
            <div className="col-lg-3 pf">
              <div className="img">
                <img></img>
              </div>
              <h3>Oswaldo Andres</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
            </div>
            <div className="col-lg-3 pf">
              <div className="img">
                <img></img>
              </div>
              <h3>Fabian Andres</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
            </div>
            <div className="col-lg-3 pf">
              <div className="img">
                <img></img>
              </div>
              <h3>Andres Felipe</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus officia aliquam iure vitae et. Animi nisi illo iste numquam repellendus!</p>
            </div>                                    
          </div>
        )
        }

}

export default About;