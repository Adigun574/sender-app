import React, { Component } from 'react';
import "../css/Login.css";
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Top from './Top.js'
import axios from 'axios'

class Login extends Component{
    state = {
        email:'',
        password:'',
        invalidCredentials:false
    }
    login = ()=>{
        axios.post('http://localhost:5000/users/authenticate',this.state)
        .then(res=>{
            localStorage.setItem('senderUser',JSON.stringify(res.data.msg))
            this.props.history.push('/dashboard')
        })
        .catch(err=>{
            this.setState({invalidCredentials:true})
        })
    }

    handleInput = (event)=>{
        let nam = event.target.name
        let val = event.target.value
        this.setState({[nam]: val})
    }
    
    render(){ 
        return (
            <div>
            <Top />
            <div className="body">
            <form>
                <div className="loginForm">
                    <div className="logo">
                        <FaUser  className="fauser"/>
                    </div>
                    <div>{this.state.invalidCredentials?<h5 className="text-danger text-center">Wrong Credentials</h5>:null}</div>
                    <div className="form-group">
                        <small className="form-label">Email</small>
                        <input type="email" className="form-control loginField" 
                            placeholder="email" onChange={this.handleInput} name="email"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Password</small>
                        <input type="password" className="form-control loginField" 
                            placeholder="password" name="password" onChange={this.handleInput}/>
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
            </form>
            </div>
            </div>
                )
    }
//     state = {
//         username: '',
//         age: null,
//       };
//     myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       this.setState({[nam]: val});
//       console.log(this.state)
//     }
//     render() {
//       return (
//         <form>
//         <h1>Hello {this.state.username} {this.state.age}</h1>
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           name='username'
//           onChange={this.myChangeHandler}
//         />
//         <p>Enter your age:</p>
//         <input
//           type='text'
//           name='age'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       )
// }
}


export default Login