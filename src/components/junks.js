{/* <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row> */}

            {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            // <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            //         <Tab eventKey="home" title="Home">
            //             we jsekfnekfjsekfme
            //         </Tab>
            //         <Tab eventKey="profile" title="Profile">
            //             iuerogn/jkdgjkrsnfgk
            //         </Tab>
            //         <Tab eventKey="contact" title="Contact" disabled>
            //             jklefksenfkwjkfn
            //         </Tab>
            //     </Tabs>


    //         FaStar, FaPeriscope, FaLinkedin, FaSistrix, 
    // FaAddressCard, FaAddressBook, FaCalendarAlt, FaCertificate, FaCheckCircle, FaCheckDouble, FaCheck,
    // FaComment, FaClock, FaEdit, FaEnvelope, FaLink, FaList, FaMapMarkerAlt, FaStarHalfAlt,
    // FaUserCog, FaUserEdit, FaUser, FaUsers, FaUsersCog, FaRegThumbsDown, FaRegThumbsUp, FaWhatsapp,
    // FaGenderless, FaCalendar

    // for (let key in this.state.profile){
        //     if(this.state.profile.hasOwnProperty(key)){
        //       console.log(`${key} : ${this.state.profile[key]}`)
        //     }
        //  }


         {/* <div className="mt-4">
                    {this.state.jobs.map((job,index)=>{
            return <Tab.Container id="left-tabs-example" defaultActiveKey="first" key={job._id}>
                        <Row>
                            <Col sm={3}>
                            <Nav varian="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">{job.title}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            {this.state.applications[index] ? this.state.applications[index].map(application=>{
                                return <Tab.Content key={application._id}>
                                    <Tab.Pane eventKey="first">
                                        <Col sm={6}>
                                            <Card>
                                            <img src={avatar} height="50px" width="50px" alt=''/>  
                                            <h5>{application.jobId}</h5>
                                            <h6>Skill1, skill2, skill3, skill4</h6>
                                            <div style={{display:'flex'}}>
                                                <button className="btn btn-primary">Accept</button>
                                                <button className="btn btn-danger">Decline</button>
                                            </div>
                                            </Card>
                                        </Col>
                                    </Tab.Pane>
                                </Tab.Content>
                            }):'null'}
                            
                            </Col>
                        </Row>
                    </Tab.Container>
                    })}
                    </div> */}


                    {/* <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Col sm={6}>
                                        <Card>
                                        <img src={avatar} height="50px" width="50px" alt=''/>  
                                        <h5>Firstname Lastname</h5>
                                        <h6>Skill1, skill2, skill3, skill4</h6>
                                        <div style={{display:'flex'}}>
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-danger">Decline</button>
                                        </div>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content> */}

//LOGIN BEGINS
// import React, { Component } from 'react';
// import "../css/Login.css";
// import { FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Top from './Top.js'
// import axios from 'axios'

// class Login extends Component{
//     state = {
//         email:'',
//         password:'',
//         invalidCredentials:false
//     }
//     login = ()=>{
//         axios.post('http://localhost:5000/users/authenticate',this.state)
//         .then(res=>{
//             localStorage.setItem('senderUser',JSON.stringify(res.data.msg))
//             this.props.history.push('/dashboard')
//         })
//         .catch(err=>{
//             this.setState({invalidCredentials:true})
//         })
//     }

//     handleInput = (event)=>{
//         let nam = event.target.name
//         let val = event.target.value
//         this.setState({[nam]: val})
//     }
    
//     render(){ 
//         return (
//             <div>
//             <Top />
//             <div className="body">
//             <form>
//                 <div className="loginForm">
//                     <div className="logo">
//                         <FaUser  className="fauser"/>
//                     </div>
//                     <div>{this.state.invalidCredentials?<h5 className="text-danger text-center">Wrong Credentials</h5>:null}</div>
//                     <div className="form-group">
//                         <small className="form-label">Email</small>
//                         <input type="email" className="form-control loginField" 
//                             placeholder="email" onChange={this.handleInput} name="email"/>
//                     </div>
//                     <div className="form-group">
//                         <small className="form-label">Password</small>
//                         <input type="password" className="form-control loginField" 
//                             placeholder="password" name="password" onChange={this.handleInput}/>
//                     </div>
//                     <div className="form-group">
//                         <div style={{display:'flex'}}>
//                             <input type="checkbox"/>
//                             <small className="form-label">Remember Me</small>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="login" onClick={this.login}>Login</h3>
//                     </div>
//                     <Link to="/register"><small className="forget">Sign up?</small></Link>
//                 </div>
//             </form>
//             </div>
//             </div>
//                 )
//     }
// }


// export default Login
//LOGIN ENDS

//HOME BEGINS
{/* <Container style={bodyStyle}>
                <Row>
                    <Col sm={6} style={{marginTop:'50px', textAlign:'center'}}>
                        <h2><b>Sender</b></h2>
                        <h5>Are you looking to hire professionals or artisans, permanent or contract job? Searching for jobs? This is a platform to connect employees and employers.</h5>
                        <div style={buttons} className="mt-4">
                            <Link to="/login"><button style={startedButton}>Login</button></Link>
                            <Link to="/register"><button style={helpButton}>Signup</button></Link>
                        </div>
                    </Col>   
                    <Col sm={6}>
                        <img src={employee} alt="aworan" heigh="100%" width="100%" style={imgStyle} className="mt-4"/>
                    </Col>
                </Row>
                </Container>

                <Container>
                <Row>
                    <Col sm={6}>
                        <div className="card p-4 mt-4 text-center" style={cardStyle}>
                            <h1><FaUsers /></h1>
                            <h5><b>Community</b></h5>
                            <hr style={hrStyle}></hr>
                            <h5>Navigate through a large community of potential employers and employees.</h5>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="card p-4 mt-4 text-center" style={cardStyle}>
                            <h1><FaAddressCard/></h1>
                            <h5><b>Profile</b></h5>
                            <hr style={hrStyle}></hr>
                            <h5>Offers comprehensive profile which enables potential employees know you better.</h5>
                        </div>
                    </Col>
                </Row>
                </Container> */}
//HOME ENDS