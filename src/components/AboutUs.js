import React from 'react';
import Card from 'react-bootstrap/Card';
import Graduate from '../images/graduate.jpg';
import Truck from '../images/truck.jpg';

function AboutUs() {
        return (
            <div>
                <Card>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <h2 style={{color: 'Green'}}><strong>Our Doctorate Bakers</strong></h2>
                            <br/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-8 text-center'>
                            <img src={Graduate} width="100" height="150" alt="icon"/>   
                            <img src={Truck} width="200" height="150" alt="icon"/>    
                            <img src={Graduate} width="100" height="150" alt="icon"/> 
                            <br/> 
                        </div>

                        <div className='col-sm-3 text-center'>
                            <p>We are the PhD Bakers known not just for our high degrees</p>
                            <p>PhD graduates from Clemson, we now a little something about the chemistry of flavor, texture, and THC. Find us around Washington D.C. driving around in our hotbox handing out only the highest of quality of good with every purchase of our PhD Baker merch.</p>
                            <p>We guarentee that you'll fly sky high with every bite of quality goods!</p>
                            <br/>
                        </div>

                        <div className='col-sm-1'/>
                    </div>
                </Card>

            </div>
        )
}

export default AboutUs;