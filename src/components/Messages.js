import React, { useState, useEffect } from 'react';
import { FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { Tabs, Tab, Card, Button, Container, Row, Col, Form, Modal, Toast, Accordion } from 'react-bootstrap';
import '../css/messages.css';
import axios from 'axios';
import FullpageLoader from './FullpageLoader.js';
import Loader from './Loader';


const user = JSON.parse(localStorage.getItem('senderUser'))

const Messages = ()=>{

    const [messages, setMessages] = useState(null)

    useEffect(()=>{
        axios.post('http://localhost:5000/messages/getmessagesbyrecipientemail',{receiverEmail:user.email})
        .then(res=>{
            setMessages(res.data.data)
        })
        .catch(err=>{
           console.log(err)
        })
    },[])
    return (
    <div>
        {messages?
        <div className="messages-body mt-4">
            <Container>
            {messages.length>0?
            <div>
            <Row>
            {messages.map(message=>{
                return (
                        <Col sm="6" key={message._id} className="mb-4">
                            <Accordion className="message-accordion">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} className="message-header">
                                    <h5><b>{message.senderUserName}</b></h5>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse>
                                    <Card.Body>{message.message}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                )
            })}
            </Row>
            <button className="btn btn-danger clear-button">Clear Messages</button>
            </div>
            :<div className="mt-4">
                <h3 className="text-muted text-center">No Messages</h3>
            </div>}
            </Container>
        </div>            
        :<FullpageLoader/>
        }
    </div>
                )
}



export default Messages