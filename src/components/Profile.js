import React, { Component } from 'react';
import { FaStar, FaLinkedin, FaAddressCard, FaCertificate, FaEnvelope, 
    FaMapMarkerAlt, FaUserEdit, FaRegThumbsDown, FaWhatsapp, FaGenderless, FaCalendar
} from 'react-icons/fa';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import avatar from '../images/avatar.png';
import '../css/Profile.css';
import axios from 'axios';

class Profile extends Component{
    state = {
        showProfessionalModal:false,
        showPersonalModal:false,
        user:null,
        profile:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            userName:'',
            email:'',
            location:'',
            rating:'',
            phone:'',
            address:'',
            linkedin:'',
            whatsapp:'',
            birthday:'',
            gender:'',
            skills:[],
            jobDescription:'',
            sellYourself:'',
        }
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
    handleFirstName = (e) =>{
        let profile = {...this.state.profile}
        profile.firstName = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleLastName = (e) =>{
        let profile = {...this.state.profile}
        profile.lastName = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handlePhone = (e) =>{
        let profile = {...this.state.profile}
        profile.phone = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleWhatsapp = (e) =>{
        let profile = {...this.state.profile}
        profile.whatsapp = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleLocation = (e) =>{
        let profile = {...this.state.profile}
        profile.location = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleAddress = (e) =>{
        let profile = {...this.state.profile}
        profile.address = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleBirthday = (e) =>{
        let profile = {...this.state.profile}
        profile.birthday = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleGender = (e) =>{
        let profile = {...this.state.profile}
        profile.gender = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleJobTitle = (e) =>{
        let profile = {...this.state.profile}
        profile.jobTitle = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleJobDescription = (e) =>{
        let profile = {...this.state.profile}
        profile.jobDescription = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleSellYourself = (e) =>{
        let profile = {...this.state.profile}
        profile.sellYourself = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleLinkedin = (e) =>{
        let profile = {...this.state.profile}
        profile.linkedin = e.target.value
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleSkills = (e) =>{
        let profile = {...this.state.profile}
        profile.skills = e.target.value.split(',')
        this.setState({profile:e.target.value})
        this.setState({profile})
    }
    handleInput = (e) =>{
        // const nam = e.target.name
        // const val = e.target.value
        // this.setState({
        //     profile:{[nam]:val}
        // })
    }
    editPersonalModal = () =>{
        console.log(this.state.profile)
        axios.post('http://localhost:5000/profiles/edit',this.state.profile)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    editProfessionalModal = () =>{
        this.editPersonalModal()
    }
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('senderUser'))
        if(user){
            axios.post('http://localhost:5000/profiles/getone',{email:user.email})
            .then(res=>{
                this.setState({profile:res.data.msg})
            })
            .catch(err=>{
                console.log(err)
            })   
        }
    }
    componentWillUnmount(){
        
    }

    render(){  
        const { profile } = this.state    
        const nil = 'Not Set'  
        return (
            this.state.profile?<div className="body">
                <Container className="mt-4">
                <Row>
                    <Col sm={4} style={{borderRight:'1px solid rgb(155, 153, 153)'}}>
                        <img src={avatar} alt="wallet" height="150px" width="150px" className="image"/>
                        <h4><b>{profile.firstName} {profile.lastName}</b></h4>
                        <hr/>
                        <h5 className="name"><b><FaCertificate /> {profile.jobTitle?profile.jobTitle : nil}</b></h5>
                        <p>A Professional Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                            lorem ipsum dolor lorem ipsum dolor</p>
                        <h6 className="blue-color"><b><FaCertificate className="blue-color"/> Skills</b></h6>
                            {profile.skills?profile.skills.map(skill=>{
                                return(
                                    <ul className="skills" key={skill}>
                                        <li>{skill}</li>
                                    </ul>
                                )
                            }):
                            <ul>
                                <li>Not set</li>
                                <li>Not set</li>
                                <li>Not set</li>
                                <li>Not set</li>
                                <li>Not set</li>
                            </ul>
                            }
                    </Col>   
                    <Col sm={6}>
                        <div style={{display:'flex'}}>
                            <h3>
                                {profile.firstName ? profile.firstName : nil} {profile.lastName ? profile.lastName : nil}
                            </h3>
                        </div>
                        <h6 className="location"><FaMapMarkerAlt/> {profile.location?profile.location:nil}</h6>
                        <h6 className="blue-color">{profile.jobTitle?profile.jobTitle:nil}</h6>
                        <h5 className="ash-color">Ratings</h5>
                        <div style={{display:'flex'}}>
                            <h5 className="mr-2"><b>{profile.rating?profile.rating:0}</b></h5>
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
                                <li><FaAddressCard className="blue-color"/> <b>Phone</b></li>
                                <li><FaMapMarkerAlt className="blue-color"/> <b>Address</b></li>
                                <li><FaEnvelope className="blue-color"/> <b>Email</b></li>
                                <li><FaLinkedin className="blue-color"/> <b>Linkedin</b></li>
                                <li><FaWhatsapp className="blue-color"/> <b>Whatsapp</b></li>
                            </ul>
                            <ul>
                                <li className="blue-color">{profile.phone?profile.phone:nil}</li>
                                <li>{profile.address?profile.address:nil}</li>
                                <li className="blue-color">{profile.email?profile.email:nil}</li>
                                <li className="blue-color">{profile.linkedin?profile.linkedin:nil}</li>
                                <li className="blue-color">{profile.whatsapp?profile.whatsapp:nil}</li>
                            </ul>
                        </div>
                        <h6>Others</h6>
                        <div style={{display:'flex'}}>
                            <ul>
                                <li><FaCalendar className="blue-color" /> <b>Birthday</b></li>
                                <li><FaGenderless className="blue-color" /> <b>Gender</b></li>
                            </ul>
                            <ul>
                                <li>{profile.birthday?profile.birthday:nil}</li>
                                <li>{profile.gender?profile.gender:nil}</li>
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
                <Form.Control type="text" placeholder="Enter email" value={profile.firstName} 
                    onChange={this.handleFirstName} name="firstName"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Lastname" value={profile.lastName} 
                    onChange={this.handleLastName} name="lastName"/>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridPhone">
                <Form.Label>Phone no</Form.Label>
                <Form.Control type="number" placeholder="+234XXXXXXX" value={profile.phone? profile.phone:''} 
                    onChange={this.handlePhone} name="phone"/>
            </Form.Group>

            <Form.Group controlId="formGridWhatsapp">
                <Form.Label>Whatsapp</Form.Label>
                <Form.Control type="number" placeholder="+234XXXXXXX" value={profile.whatsapp? profile.whatsapp:''} 
                    onChange={this.handleWhatsapp} name="whatsapp"/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="123, main street" value={profile.address?profile.address:''} 
                    onChange={this.handleAddress} name="address"/>
            </Form.Group>

            <Form.Group controlId="formGridLocation">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Lagos" value={profile.location?profile.location:''} 
                    onChange={this.handleLocation} name="location"/>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date" value={profile.birthday?profile.birthday:''} 
                    onChange={this.handleBirthday} name="birthday"/>
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox" style={{display:'flex'}}>
                <Form.Check type="radio" label="Male" name="gender" className="mr-4"
                    onChange={this.handleGender} value="male"/>
                <Form.Check type="radio" label="Female" name="gender"
                    onChange={this.handleGender} value="female"/>
            </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClosePersonalModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editPersonalModal}>
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
                <Form.Control type="text" placeholder="Plumber" name="jobTitle"
                    onChange={this.handleJobTitle} value={profile.jobTitle?profile.jobTitle:''}/>
            </Form.Group>

            <Form.Group controlId="formGridJd">
                <Form.Label>Job Description</Form.Label>
                <Form.Control placeholder="I am a professional ......." type="text" name="jobDescription"
                    onChange={this.handleJobDescription} value={profile.jobDescription?profile.jobDescription:''}/>
            </Form.Group>

            <Form.Group controlId="formGridSell">
                <Form.Label>Sell Yourself here</Form.Label>
                <Form.Control placeholder="I have ..............." type="text" name="sellYourself"
                    onChange={this.handleSellYourself} value={profile.sellYourself?profile.sellYourself:''}/>
            </Form.Group>

            <Form.Group controlId="formGridLinkedin">
                <Form.Label>Linkedin</Form.Label>
                <Form.Control placeholder="www.linkedin.com/example" type="text" name="linkedin"
                    onChange={this.handleLinkedin} value={profile.linkedin?profile.linkedin:''}/>
            </Form.Group>

            <Form.Group controlId="formGridSkills">
                <Form.Label>Skills (comma separated)</Form.Label>
                <Form.Control placeholder="javascript, plumbing, graphics design" type="text" name="skills"
                    onChange={this.handleSkills} value={profile.skills?profile.skills:''}/>
            </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseProfessionalModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editProfessionalModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* PROFESSIONAL MODAL ENDS */}
            </div>:<div><h1>LOADER</h1></div>
                )
    }

}


export default Profile
