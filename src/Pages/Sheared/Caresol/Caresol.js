import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Caresol = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/09/05/11/37/baby-2717347_960_720.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/01/03/15/06/klee-587484_960_720.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default Caresol;