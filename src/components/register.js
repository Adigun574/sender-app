import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import Top from './Top.js';
import axios from 'axios';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import "../css/register.css";
import { Link } from 'react-router-dom';
import Loader from "./Loader";

const Register = (props)=>{
    const [registrationDetails, setRegistrationDetails] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        rePassword:''
    })
    const [isLoading,setIsLoading] = useState(false)
    const [passwordMismatch,setPasswordMismatch] = useState(false)
    const [firstNameRequired,setFirstNameRequired] = useState(false)
    const [lastNameRequired,setLastNameRequired] = useState(false)
    const [userNameRequired,setUserNameRequired] = useState(false)
    const [emailRequired,setEmailRequired] = useState(false)
    const [passwordRequired,setPasswordRequired] = useState(false)
    const [show, setShow] = useState(false)
    const [showFail, setShowFail] = useState(false)

    const signup = ()=>{
        setIsLoading(true)
        if(registrationDetails.firstName.length<1){
            setFirstNameRequired(true)
        }
        else{
            setFirstNameRequired(false)
        }

        if(registrationDetails.lastName.length<1){
            setLastNameRequired(true)
        }
        else{
            setLastNameRequired(false)
        }

        if(registrationDetails.userName.length<1){
            setUserNameRequired(true)
        }
        else{
            setUserNameRequired(false)
        }

        if(registrationDetails.email.length<1){
            setEmailRequired(true)
        }
        else{
            setEmailRequired(false)
        }

        if(registrationDetails.password.length<1){
            setPasswordRequired(true)
        }
        else{
            setPasswordRequired(false)
        }
        
        if(!firstNameRequired && !lastNameRequired && !userNameRequired && !emailRequired && !passwordRequired && !passwordMismatch){
            //console.log(registrationDetails)
            axios.post('http://localhost:5000/users/register',registrationDetails)
            .then(res=>{
                setShow(true)
                setIsLoading(false)
                setTimeout(()=>{
                    props.history.push('/dashboard')
                },2000)
            })
            .catch(err=>{
                setShowFail(true)
                setIsLoading(false)
            })
        }
        //console.log(firstNameRequired,lastNameRequired,userNameRequired,emailRequired,passwordRequired,passwordMismatch)
    }
    const handleFirstName = (e) =>{
        setRegistrationDetails({...registrationDetails, firstName:e})
        if(registrationDetails.firstName.length<1){
            setFirstNameRequired(true)
        }
        else{
            setFirstNameRequired(false)   
        }
    }
    const handleLastName = (e) =>{
        setRegistrationDetails({...registrationDetails, lastName:e})
        if(registrationDetails.lastName.length<1){
            setLastNameRequired(true)
        }
        else{
            setLastNameRequired(false)   
        }
    }
    const handleUserName = (e) =>{
        setRegistrationDetails({...registrationDetails, userName:e})
        if(registrationDetails.userName.length<1){
            setUserNameRequired(true)
        }
        else{
            setUserNameRequired(false)   
        }
    }
    const handleEmail = (e) =>{
        setRegistrationDetails({...registrationDetails, email:e})
        if(registrationDetails.email.length<1){
            setEmailRequired(true)
        }
        else{
            setEmailRequired(false)   
        }
    }
    const handlePassword = (e) =>{
        setRegistrationDetails({...registrationDetails, password:e})
        if(registrationDetails.password.length<1){
            setPasswordRequired(true)
        }
        else{
            setPasswordRequired(false)   
        }
    }
    const handleRePassword = (e) =>{
        setRegistrationDetails({...registrationDetails, rePassword:e})
    }

    useEffect(()=>{
        if(registrationDetails.password !== registrationDetails.rePassword){
            setPasswordMismatch(true)
        }
        else if(registrationDetails.password === registrationDetails.rePassword){
            setPasswordMismatch(false)
        }
    },[
        registrationDetails.password,registrationDetails.rePassword,
        registrationDetails.firstName,registrationDetails.lastName,
        registrationDetails.userName,registrationDetails.email,
        firstNameRequired,lastNameRequired,userNameRequired,emailRequired,
        passwordRequired,passwordMismatch
    ])

    return (
        <div>
            <Top />
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="toaster">
                <Toast.Header>
                    <strong className="mr-auto">Success!!!</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Congrats! Your profile has been created.</Toast.Body>
            </Toast>
            <Toast onClose={() => setShowFail(false)} show={showFail} delay={3000} autohide className="toaster">
                <Toast.Header>
                    <strong className="mr-auto">Oops!!!</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Failed! Something went wrong.</Toast.Body>
            </Toast>
        <div className="body">
        <Container className="mt-4">
            <Row>
            <Col md={4} className="mr-4">
            <div className="loginForm">
                <div className="logo">
                    <FaUser  className="fauser"/>
                </div>
                <div className="form-group">
                    <small className="form-label">Firstname</small>
                    <input type="text" className="form-control loginField" 
                        placeholder="Firstname" name="firstName" onChange={e=>{handleFirstName(e.target.value)}}/>
                </div>
                {firstNameRequired?<small className="text-danger">Firstname is required</small>:null}
                <div className="form-group">
                    <small className="form-label">Lastname</small>
                    <input type="text" className="form-control loginField" 
                        placeholder="Lastname" name="lastName" onChange={e=>{handleLastName(e.target.value)}}/>
                </div>
                {lastNameRequired?<small className="text-danger">Lastname is required</small>:null}
                <div className="form-group">
                    <small className="form-label">Username</small>
                    <input type="text" className="form-control loginField" 
                        placeholder="Username" name="userName" onChange={e=>{handleUserName(e.target.value)}}/>
                </div>
                {userNameRequired?<small className="text-danger">Username is required</small>:null}
                <div className="form-group">
                    <small className="form-label">Email</small>
                    <input type="email" className="form-control loginField" 
                        placeholder="email" name="email" onChange={e=>{handleEmail(e.target.value)}}/>
                </div>
                {emailRequired?<small className="text-danger">Email is required</small>:null}
                <div className="form-group">
                    <small className="form-label">Password</small>
                    <input type="password" className="form-control loginField" 
                        placeholder="password" name="password" onChange={e=>{handlePassword(e.target.value)}}/>
                </div>
                {passwordMismatch?<small className="text-danger">Passwords do not match</small>:null}
                {passwordRequired?<small className="text-danger">Password is required</small>:null}
                <div className="form-group">
                    <small className="form-label">Re-Password</small>
                    <input type="password" className="form-control loginField" 
                        placeholder="password" name="rePassword" onChange={e=>{handleRePassword(e.target.value)}}/>
                </div>
                {passwordMismatch?<small className="text-danger">Passwords do not match</small>:null}
                {isLoading?<Loader/>:null}
                <div>
                    <h3 className="login" onClick={()=>signup()}>Signup</h3>
                </div>
                <Link to="/login"><small className="forget">Login?</small></Link>
            </div>
            </Col>
            <Col md={7}>
                <div className="side-box">
                    <div className="box-content">
                        <h4 className="side-hire">Hire or Get Hired</h4>
                        <h6 className="side-learn">Learn more</h6>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
        </div>
            )
}

export default Register