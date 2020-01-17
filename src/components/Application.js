import React, { Component } from 'react';
import { Tab, Card, Container, Row, Col, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';
import axios from 'axios'

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
        this.getUserByEmail()
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
    render(){
        return (
            <div>
                <button onClick={this.test}>test</button>
                <Container>
                <div className="mt-4">
                    {this.state.jobs.map((job,index)=>{
                    return (<div key={job._id}>
                            <div>{job.title}</div>
                            <Col>
                            {this.state.applications[index] ? this.state.applications[index].map(application=>{
                                return <div key={application._id}>
                                    <Col sm={6}>
                                        <Card>
                                        <img src={avatar} height="50px" width="50px" alt=''/>  
                                        <h5>{application._id}</h5>
                                        <h6>{application._jobId}</h6>
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
                            )
                    })}
                </div>
                </Container>               
            </div>                   
                )
    }

}


export default Application

