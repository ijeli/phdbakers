import React from 'react';
import Card from 'react-bootstrap/Card';

function Info() {
    return (
        <div>
            <Card>
                <div className='row'>
                    <div className='col-sm-12 text-center '>
                        <h2 style={{color: 'Green'}}><strong>Info</strong></h2>
                        <br/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-6 text-center'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h3 style={{color: 'Green'}}>Hours</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-12'>
                                <h5 style={{color: 'Green'}}>Monday-Friday: 10:00 - 13:00</h5>
                                <h5 style={{color: 'Green'}}>Saturday-Sunday: 9:00 - 15:00</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 text-center'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h3 style={{color: 'Green'}}>Location</h3>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-12'>
                                <h5 style={{color: 'Green'}}>1234 Street St. Wasington, D.C. 00001</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </Card>

        </div>
    )
}

export default Info;