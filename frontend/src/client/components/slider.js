import React from 'react';
import foto1 from '../img/1.png';
import foto2 from '../img/2.png';
import foto3 from '../img/3.png';




class Slider extends React.Component
{
    render(){
        return(
        <div className="slider-wrapper theme-light">
      <div id="slider" className="Slider">
        <img src={foto1} alt=""/>
        <img src={foto2} alt="" title="#htmlcaption"/>
        <img src={foto3} alt="" title="Hellou"/>
      
      </div>
      <div>
          <div id="htmlcaption" className="nivo-html-caption">
            <h1>Gracias por visitar</h1>
          </div>
        </div>
    </div>

    )
        }

}

export default Slider;