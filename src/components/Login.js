import React, { useState, useEffect } from 'react';
import "../css/Login.css";
import { FaUser, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Top from './Top.js';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';
import Loader from './Loader.js';

const Login = (props) =>{
    const [loginDetails, setLoginDetails] = useState({
        email:'',
        password:'',
        invalidCredentials:false
    })
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

    },[])

    const handleEmail = (e) =>{
        setLoginDetails({...loginDetails, email:e})
    }

    const handlePassword = (e) =>{
        setLoginDetails({...loginDetails, password:e})
    }

    const login = ()=>{
        setLoading(true)
        console.log(loginDetails)
        axios.post('http://localhost:5000/users/authenticate',loginDetails)
        .then(res=>{
            localStorage.setItem('senderUser',JSON.stringify(res.data.msg))
            props.history.push('/dashboard')
            setLoading(false)
        })
        .catch(err=>{
            setLoginDetails({...loginDetails, invalidCredentials:true})
            setLoading(false)
        })
    }
    let content =
            <div>
            <Top />
            <div className="body">
            <h3 className="login-text">Login</h3>
            <form>
                <Container>
                    <Row>
                        <Col md={4} className="mr-4">
                            <div className="loginForm">
                                <div className="logo">
                                    <FaUserLock  className="fauser"/>
                                </div>
                                <div>{loginDetails.invalidCredentials?<h5 className="text-danger text-center">Wrong Credentials</h5>:null}</div>
                                <div className="form-group">
                                    <small className="form-label">Email</small>
                                    <input type="email" className="form-control loginField" 
                                        placeholder="email" onChange={e=>handleEmail(e.target.value)} name="email"/>
                                </div>
                                <div className="form-group">
                                    <small className="form-label">Password</small>
                                    <input type="password" className="form-control loginField" 
                                        placeholder="password" name="password" onChange={e=>handlePassword(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <div style={{display:'flex'}}>
                                        <input type="checkbox"/>
                                        <small className="form-label remember">Remember Me</small>
                                    </div>
                                </div>
                                {/* <Loader className="mb-4"/> */}
                                {loading?<Loader/>:null}
                                <div>
                                    <h3 className="login" onClick={()=>login()}>Login</h3>
                                </div>
                                <Link to="/register"><small className="forget">Sign up?</small></Link>
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

                {/* <div className="loginForm">
                    <div className="logo">
                        <FaUser  className="fauser"/>
                    </div>
                    <div>{loginDetails.invalidCredentials?<h5 className="text-danger text-center">Wrong Credentials</h5>:null}</div>
                    <div className="form-group">
                        <small className="form-label">Email</small>
                        <input type="email" className="form-control loginField" 
                            placeholder="email" onChange={e=>handleEmail(e.target.value)} name="email"/>
                    </div>
                    <div className="form-group">
                        <small className="form-label">Password</small>
                        <input type="password" className="form-control loginField" 
                            placeholder="password" name="password" onChange={e=>handlePassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <div style={{display:'flex'}}>
                            <input type="checkbox"/>
                            <small className="form-label">Remember Me</small>
                        </div>
                    </div>
                    <div>
                        <h3 className="login" onClick={()=>login()}>Login</h3>
                    </div>
                    <Link to="/register"><small className="forget">Sign up?</small></Link>
                </div> */}
            </form>
            </div>
            </div>
        // let content =
        //     <div>
        //     <Top />
        //     <div className="body">
        //     <form>
        //         <div className="loginForm">
        //             <div className="logo">
        //                 <FaUser  className="fauser"/>
        //             </div>
        //             <div>{loginDetails.invalidCredentials?<h5 className="text-danger text-center">Wrong Credentials</h5>:null}</div>
        //             <div className="form-group">
        //                 <small className="form-label">Email</small>
        //                 <input type="email" className="form-control loginField" 
        //                     placeholder="email" onChange={e=>handleEmail(e.target.value)} name="email"/>
        //             </div>
        //             <div className="form-group">
        //                 <small className="form-label">Password</small>
        //                 <input type="password" className="form-control loginField" 
        //                     placeholder="password" name="password" onChange={e=>handlePassword(e.target.value)}/>
        //             </div>
        //             <div className="form-group">
        //                 <div style={{display:'flex'}}>
        //                     <input type="checkbox"/>
        //                     <small className="form-label">Remember Me</small>
        //                 </div>
        //             </div>
        //             <div>
        //                 <h3 className="login" onClick={()=>login()}>Login</h3>
        //             </div>
        //             <Link to="/register"><small className="forget">Sign up?</small></Link>
        //         </div>
        //     </form>
        //     </div>
        //     </div>
            return content
}


export default Login

