import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import Top from './Top.js';
import axios from 'axios'

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