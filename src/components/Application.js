import React, { Component } from 'react';
import { FaClock } from 'react-icons/fa';
import { Tabs, Tab, Card, Button, Container, Row, Col, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';

class Application extends Component{
    render(){
        return (
            <div>
                <Container>
                    <div className="mt-4">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav varian="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Plumber Job</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Nanny Job</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Col sm={6}>
                                        <Card>
                                        <img src={avatar} height="50px" width="50px"/>  
                                        <h5>Firstname Lastname</h5>
                                        <h6>Skill1, skill2, skill3, skill4</h6>
                                        <div style={{display:'flex'}}>
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-danger">Decline</button>
                                        </div>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col sm={6}>
                                        <Card>
                                        <img src={avatar} height="50px" width="50px"/>  
                                        <h5>Firstname Lastname</h5>
                                        <h6>Skill1, skill2, skill3, skill4</h6>
                                        <div style={{display:'flex'}}>
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-danger">Decline</button>
                                        </div>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    </div>
                </Container>               
            </div>
                )
    }

}


export default Application