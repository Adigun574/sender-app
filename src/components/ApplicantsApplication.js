import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import '../css/application.css';
import FullpageLoader from './FullpageLoader.js';

const user = JSON.parse(localStorage.getItem('senderUser'))

class ApplicantsApplication extends Component{
    goToJobs = ()=>{
        this.props.history.push('/jobs')
    }
    state={
        // applicantsApplication:[]
        applicantsApplication:null
    }
    
    componentDidMount(){
        this.getApplicantsApplication()
    }
    test = ()=>{
        console.log(this.state.applicantsApplication)
    }
    getApplicantsApplication = () =>{
        axios.get(`http://localhost:5000/applications/getapplicationbyapplicantemail/${user.email}`)
        .then(res=>{
            this.setState({applicantsApplication:res.data.data},console.log(this.state.applicantsApplication))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render(){
        return (
        <div>
            {this.state.applicantsApplication?
            <div>
                <div>
                    <h2 className="mt-2" style={applicantHeader}>Applied Jobs</h2>   
                </div>
                <Container>
                    {this.state.applicantsApplication.length>0 ?
                    <div></div>:
                    <div style={noApplication}>
                        <h3 className="text-muted">You have no job applications yet!!!</h3>
                        <button className="btn" style={jobButton} onClick={this.goToJobs}>Go to Jobs</button>
                    </div>}
                <Row>
                {this.state.applicantsApplication.map(app=>{
                    return(                     
                    <Col sm={6} key={app._id} className="mt-4">
                        <Card className="job-card pt-2">
                            <div style={{display:'flex'}}>
                                <div className="card-employer ml-2 mr-4" style={statusStyle}>
                                    {status(app.status)}
                                </div>
                                <div>
                                    <p>{app.applicant.firstName}</p>
                                    <b>{app.jobId}</b><br></br>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    )
                })}  
                </Row>
                </Container> 
                }     
            </div> 
            :<FullpageLoader/>}
        </div>                  
                )
    }

}

const pendingStyle = {
    color:'white',
    backgroundColor:'orange',
    padding:'2px',
    borderRadius:'5px',
    textAlign:'center'
}
const acceptedStyle = {
    color:'white',
    backgroundColor:'green',
    padding:'2px',
    borderRadius:'5px',
    textAlign:'center'
}
const declinedStyle = {
    color:'white',
    backgroundColor:'rgb(207, 9, 9)',
    padding:'2px',
    borderRadius:'5px',
    textAlign:'center'
}
const statusStyle = {
    // transform: 'rotate(-45deg)',
    fontSize:'12px'
}

const applicantHeader = {
    textAlign:'center',
    color:'#6C63FF'
}
const jobButton = {
    backgroundColor:'#6C63FF',
    color:'white',
    left: '50%',
    transform: 'translateY(-50%)',
}
const noApplication = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign:'center'

}

const status = (stat)=>{
    if(stat==='pending'){
        return <p style={pendingStyle}>{stat}</p>
    }
    else if(stat==='accepted'){
        return <p style={acceptedStyle}>{stat}</p>
    }
    else if(stat==='declined'){
        return <p style={declinedStyle}>{stat}</p>
    }
}


export default ApplicantsApplication
