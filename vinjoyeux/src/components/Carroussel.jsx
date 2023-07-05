import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ose from './ose.png';
import Paul from './paul.png';
import Chartreuse from './chartreuse.png';
import Canailles from './domaine-des-canailles.png';
import Macon from './macon-charnay-blanc.png';
import Morges from './morgestradition.png';

import './Carroussel.css';


const Carroussel = () => {

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="ose"
          src={Ose}
          alt="First slide"
        />
                <img
          className="ose"
          src={Canailles}
          alt="First slide"
        />
                <img
          className="chartreuse"
          src={Macon}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="paul"
          src={Paul}
          alt="Second slide"
        />
                <img
          className="chartreuse"
          src={Chartreuse}
          alt="Third slide"
        />
                        <img
          className="chartreuse"
          src={Macon}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="chartreuse"
          src={Chartreuse}
          alt="Third slide"
        />
          <img
          className="chartreuse"
          src={Morges}
          alt="Third slide"
        />
          <img
          className="ose"
          src={Canailles}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Carroussel