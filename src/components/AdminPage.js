import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function AdminPage() {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        },
    };

    const[modalIsOpen, setModalIsOpen] = useState(true)
    const[showOrders, setShowOrders] = useState(false)
    const[showUsers, setShowUsers] = useState(false)
    const[password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === "admin")
            setModalIsOpen(false);
        else {
            alert("Incorrect password");
            setPassword("");
        }
    };

    return (
        <div>
            <Card>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h2 style={{color: 'Green', marginTop: '10px'}}><strong>Admin</strong></h2>
                        <br/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-1 text-center'>
                        <Button Click={() => {setShowOrders(true); setShowUsers(false);}}><h5>Orders</h5></Button>
                        <br/><br/>
                        <Button Click={() => {setShowUsers(true); setShowOrders(false)}}><h5>Users</h5></Button>
                        <br/>
                    </div>

                    <div className='col-sm-6 text-center'>
                        
                    </div>
                </div>
                <br/>
            </Card>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control required type="text" placeholder="Admin" defaultValue="Admin" disabled/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        required 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <div className='text-right'>
                                    <Button variant="primary" type="submit" style={{marginRight:"5px"}}> Submit </Button>
                                    <Button variant="primary" onClick={() => window.location.href = "/"}> Cancel </Button>
                                </div>
                            </Form>
                        </div>
                        <br/>
                    </div>
                </div>
            </Modal>
 
        </div>
    )
}

export default AdminPage;