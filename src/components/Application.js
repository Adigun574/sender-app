import React, { Component } from 'react';
import { Card, Container, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';
import axios from 'axios'
import '../css/application.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const user = JSON.parse(localStorage.getItem('senderUser'))


class Application extends Component{
    state={
        jobs:[],
        applications:[],
        currentApplication:null,
        applicantsApplication:[]
    }
    handleAccept = (e)=>{
        e.status='accepted'
        console.log(e)
        axios.post(`http://localhost:5000/applications/updateapplication`,e)
        .then(res3=>console.log(res3))
        .catch(err3=>console.log(err3))
    }
    handleDecline = (e)=>{
        e.status='declined'
        console.log(e)
        axios.post(`http://localhost:5000/applications/updateapplication`,e)
        .then(res3=>console.log(res3))
        .catch(err3=>console.log(err3))
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
                <h2>Posted Jobs</h2>
                <button onClick={this.test}>test</button>
                <Container>
                <div className="mt-4">
                    {this.state.jobs.map((job,index)=>{
                    return (<Card key={job._id} className="mb-4">
                            <div>
                            <div className="job-title mb-4 text-center">{job.title}</div>
                            <Col>
                            {this.state.applications[index] ? this.state.applications[index].map(application=>{
                                return <div key={application._id}>
                                    <Col sm={6}>
                                        <Card className="p-2">
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
                                            return <li key={skill} style={{listStyleType:'disc', display:'inline-block'}}>{skill} </li>
                                        })}</ul>
                                        <div style={{display:'flex'}}>
                                            <button className="btn btn-primary" onClick={()=>{this.handleAccept(application)}}>Accept</button>
                                            <button className="btn btn-danger" onClick={()=>{this.handleDecline(application)}}>Decline</button>
                                        </div>
                                        </Card>
                                    </Col>
                                </div>
                            })
                            :<h3>no job</h3>}                            
                            </Col>
                            </div>
                            </Card>
                            )
                    })}
                </div>
                </Container>    
                <h2>Applied Jobs</h2>   
                <Container>
                {this.state.applicantsApplication.map(app=>{
                    return <Col sm={6} key={app._id} className="mt-4">
                    <Card className="job-card pt-2">
                            <div style={{display:'flex'}}>
                                <div className="card-employer ml-2 mr-4">
                                    {app.applicant.firstName}<br></br>
                                </div>
                                <div>
                                    <b>{app.jobId}</b><br></br>
                                    <p>{app.status}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                })}  
                </Container>      
            </div>                   
                )
    }

}


export default Application




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


