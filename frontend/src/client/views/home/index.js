import React from 'react';
import { render } from 'react-dom';
import Slider from '../../components/slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'

//import '../../style/style.css';
const slider = (
  <AwesomeSlider>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
);
const Home = () => {
  return (<Slider></Slider>);
};

export default Home;