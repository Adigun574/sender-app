import React, { Component } from 'react';
import { Card, Container, Col, Row, Modal, Button, Toast } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import avatar from '../images/avatar.png';
import axios from 'axios';
import '../css/application.css';
import { FaMapMarkerAlt, FaCheck, FaTimes, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import FullpageLoader from './FullpageLoader.js';
import Loader from './Loader';

const user = JSON.parse(localStorage.getItem('senderUser'))


class Application extends Component{
    state={
        jobs:[],
        applications:[],
        currentApplication:null,
        applicantsApplication:[],
        showMessageModal:false,
        postingMessageLoading:false,
        showToaster:false,
        showToasterFail:false
    }
    handleAccept = (e)=>{
        e.status='accepted'
        console.log(e)
        axios.post(`http://localhost:5000/applications/updateapplication`,e)
        .then(res3=>{
            console.log(res3)
            this.handleShowToaster()
        })
        .catch(err3=>{
            console.log(err3)
            this.handleShowToasterFail()
        })
    }
    handleDecline = (e)=>{
        e.status='declined'
        console.log(e)
        axios.post(`http://localhost:5000/applications/updateapplication`,e)
        .then(res3=>console.log(res3))
        .catch(err3=>console.log(err3))
    }
    closeMessageModal = ()=>{
        this.setState({showMessageModal:false})
    }
    sendMessage = ()=>{
        this.setState({showMessageModal:true})
    }
    postMessage = ()=>{
        this.setState({showMessageModal:false})
        this.setState({postingMessageLoading:true})
    }
    handleShowToaster =()=>{
        this.setState({showToaster:true})
    }
    handleShowToasterFail =()=>{
        this.setState({showToasterFail:true})
    }
    handleCloseToaster =()=>{
        this.setState({showToaster:false})
    }
    handleCloseToasterFail =()=>{
        this.setState({showToasterFail:false})
    }
    viewProfile = (e)=>{
        console.log(e)
        localStorage.setItem('profileEmail',e)
        this.props.history.push(`visitprofile/${e}`)
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/jobs/getjobbyposteremail/${user.email}`)
        .then(res=>{
            this.setState({jobs:res.data.data}, this.getApplications)
        })
        .catch(err=>{
            console.log(err)
        })
        this.getApplicantsApplication()
    }
    getApplications = ()=>{
        this.state.jobs.forEach((job,index)=>{
            axios.get(`http://localhost:5000/applications/getbyjobid/${job._id}`)
            .then(res2=>{
                this.setState({ applications: [...this.state.applications, res2.data.data] })
            })
            .catch(err=>{
                console.log(err)
            })
        })
    }
    test = ()=>{
        console.log(this.state.applications)
        console.log(this.state.applicantsApplication)
    }
    getUserByEmail = (email)=>{
        axios.get(`http://localhost:5000/users/getuserbyemail/test2@gmail.com`)
        .then(res=>{
            return res.data.data,
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    getApplicantsApplication = () =>{
        axios.get(`http://localhost:5000/applications/getapplicationbyapplicantemail/${user.email}`)
        .then(res=>{
            //this.setState({jobs:res.data.data})
            this.setState({applicantsApplication:res.data.data},console.log(this.state.applicantsApplication))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
        <div>
            <Toast onClose={this.handleCloseToaster} show={this.state.showToaster} delay={3000} autohide className="toaster">
                <Toast.Header>
                    <strong className="mr-auto">Success!!!</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Done, send a message</Toast.Body>
            </Toast>
            <Toast onClose={this.handleCloseToasterFail} show={this.state.showToasterFail} delay={3000} autohide className="toaster">
                <Toast.Header>
                    <strong className="mr-auto">Oops!!!</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Failed! Something went wrong.</Toast.Body>
            </Toast>
            {this.state.applicantsApplication?
            <div>
                <div className="mt-2">
                    <h2 className="application-header">Applications</h2>
                </div>
                {this.state.jobs.length>0?
                <Container>
                <div className="mt-4">
                    {this.state.jobs.map((job,index)=>{
                    return (<Card key={job._id} className="mb-4">
                            <div>
                            <div className="job-title mb-4 text-center">{job.title}</div>
                            <Row>
                            {this.state.applications[index] && this.state.applications[index].length>0 ? this.state.applications[index].map(application=>{
                                return (
                                    <Col sm={4} key={application._id}>
                                        <Card className="pt-2 pb-2 application-card-body mb-4">
                                        <div className="application-body">
                                            <div className="application-click-profile" onClick={()=>{this.viewProfile(application.applicant.email)}}>
                                                <div className="image-name">
                                                    <img src={avatar} height="70px" width="70px" alt='' className="image"/>  
                                                    <div className="application-name">
                                                        <h6>{application.applicant.firstName} {application.applicant.lastName}</h6>
                                                        <h6><FaMapMarkerAlt/> {application.applicant.location}</h6>
                                                    </div>
                                                </div>
                                                <h6>{application.applicant.email}</h6>
                                                <h6>{application.applicant.phone}</h6>
                                                <ul>{application.applicant.skills.map(skill=>{
                                                    return <li key={skill} style={{listStyleType:'disc', display:'inline-block'}}><b>*</b>{skill} </li>
                                                })}</ul>
                                            </div>
                                            <div style={{display:'flex',justifyContent:'center'}}>
                                                <button className="btn btn-primary mr-2" onClick={()=>{this.handleAccept(application)}}><FaCheck/></button>
                                                <button className="btn btn-danger mr-2" onClick={()=>{this.handleDecline(application)}}><FaTimes/></button>
                                                <button className="btn btn-info" onClick={this.sendMessage}><FaEnvelope/></button>
                                            </div>
                                        </div>
                                        </Card>
                                    </Col>
                                )
                            })
                            :<div className="no-application p-4">
                                <h3 className="text-muted">No Applications for this job yet!!!</h3>
                            </div>}                            
                            </Row>
                            </div>
                            </Card>
                            )
                    })}
                </div>
                </Container>  
                :<div className="mt-4"><h3 className="text-muted text-center mt-4">You haven't posted any job!!!</h3></div>}
            </div>  
            :<FullpageLoader/>}
            <Modal show={this.state.showMessageModal} onHide={this.closeMessageModal}>
                <Modal.Header closeButton>
                <Modal.Title><FaEnvelopeOpen/> Send Message To applicant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea cols="40" rows="5" className="message-box"></textarea>
                </Modal.Body>
                <Modal.Footer>
                {this.state.postingMessageLoading?<Loader/>:null}
                <Button variant="primary" onClick={this.postMessage}>
                    Send
                </Button>
                </Modal.Footer>
            </Modal>

        </div>                 
                )
    }

}


export default withRouter(Application)




////FUNCTIONAL COMPONENT
// const Application = ()=>{
//     const [jobs, setJobs] = useState([])
//     const [applications, setApplications] = useState([])
//     const handleAccept = (e)=>{
//         console.log(e)
//     }
//     const handleDecline = (e)=>{
//         console.log(e)
//     }
//     const getJobs = ()=> {axios.get(`http://localhost:5000/jobs/getjobbyposteremail/${user.email}`)
//             .then(res=>{
//                 //setJobs(res.data.data) 
//                 let myFirstPromise = new Promise((resolve, reject) => {
//                     // setTimeout( function() {
//                     // resolve("Success!")
//                     // }, 250) 
//                     //setJobs(res.data.data)
//                     let settingJob = async ()=>{
//                         await setJobs(res.data.dat)
//                         resolve('success')
//                     }                    
//                 })             
//             })
//             .catch(err=>{
//                 console.log(err)
//             })
//             return myFirstPromise
//         }
//     useEffect(()=>{
//         getJobs().then(res3=>getApplications)
//         // let myFirstPromise = new Promise((resolve, reject) => {
//         //     setTimeout( function() {
//         //       resolve("Success!")
//         //     }, 250) 
//         //   }) 
//     },[])
//     // useEffect(()=>{
//     //     getApplications()
//     // },[jobs])
//     const getApplications = ()=>{
//         jobs.forEach((job,index)=>{
//             axios.get(`http://localhost:5000/applications/getbyjobid/${job._id}`)
//             .then(res2=>{
//                 //this.setState({ applications: [...this.state.applications, res2.data.data] })
//                 setApplications(...applications,res2.data.data)
//                 //console.log(res2)
//             })
//             .catch(err=>{
//                 console.log(err)
//             })
//         })
//     }
//     const test = ()=>{
//         console.log("jobs",jobs)
//         console.log("applications",applications)
//     }

//     return (
//         <div>
//             <button onClick={()=>test()}>test</button>
//             <Container>
//             <div className="mt-4">
//                 {jobs.map((job,index)=>{
//                 return (<Card key={job._id} className="mb-4">
//                         <div>
//                         <div className="job-title mb-4 text-center">{job.title}</div>
//                         <Col>
//                         {/* {applications[index] ? applications[index].map(application=>{
//                             return <div key={application._id}>
//                                 <Col sm={6}>
//                                     <Card className="p-2">
//                                     <div className="image-name">
//                                         <img src={avatar} height="70px" width="70px" alt='' className="image"/>  
//                                         <div className="application-name">
//                                             <h6>{application.applicant.firstName} {application.applicant.lastName}</h6>
//                                             <h6><FaMapMarkerAlt/> {application.applicant.location}</h6>
//                                         </div>
//                                     </div>
//                                     <h6>{application.applicant.email}</h6>
//                                     <h6>{application.applicant.phone}</h6>
//                                     <ul>{application.applicant.skills.map(skill=>{
//                                         return <li key={skill} style={{listStyleType:'disc', display:'inline-block'}}>{skill} </li>
//                                     })}</ul>
//                                     <div style={{display:'flex'}}>
//                                         <button className="btn btn-primary" onClick={()=>{this.handleAccept(application)}}>Accept</button>
//                                         <button className="btn btn-danger" onClick={()=>{this.handleDecline(application)}}>Decline</button>
//                                     </div>
//                                     </Card>
//                                 </Col>
//                             </div>
//                         })
//                         :'null'}                             */}
//                         </Col>
//                         </div>
//                         </Card>
//                         )
//                 })}
//             </div>
//             </Container>               
//         </div>                   
//             )
// }


