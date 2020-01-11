import React, { Component } from 'react';
import { FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { Tabs, Tab, Card, Button, Container, Row, Col, Form, Modal, Toast } from 'react-bootstrap';
import '../css/Job.css'

class Jobs extends Component{
    state = {
        showModal:false,
        showToast:false
    }
    handleShowToast = ()=>{
        this.setState({
            showToast:true
        })
        setTimeout(this.handleCloseToast,3000)
    }
    handleCloseToast = ()=>{
        this.setState({
            showToast:false
        })
    }
    handleShowModal = () =>{
        this.setState({
            showModal:true
        })
    }
    handleCloseModal = () =>{
        this.setState({
            showModal:false
        })
    }
    render(){
        return (
            <div>
                {/* <Row>
                    <Col xs={6} style={{position:'absolute'}}>
                        <Toast show={this.state.showToast} delay={3000} autohide>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                            />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                </Row> */}
                <Tabs defaultActiveKey="View Jobs" id="uncontrolled-tab-example" className="mt-2">
                    <Tab eventKey="View Jobs" title="View Jobs">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Card className="text-center mt-4">
                                    <Card.Header className="job-header"><FaBriefcase/> <b>Job Title</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Employer</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content. JD
                                        </Card.Text><br/>
                                        <i><FaMapMarkerAlt style={{color:'#6C63FF'}}/> location (pay range | Full Time)</i><br/>
                                        <Button variant="primary" onClick={this.handleShowModal}>View Details</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"><FaClock/> 2 days ago</Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="text-center mt-4">
                                    <Card.Header className="job-header"><FaBriefcase/> <b>Job Title</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Employer</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content. JD
                                        </Card.Text><br/>
                                        <i><FaMapMarkerAlt style={{color:'#6C63FF'}}/> location (pay range | Full Time)</i><br/>
                                        <Button variant="primary" onClick={this.handleShowModal}>View Details</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"><FaClock/> 2 days ago</Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="text-center mt-4">
                                    <Card.Header className="job-header"><FaBriefcase/> <b>Job Title</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Employer</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content. JD
                                        </Card.Text><br/>
                                        <i><FaMapMarkerAlt style={{color:'#6C63FF'}}/> location (pay range | Full Time)</i><br/>
                                        <Button variant="primary" onClick={this.handleShowModal}>View Details</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"><FaClock/> 2 days ago</Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="text-center mt-4">
                                    <Card.Header className="job-header"><FaBriefcase/> <b>Job Title</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Employer</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content. JD
                                        </Card.Text><br/>
                                        <i><FaMapMarkerAlt style={{color:'#6C63FF'}}/> location (pay range | Full Time)</i><br/>
                                        <Button variant="primary" onClick={this.handleShowModal}>View Details</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"><FaClock/> 2 days ago</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    </Tab>
                    <Tab eventKey="Post Job" title="Post Jobs">
                        <Container className="mt-4">
                        <div className="card post-title">POST A JOB</div>
                        <Card className="p-4">
                        <Form>
                            <Form.Group controlId="formGridJt">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control placeholder="Plumber" />
                            </Form.Group>

                            <Form.Group controlId="formGridJd">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control placeholder="Looking for an experienced ........." />
                            </Form.Group>

                            <Form.Group controlId="formGridSell">
                                <Form.Label>Location</Form.Label>
                                <Form.Control placeholder="Lekki, Lagos State" />
                            </Form.Group>

                            <Form.Group controlId="formGridLinkedin">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control placeholder="2 months" />
                            </Form.Group>

                            <Form.Group controlId="formGridLinkedin">
                                <Form.Label>Pay(Range/Optional)</Form.Label>
                                <Form.Control placeholder="N20000 - N30000" />
                            </Form.Group>

                            <Form.Group controlId="formGridSkills">
                                <Form.Label>Requirements (comma separated)</Form.Label>
                                <Form.Control placeholder="javascript, plumbing, graphics design" />
                            </Form.Group>
                            <Form.Group id="formGridCheckbox" style={{display:'flex'}}>
                                <Form.Check type="radio" label="Part Time" name="Type" className="mr-4"/>
                                <Form.Check type="radio" label="Full Time" name="Type"/>
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={this.handleShowToast}>Post Job</Button>
                        </Card>
                        </Container>
                    </Tab>
                </Tabs>

                <Modal show={this.state.showModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>JOB TITLE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.handleCloseModal}>
                        Bid For Job
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
                )
    }

}


export default Jobs