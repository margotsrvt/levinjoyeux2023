import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ose from './ose.png';
import Paul from './paul.png';
import Chartreuse from './chartreuse.png';
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
        <Carousel.Caption>
          <h5>Ose!...</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="paul"
          src={Paul}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Paul</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="chartreuse"
          src={Chartreuse}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Chartreuse de Mougeres</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Carroussel