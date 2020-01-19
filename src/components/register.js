import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import Top from './Top.js';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/register.css";
import { Link } from 'react-router-dom';
import Loader from "./Loader";

class Register extends Component{
    state = {
        firstName:null,
        lastName:null,
        userName:null,
        email:null,
        password:null,
        rePassword:null
    }

    signup = ()=>{
        if(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password){
            axios.post('http://localhost:5000/users/register',this.state)
            .then(res=>{
                this.props.history.push('/dashboard')
            })
            .catch(err=>{
            })
        }
        
    }

    handleInput = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]:val})
    }
    render(){
        return (
            <div>
                <Top />
            <div className="body">
            <h3 className="login-text">Signup</h3>
            <Container>
                <Row>
                <Col md={4} className="mr-4">
                <div className="loginForm">
                    <div className="logo">
                        <FaUser  className="fauser"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Firstname</small>
                        <input type="text" className="form-control loginField" 
                            placeholder="Firstname" name="firstName" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Lastname</small>
                        <input type="text" className="form-control loginField" 
                            placeholder="Lastname" name="lastName" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Username</small>
                        <input type="text" className="form-control loginField" 
                            placeholder="Username" name="userName" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Email</small>
                        <input type="email" className="form-control loginField" 
                            placeholder="email" name="email" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Password</small>
                        <input type="password" className="form-control loginField" 
                            placeholder="password" name="password" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Re-Password</small>
                        <input type="password" className="form-control loginField" 
                            placeholder="password" name="rePassword" onChange={this.handleInput}/>
                    </div>
                    <Loader/>
                    <div>
                        <h3 className="login" onClick={this.signup}>Signup</h3>
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

}


export default Register