import React, { Component } from 'react';
import { FaStar, FaPeriscope, FaLinkedin, FaSistrix, 
    FaAddressCard, FaAddressBook, FaCalendarAlt, FaCertificate, FaCheckCircle, FaCheckDouble, FaCheck,
    FaComment, FaClock, FaEdit, FaEnvelope, FaLink, FaList, FaMapMarkerAlt, FaStarHalfAlt,
    FaUserCog, FaUserEdit, FaUser, FaUsers, FaUsersCog, FaRegThumbsDown, FaRegThumbsUp, FaWhatsapp,
    FaGenderless, FaCalendar
} from 'react-icons/fa';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import avatar from '../images/avatar.png';
import '../css/Profile.css';

class Profile extends Component{
    state = {
        showProfessionalModal:false,
        showPersonalModal:false
    }
    handleShowPersonalModal = () =>{
        this.setState({
            showPersonalModal:true
        })
    }
    handleShowProfessionalModal = () => {
        this.setState({
            showProfessionalModal:true
        })
    }
    handleClosePersonalModal = () =>{
        this.setState({
            showPersonalModal:false
        })
    }
    handleCloseProfessionalModal = () => {
        this.setState({
            showProfessionalModal:false
        })
    }
    render(){
        return (
            <div className="body">
                <Container className="mt-4">
                <Row>
                    <Col sm={4} style={{borderRight:'1px solid rgb(155, 153, 153)'}}>
                        <img src={avatar} alt="wallet" height="150px" width="150px" className="image"/>
                        <h4><b>Firstname Lastname</b></h4>
                        <hr/>
                        <h5 className="name"><b><FaCertificate /> Plumber</b></h5>
                        <p>A Professional Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                            lorem ipsum dolor lorem ipsum dolor</p>
                        <h6 className="blue-color"><b><FaCertificate className="blue-color"/> Skills</b></h6>
                        <ul className="skills">
                            <li>Plumbing</li>
                            <li>Graphics Design</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </Col>   
                    <Col sm={6}>
                        <div style={{display:'flex'}}>
                            <h3>Firstname Lastname</h3>
                        </div>
                        <h6 className="location"><FaMapMarkerAlt/> location</h6>
                        <h6 className="blue-color">main job</h6>
                        <h5 className="ash-color">Ratings</h5>
                        <div style={{display:'flex'}}>
                            <h5 className="mr-2"><b>0</b></h5>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="ash-color"/></h6>
                            <h6><FaStar className="ash-color"/></h6>
                        </div>
                        <div style={{display:'flex'}}>
                            <button onClick={this.handleShowPersonalModal} className="btn btn-primary mr-2"><FaUserEdit/> Edit Personal Info</button>
                            <button onClick={this.handleShowProfessionalModal} className="btn btn-primary"><FaUserEdit/> Edit Professional Info</button>
                        </div>
                        <div style={{display:'flex'}} className="d-none">
                            <button className="btn btn-primary mr-2"><FaEnvelope/> Send Message</button>
                            <button className="btn btn-primary"><FaRegThumbsDown/> Report User</button>
                        </div>
                        <hr/>
                        <h6 style={{textDecoration:'underline'}}><b>About</b></h6>
                        <h6>Primary Information</h6>
                        <div style={{display:'flex'}}>
                            <ul>
                                <li><FaAddressCard className="blue-color"/> Phone</li>
                                <li><FaMapMarkerAlt className="blue-color"/> Address</li>
                                <li><FaEnvelope className="blue-color"/> Email</li>
                                <li><FaLinkedin className="blue-color"/> Linkedin</li>
                                <li><FaWhatsapp className="blue-color"/> Whatsapp</li>
                            </ul>
                            <ul>
                                <li className="blue-color">+2348175983993</li>
                                <li>2, orita fogo str, Igbobi, Lagos State</li>
                                <li className="blue-color">exampletest@gmail.com</li>
                                <li className="blue-color">linkedin/usernam</li>
                                <li className="blue-color">+23412345678</li>
                            </ul>
                        </div>
                        <h6>Others</h6>
                        <div style={{display:'flex'}}>
                            <ul>
                                <li><FaCalendar className="blue-color" /> Birthday</li>
                                <li><FaGenderless className="blue-color" /> Gender</li>
                            </ul>
                            <ul>
                                <li>22/11/2003</li>
                                <li>Male</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </Container>
        {/* PERSONAL MODAL STARTS*/}


      <Modal show={this.state.showPersonalModal}>
        <Modal.Header closeButton>
          <Modal.Title>PERSONAL INFO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridPhone">
                <Form.Label>Phone no</Form.Label>
                <Form.Control placeholder="+234XXXXXXX" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="123, main street" />
            </Form.Group>

            <Form.Group controlId="formGridWebsite">
                <Form.Label>Site Url</Form.Label>
                <Form.Control placeholder="example.com" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date"/>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox" style={{display:'flex'}}>
                <Form.Check type="radio" label="Male" name="gender" className="mr-4"/>
                <Form.Check type="radio" label="Female" name="gender"/>
            </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClosePersonalModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClosePersonalModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* PERSONAL MODAL ENDS */}

      {/* PROFESSIONAL MODAL STARTS */}

      <Modal show={this.state.showProfessionalModal}>
        <Modal.Header closeButton>
          <Modal.Title>PROFESSIONAL INFO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formGridJt">
                <Form.Label>Job Title/Occupation</Form.Label>
                <Form.Control placeholder="Plumber" />
            </Form.Group>

            <Form.Group controlId="formGridJd">
                <Form.Label>Job Description</Form.Label>
                <Form.Control placeholder="I am a professional ......." />
            </Form.Group>

            <Form.Group controlId="formGridSell">
                <Form.Label>Sell Yourself here</Form.Label>
                <Form.Control placeholder="I have ..............." />
            </Form.Group>

            <Form.Group controlId="formGridLinkedin">
                <Form.Label>Linkedin</Form.Label>
                <Form.Control placeholder="www.linkedin.com/example" />
            </Form.Group>

            <Form.Group controlId="formGridSkills">
                <Form.Label>Skills (comma separated)</Form.Label>
                <Form.Control placeholder="javascript, plumbing, graphics design" />
            </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseProfessionalModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleCloseProfessionalModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* PROFESSIONAL MODAL ENDS */}
            </div>
                )
    }

}


export default Profile
