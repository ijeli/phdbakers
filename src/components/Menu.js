import React from 'react';
import Card from 'react-bootstrap/Card';
import ExampleMenu from '../images/exampleMenu.png';
import SingleBrownie from '../images/singleBrownie.jpg';
import SingleCookie from '../images/singleCookie.jpg';
import BatchBrownie from '../images/batchBrownie.jpg';
import BatchCookie from '../images/batchCookie.jpg';
import BatchSlutBrownie from '../images/batchSlutBrownie.png';

function Menu() {
    return (
        <div>
            <Card>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <img className="d-block w-100" style={{padding: "10px"}}src={ExampleMenu} alt="Example Menu"/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Menu;

{/* <div className='row'>
<div className='col-sm-6'>
    <div className='row'>
        <div className='col-sm-12 text-center'>
            <h4>Singles</h4>
        </div>
    </div>
    <div className='row'>
        <div className='col-sm-1'/>
        <div className='col-sm-11'>
            <ul>
                <li>
                    <img src={SingleBrownie} width="50" height="50" alt="icon"/>    
                    Brownie------$3.00
                </li>
                <li>
                    <img src={SingleCookie} width="50" height="50" alt="icon"/>    
                    Cookie-------$2.50
                </li>
                <li>
                    <img src={SingleCookie} width="50" height="50" alt="icon"/>    
                    Blondie------$5.00
                </li>
            </ul>
        </div>
    </div>
</div>

<div className='col-sm-6'>
    <div className='row'>
        <div className='col-sm-12 text-center'>
            <h4>Batches</h4>
        </div>
        <div className='row'>
            <div className='col-sm-1'/>
            <div className='col-sm-11'>
                <ul>
                    <li>
                        <img src={BatchBrownie} width="50" height="50" alt="icon"/>   
                        Brownie------$15.00
                    </li>
                    <li>
                        <img src={BatchCookie} width="50" height="50" alt="icon"/>   
                        Cookie-------$12.50
                    </li>
                    <li>
                        <img src={BatchSlutBrownie} width="50" height="50" alt="icon"/>   
                        Blondie------$20.00
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div> */}
