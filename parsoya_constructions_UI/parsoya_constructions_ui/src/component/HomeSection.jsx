import '../App.css';
import React, { Component } from 'react';
import { Topbar } from './Topbar';

import We from './We';
import Services from './Services';
import Portfolio from './Portfolio';
import Career from './Career';
import { Contact } from './Contact';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
const HomeSection = () => {

    return (
        <div className='homepage-bgimage'>
            <div className='row mt-0 m-5  d-flex justify-content-between'>
            {/* style={{position:'absolute', top:'50%;', left:'50%', transform:'translate(-50%, -50%)'}} */}
                <div className='col-md-4 mt-5 ' >
                    <h2>Reforms and constructions in Tenerife</h2>
                    <p>Kitchen, bathroom and toilet, masonry, electrical installation, aluminum carpentry, facades and walls</p>
                    <Button variant="outline-primary" className='' type="submit">Our portfolio</Button>
                </div>
                <div className='col-md-4  mt-5' >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" size='sm' placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size='sm' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" size='sm' placeholder="Enter Phone Number" />
                        </Form.Group>

                        <FloatingLabel className="mb-3" controlId="messageArea" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button variant="primary" className='' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;