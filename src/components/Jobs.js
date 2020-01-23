import React, { useState, useEffect } from 'react';
import { FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { Tabs, Tab, Card, Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import '../css/Job.css';
import axios from 'axios';
import Loader from './Loader';

const user = JSON.parse(localStorage.getItem('senderUser'))
const d = new Date()
const [day,month,year] = [d.getDate(), d.getMonth()+1, d.getFullYear()]
const date = `${day}-${month}-${year}`

const Jobs = ()=>{
    const [showModal, setShowModal] = useState(false)
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
            category:''
    })
    const [jobs, setJobs] = useState([])
    const [currentJob, setCurrentJob] = useState({})
    const [bidding, setBidding] = useState({
            applicantEmail:user.email,
            jobId:null,
            status:'pending',
            applicant:null
    })
    const [jobId, setJobId] = useState('')
    const handleShowToast = ()=>{
        setShowToast(true)
    }
    const handleCloseToast = ()=>{
        setShowToast(false)
    }
    const handleShowModal = (e)=>{
        setShowModal(true) 
        setCurrentJob(e)
        setBidding({...bidding, jobId:e._id})
    }
    const handleCloseModal = (e)=>{
        setShowModal(false)
    }
    
    const handleBidJob = (e)=>{
        //setBidding({...bidding, jobId:e})
        postBidding()
            // const promise1 = new Promise((resolve, reject)=> {
            //     setBidding({...bidding, jobId:e}) = () => {resolve('abc')}
            //     // resolve(setBidding({...bidding, jobId:e}))
            //   });
              
            //   promise1.then((value)=> {
            //     // console.log(value)
            //     postBidding()
            //   });
    }
    const postBidding = () =>{
        console.log(bidding)
        
            // axios.post('http://localhost:5000/applications/add',bidding)
            // .then(res=>{
            //     console.log(res)
            //     this.handleCloseModal()
            // })
            // .catch(err=>{
            //     console.log(err)
            // })        
        
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
            <div className="form-group">
                <select className="form-control mt-4 select-category">
                    <option>All Categories</option>
                    <option>Architecture</option>
                    <option>Banking</option>
                </select>
            </div>
                    <Container>
                        <Row>
                            {jobs.map(job=>{
                                return <Col sm={6} key={job._id} className="mt-4">
                                <Card className="job-card pt-2" onClick={()=>handleShowModal(job)}>
                                        <div style={{display:'flex'}}>
                                            <div className="card-employer ml-2 mr-4">
                                                {job.employer}<br></br>
                                                <button className="btn btn-sm btn-primary" onClick={()=>handleShowModal(job)}>Apply</button>
                                            </div>
                                            <div>
                                                <b>{job.title}</b><br></br>
                                                <div className="card-job-title">{job.description.split('').length>14?
                                                    `${job.description.split('').splice(0,40).join('')} ...`:
                                                    job.description}<br/><br/>
                                                </div>
                                                <i className="text-muted"><FaMapMarkerAlt styl={{color:'#6C63FF'}}/> {job.location} ({job.pay})</i><br/>
                                                <div className="text-muted"><FaClock/> 17-1-2020 | Full Time</div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            })}
                        </Row>
                    </Container>

                        <Modal show={showModal} onHide={()=>handleCloseModal()}>
                            <Modal.Header closeButton>
                            <Modal.Title>{currentJob.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <b>Employer: </b>{currentJob.employer}<br/>
                                <b>Description: </b>{currentJob.description}<br/>
                                <b>Requirements: </b>
                                <ul>
                                    {currentJob.requirements?currentJob.requirements.map(req=>{
                                        return <li key={req} style={{listStyleType:'disc'}}>{req}</li>
                                    }):'nil'}
                                </ul>
                                <b>Location: </b>{currentJob.location}<br/>
                                <b>Duration: </b>{currentJob.duration}<br/>
                                <b>Pay: </b>{currentJob.pay}<br/>
                                <b>Type: </b>{currentJob.type}<br/>
                                <b>Date Posted: </b>{currentJob.datePosted}<br/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" onClick={()=>{handleBidJob(currentJob._id)}}>
                                Apply
                            </Button>
                            </Modal.Footer>
                        </Modal>


            </div>
                )
}



export default Jobs