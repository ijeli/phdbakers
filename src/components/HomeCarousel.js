import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MenuIcon from '../images/menu.png';
import InfoIcon from '../images/info.png';
import ContactIcon from '../images/contact.png';

function homeCarousel() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-3'/>
                    <div className='col-sm-6'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 clickable-image"
                                    src={MenuIcon}
                                    alt="Menu"
                                    onClick={() => window.location.href = "/menu"}
                                />
                                <Carousel.Caption>
                                    <h3>Menu</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 clickable-image"
                                    src={ContactIcon}
                                    alt="About Us"
                                    onClick={() => window.location.href = "/about"}
                                />

                                <Carousel.Caption>
                                    <h3>About</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 clickable-image"
                                    src={InfoIcon}
                                    alt="Info"
                                    onClick={() => window.location.href = "/info"}
                                />

                                <Carousel.Caption>
                                    <h3>Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
 
                    </div>
                </div>
           </div>
        )
}

export default homeCarousel;