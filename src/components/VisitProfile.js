import React, { Component, useEffect, useState } from 'react';
import { FaStar, FaLinkedin, FaAddressCard, FaCertificate, FaEnvelope, 
    FaMapMarkerAlt, FaUserEdit, FaRegThumbsDown, FaWhatsapp, FaGenderless, FaCalendar
} from 'react-icons/fa';
import { Container, Row, Col, Button, Modal, Form, Toast } from 'react-bootstrap';
import avatar from '../images/avatar.png';
import '../css/Profile.css';
import axios from 'axios';
import FullpageLoader from './FullpageLoader.js';
import { Router } from 'react-router-dom';
import { useParams } from 'react-router';

// const VisitProfile = ()=>{

//     const getEmail = ()=>{

//     }

//     useEffect(()=>{
//         const { profileemail } = useParams()
//         console.log(profileemail)
//     },[])
//     return(
//         <div>aaaa</div>
//     )
// }


class VisitProfile extends Component{
    state = {
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
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('senderUser'))
        // const { profileemail } = this.props.match.params
        // const { profileemail } = useParams()
        // console.log(profileemail)
        const profileEmail = localStorage.getItem('profileEmail')
        console.log(profileEmail)
        if(user){
            // axios.post('http://localhost:5000/profiles/getone',{email:user.email})
            axios.post('http://localhost:5000/profiles/getone',{email:profileEmail})
            .then(res=>{
                this.setState({profile:res.data.msg},console.log(this.state.profile))
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
            this.state.profile.email!=''?<div className="body">
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
                            <h5 className="mr-2"><b>{profile.rating?profile.rating:4}</b></h5>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="blue-color"/></h6>
                            <h6><FaStar className="ash-color"/></h6>
                        </div>
                        <div style={{display:'flex'}}>
                            <button onClick={this.handleShowPersonalModal} className="btn btn-primary mr-2" disabled><FaUserEdit/> Edit Personal Info</button>
                            <button onClick={this.handleShowProfessionalModal} className="btn btn-primary" disabled><FaUserEdit/> Edit Professional Info</button>
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
            </div>
            :<FullpageLoader/>
                )
    }

}


export default VisitProfile
