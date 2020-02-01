import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Form, Toast } from 'react-bootstrap';
import '../css/Job.css';
import axios from 'axios';
import Loader from './Loader';

const user = JSON.parse(localStorage.getItem('senderUser'))
const d = new Date()
const [day,month,year] = [d.getDate(), d.getMonth()+1, d.getFullYear()]
const date = `${day}-${month}-${year}`

const PostJob = ()=>{
    const [showToast, setShowToast] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const [user, setUser] = useState(user)
    const [job, setJob] = useState({
            title:'',
            description:'',
            location:'',
            duration:'',
            pay:'',
            requirements:'',
            type:'',
            posterEmail:user.email,
            datePosted:date,
            employer:'',
            category:'Others'
    })
    const [jobs, setJobs] = useState([])
    const [bidding, setBidding] = useState({
            applicantEmail:user.email,
            jobId:null,
            status:'pending',
            applicant:null
    })
    const [show, setShow] = useState(false)
    const [showFail, setShowFail] = useState(false)
    const [incompleteDetails, setIncompleteDetails] = useState(false)
    const handleShowToast = ()=>{
        setShowToast(true)
    }
    const handleCloseToast = ()=>{
        setShowToast(false)
    }
    const handleJobTitle = (e)=>{
        setJob({...job, title:e})
    }
    const handleEmployer = (e)=>{
        setJob({...job, employer:e})
    }
    const handleJobDescription = (e)=>{
        setJob({...job, description:e})
    }
    const handleLocation = (e)=>{
        setJob({...job, location:e})
    }
    const handleDuration = (e)=>{
        setJob({...job, duration:e})
    }
    const handlePay = (e)=>{
        setJob({...job, pay:e})
    }
    const handleRequirements = (e)=>{
        setJob({...job, requirements:e.split(',')})
    }
    const handleCategory = (e)=>{
        setJob({...job, category:e})
    }
    const handleTypePartTime = (e)=>{
        if(e==='on'){
            setJob({...job, type:'Part Time'})
        }
    }
    const handleTypeFullTime = (e)=>{
        if(e==='on'){
            setJob({...job, type:'Full Time'})
        }
    }
    const postJob = () =>{
        if(job.title==='' | job.location==='' |job.employer===''){
            setIncompleteDetails(true)
        }
        else{
            setIncompleteDetails(false)
            setIsLoading(true)
            console.log(job)
            axios.post('http://localhost:5000/jobs/add',job)
            .then(res=>{
                console.log(res)
                setShow(true)
                setIsLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setShowFail(true)
                setIsLoading(false)
            })
        }

    }
    const getProfile = () =>{
        axios.post('http://localhost:5000/profiles/getone',{email:user.email})
        .then(res=>{
            setBidding({...bidding, applicant:res.data.msg})
        })
        .catch(err=>{
            console.log(err)
        })   
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/jobs/getall')
        .then(res=>{
        //    this.setState({jobs:res.data.data})
            setJobs(res.data.data)
        })
        .catch(err=>{
           console.log(err)
        })
        getProfile()
    },[])
    return (
        <div className="job-body">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="toaster">
                    <Toast.Header>
                        <strong className="mr-auto">Success!!!</strong>
                        <small></small>
                    </Toast.Header>
                    <Toast.Body>Congrats! Job posted successfully.</Toast.Body>
                </Toast>
                <Toast onClose={() => setShowFail(false)} show={showFail} delay={3000} autohide className="toaster">
                    <Toast.Header>
                        <strong className="mr-auto">Oops!!!</strong>
                        <small></small>
                    </Toast.Header>
                    <Toast.Body>Failed! Something went wrong.</Toast.Body>
                </Toast>
                    <h3 className="text-center mt-4"><b>Post A Job</b></h3>
                    <Container className="mt-4">
                        <Card className="p-4">
                        {incompleteDetails?<h5 className="text-danger">Please fill out mandatory fields</h5>:null}
                        <Form>
                            <Row>
                                <Col sm={6}>
                            <Form.Group controlId="formGridJt">
                                <Form.Label>Job Title<small className="text-danger"><b>*</b></small></Form.Label>
                                <Form.Control placeholder="Plumber" 
                                    onChange={(e)=>handleJobTitle(e.target.value)} value={job.title}/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmployer">
                                <Form.Label>Employer<small className="text-danger"><b>*</b></small></Form.Label>
                                <Form.Control placeholder="Employer" 
                                onChange={(e)=>handleEmployer(e.target.value)} value={job.employer}/>
                            </Form.Group>

                            <Form.Group controlId="formGridJd">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control placeholder="Looking for an experienced ........." 
                                onChange={(e)=>handleJobDescription(e.target.value)} value={job.description}/>
                            </Form.Group>

                            <Form.Group controlId="formGridCategory">
                                <Form.Label>Category</Form.Label><br></br>
                                <select className="form-control" onChange={(e)=>handleCategory(e.target.value)}>
                                    <option value="Agriculture, food and natural resources">Agriculture, Food and Natural Resources</option>
                                    <option value="Architecture and Construction">Architecture and Construction</option>
                                    <option value="Arts and Communications">Arts and Communications</option>
                                    <option value="Business Management and Administration">Business Management and Administration</option>
                                    <option value="Education and Training">Education and Training</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Government and Public Administration">Government and Public Administration</option>
                                    <option value="Health Science">Health Science</option>
                                    <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                                    <option value="Human Services">Human Services</option>
                                    <option value="Information Technology">Information Technology</option>
                                    <option value="Law, Public Safety, Corrections and Security">Law, Public Safety, Corrections and Security</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Marketing, Sales and Service">Marketing, Sales and Service</option>
                                    <option value="Science, Technology and Engineering">Science, Technology and Engineering</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Transportation, Distribution and Logistics">Transportation, Distribution and Logistics</option>
                                    <option value="Others">Others</option>
                                </select>
                            </Form.Group>
                                </Col>

                                <Col sm={6}>
                            <Form.Group controlId="formGridSell">
                                <Form.Label>Location<small className="text-danger"><b>*</b></small></Form.Label>
                                <Form.Control placeholder="Lekki, Lagos State" 
                                onChange={(e)=>handleLocation(e.target.value)} value={job.location}/>
                            </Form.Group>

                            <Form.Group controlId="formGridDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control placeholder="2 months" 
                                onChange={(e)=>handleDuration(e.target.value)} value={job.duration}/>
                            </Form.Group>

                            <Form.Group controlId="formGridPay">
                                <Form.Label>Pay(Range/Optional)</Form.Label>
                                <Form.Control placeholder="N20000 - N30000" 
                                onChange={(e)=>handlePay(e.target.value)} value={job.pay}/>
                            </Form.Group>

                            <Form.Group controlId="formGridSkills">
                                <Form.Label>Requirements (comma separated)</Form.Label>
                                <Form.Control placeholder="javascript, plumbing, graphics design" 
                                onChange={(e)=>handleRequirements(e.target.value)} value={job.requirements}/>
                            </Form.Group>
                                </Col>
                            <Form.Group id="formGridCheckbox" style={{display:'flex'}} className="ml-4">
                                <Form.Check type="radio" label="Part Time" name="Type" className="mr-4" onChange={(e)=>handleTypePartTime(e.target.value)}/>
                                <Form.Check type="radio" label="Full Time" name="Type" onChange={(e)=>handleTypeFullTime(e.target.value)}/>
                            </Form.Group>
                            </Row>
                        </Form>
                        {isLoading?<Loader/>:null}
                        <Button variant="primary" className="post-job-button" onClick={()=>postJob()} type="submit">Post</Button>
                        </Card>
                        </Container>

            </div>
                )
}



export default PostJob