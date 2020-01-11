import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import Top from './Top.js';

class Register extends Component{
    signup = ()=>{
        this.props.history.push('/dashboard')
    }
    render(){
        return (
            <div>
                <Top />
            <div className="body">
                <div className="loginForm">
                    <div className="logo">
                        <FaUser  className="fauser"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Firstname</small>
                        <input type="text" className="form-control loginField" placeholder="Firstname"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Lastname</small>
                        <input type="text" className="form-control loginField" placeholder="Lastname"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Username</small>
                        <input type="text" className="form-control loginField" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Email</small>
                        <input type="email" className="form-control loginField" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Password</small>
                        <input type="password" className="form-control loginField" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Re-Password</small>
                        <input type="password" className="form-control loginField" placeholder="password"/>
                    </div>
                    <div>
                        <h3 className="login" onClick={this.signup}>Signup</h3>
                    </div>
                </div>
            </div>
            </div>
                )
    }

}


export default Register