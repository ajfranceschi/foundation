import React, {Component} from 'react';
import './carousel.css';
import slide1Img from './images/slide1.jpg';
import slide2Img from './images/slide2.jpg';
import slide3Img from './images/slide3.jpg';

class Carousel extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1Img} className='d-block w-100 ' alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2Img} className='d-block w-100 ' alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3Img} className='d-block w-100 ' alt=""/>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Carousel;