import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Carousel from 'react-bootstrap/lib/Carousel';

class Lunbo extends React.Component {
 render() {
   return (
    <div>
      <Carousel interval={2000}>
       <Carousel.Item>
         <img style={{width:'100%',height:'400px'}} alt="900x500" src="http://odu1gnwld.bkt.clouddn.com/1.png"/>
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img style={{width:'100%',height:'400px'}} alt="900x500" src="http://odu1gnwld.bkt.clouddn.com/2.png"/>
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img style={{width:'100%',height:'400px'}} alt="900x500" src="http://odu1gnwld.bkt.clouddn.com/3.png"/>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
       </Carousel.Item>
      </Carousel>
    </div>
   )
 }
}

export default Lunbo;
