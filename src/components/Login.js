import React, { Component } from 'react';
import "../css/Login.css";
import { FaUser } from 'react-icons/fa';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Top from './Top.js'

class Login extends Component{
    login = ()=>{
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
                        <small className="form-label">Email</small>
                        <input type="email" className="form-control loginField" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Password</small>
                        <input type="password" className="form-control loginField" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <div style={{display:'flex'}}>
                            <input type="checkbox"/>
                            <small className="form-label">Remember Me</small>
                        </div>
                    </div>
                    <div>
                        <h3 className="login" onClick={this.login}>Login</h3>
                    </div>
                    <Link to="/register"><small className="forget">Sign up?</small></Link>
                </div>
            </div>
            </div>
                )
    }

}


export default Login