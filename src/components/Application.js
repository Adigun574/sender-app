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
        applications:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/jobs/getjobbyposteremail/${user.email}`)
        .then(res=>{
            //console.log(res)
            this.setState({jobs:res.data.data}, this.getApplications)
        })
        .catch(err=>{
            console.log(err)
        })
        //this.getUserByEmail()
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
    }
    // getUserByEmail = (email)=>{
    //     axios.get(`http://localhost:5000/users/getuserbyemail/test2@gmail.com`)
    //     .then(res=>{
    //         return res.data.data,
    //         console.log(res)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // }
    render(){
        return (
            <div>
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
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-danger">Decline</button>
                                        </div>
                                        </Card>
                                    </Col>
                                </div>
                            })
                            :'null'}                            
                            </Col>
                            </div>
                            </Card>
                            )
                    })}
                </div>
                </Container>               
            </div>                   
                )
    }

}


export default Application

