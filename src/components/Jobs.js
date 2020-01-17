import React, { Component } from 'react';
import { FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { Tabs, Tab, Card, Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import '../css/Job.css'
import axios from 'axios'

const user = JSON.parse(localStorage.getItem('senderUser'))
const d = new Date()
const [day,month,year] = [d.getDate(), d.getMonth()+1, d.getFullYear()]
console.log(day,month,year)

class Jobs extends Component{
    state = {
        showModal:false,
        showToast:false,
        user:user,
        job:{
            title:'',
            description:'',
            location:'',
            duration:'',
            pay:'',
            requirements:'',
            type:'',
            posterEmail:user.email,
            datePosted:'',
            employer:''
        },
        jobs:[],
        currentJob:{},
        bidding:{
            applicantEmail:user.email,
            jobId:null,
            status:'pending'
        },
        jobid:''
    }
    handleShowToast = ()=>{
        this.setState({
            showToast:true
        })
        setTimeout(this.handleCloseToast,3000)
    }
    handleCloseToast = ()=>{
        this.setState({
            showToast:false
        })
    }
    handleShowModal = (e) =>{
        this.setState({
            showModal:true
        })
        this.setState({currentJob:e})
    }
    handleCloseModal = () =>{
        this.setState({
            showModal:false
        })
    }
    handleJobTitle = (e) =>{
        let job = {...this.state.job}
        job.title = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleEmployer = (e) =>{
        let job = {...this.state.job}
        job.employer = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleJobDescription = (e) =>{
        let job = {...this.state.job}
        job.description = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleLocation = (e) =>{
        let job = {...this.state.job}
        job.location = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleDuration = (e) =>{
        let job = {...this.state.job}
        job.duration = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handlePay = (e) =>{
        let job = {...this.state.job}
        job.pay = e.target.value
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleRequirements = (e) =>{
        let job = {...this.state.job}
        job.requirements = e.target.value.split(',')
        this.setState({job:e.target.value})
        this.setState({job})
    }
    handleBidJob = (e) =>{
        let bidding = {...this.state.bidding}
        bidding.jobId = e
        this.setState({bidding:e})
        this.setState({bidding},this.postBidding)
    }
    postBidding = () =>{
        console.log(this.state.bidding)
        axios.post('http://localhost:5000/applications/add',this.state.bidding)
        .then(res=>{
            console.log(res)
            this.handleCloseModal()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    postJob = () =>{
        console.log(this.state.job)
        axios.post('http://localhost:5000/jobs/add',this.state.job)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    componentDidMount(){
       axios.get('http://localhost:5000/jobs/getall')
       .then(res=>{
           this.setState({jobs:res.data.data})
       })
       .catch(err=>{
           console.log(err)
       })
    }
    render(){
        const { job } = this.state
        return (
            <div>
                {/* <Row>
                    <Col xs={6} style={{position:'absolute'}}>
                        <Toast show={this.state.showToast} delay={3000} autohide>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                            />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                </Row> */}
                <Tabs defaultActiveKey="View Jobs" id="uncontrolled-tab-example" className="mt-2">
                    <Tab eventKey="View Jobs" title="View Jobs">
                    <Container>
                        <Row>
                            {this.state.jobs.map(job=>{
                                return  <Col sm={6} key={job._id}>
                                            <Card className="text-center mt-4">
                                                <Card.Header className="job-header"><FaBriefcase/> <b>{job.title}</b></Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{job.employer}</Card.Title>
                                                    <Card.Text>
                                                    {job.description}
                                                    </Card.Text><br/>
                                                    <i><FaMapMarkerAlt style={{color:'#6C63FF'}}/> {job.location} ({job.pay} | Full Time)</i><br/>
                                                    <Button variant="primary" onClick={()=>this.handleShowModal(job)}>View Details</Button>
                                                </Card.Body>
                                                <Card.Footer className="text-muted"><FaClock/> 2 days ago</Card.Footer>
                                            </Card>
                                        </Col>
                            })}
                        </Row>
                    </Container>
                    </Tab>
                    <Tab eventKey="Post Job" title="Post Jobs">
                        <Container className="mt-4">
                        <div className="card post-title">POST A JOB</div>
                        <Card className="p-4">
                        <Form>
                            <Form.Group controlId="formGridJt">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control placeholder="Plumber" 
                                    onChange={this.handleJobTitle} value={job.title}/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmployer">
                                <Form.Label>Employer</Form.Label>
                                <Form.Control placeholder="Employer" 
                                onChange={this.handleEmployer} value={job.employer}/>
                            </Form.Group>

                            <Form.Group controlId="formGridJd">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control placeholder="Looking for an experienced ........." 
                                onChange={this.handleJobDescription} value={job.description}/>
                            </Form.Group>

                            <Form.Group controlId="formGridSell">
                                <Form.Label>Location</Form.Label>
                                <Form.Control placeholder="Lekki, Lagos State" 
                                onChange={this.handleLocation} value={job.location}/>
                            </Form.Group>

                            <Form.Group controlId="formGridDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control placeholder="2 months" 
                                onChange={this.handleDuration} value={job.duration}/>
                            </Form.Group>

                            <Form.Group controlId="formGridPay">
                                <Form.Label>Pay(Range/Optional)</Form.Label>
                                <Form.Control placeholder="N20000 - N30000" 
                                onChange={this.handlePay} value={job.pay}/>
                            </Form.Group>

                            <Form.Group controlId="formGridSkills">
                                <Form.Label>Requirements (comma separated)</Form.Label>
                                <Form.Control placeholder="javascript, plumbing, graphics design" 
                                onChange={this.handleRequirements} value={job.requirements}/>
                            </Form.Group>
                            <Form.Group id="formGridCheckbox" style={{display:'flex'}}>
                                <Form.Check type="radio" label="Part Time" name="Type" className="mr-4"/>
                                <Form.Check type="radio" label="Full Time" name="Type"/>
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={this.postJob}>Post Job</Button>
                        </Card>
                        </Container>
                    </Tab>
                </Tabs>

                        <Modal show={this.state.showModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>{this.state.currentJob.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <b>Employer: </b>{this.state.currentJob.employer}<br/>
                                <b>Description: </b>{this.state.currentJob.description}<br/>
                                <b>Requirements: </b>
                                {/* <ul>
                                    {this.state.currentJob.requirements.map(req=>{
                                        return req
                                    })}
                                </ul> */}
                                {this.state.currentJob.requirements}<br/>
                                <b>Location: </b>{this.state.currentJob.location}<br/>
                                <b>Duration: </b>{this.state.currentJob.duration}<br/>
                                <b>Pay: </b>{this.state.currentJob.pay}<br/>
                                <b>Type: </b>{this.state.currentJob.type}<br/>
                                <b>Date Posted: </b>{this.state.currentJob.datePosted}<br/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={()=>{this.handleBidJob(this.state.currentJob._id)}}>
                                Bid For Job
                            </Button>
                            </Modal.Footer>
                        </Modal>


            </div>
                )
    }

}


export default Jobs