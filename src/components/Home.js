import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import interview from '../images/interview.png';
import { FaUsers, FaAddressCard, FaMoneyBillWave, FaBriefcase} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/home.css';

class Home extends Component{
    render(){
        return (
            <div>
                <div>
                    <h3 className="top-head"><FaBriefcase/> JobIt</h3>
                </div>
                <div className="circle">                    
                </div>
                <Container>
                    <Row className="mt-4 top-info">
                    <Col sm={6} className="intro-text">
                    <h2 className="gray-color"><b>Hire or Get Hired</b></h2>
                    <h5 className="gray-color">Are you looking to hire professionals or artisans, permanent or contract job? Searching for jobs? This is a platform to connect employees and employers.</h5>
                    <div style={buttons} className="mt-4">
                        <Link to="/login"><button style={startedButton}>Login</button></Link>
                        <Link to="/register"><button style={helpButton}>Signup</button></Link>
                    </div>
                    </Col>
                    <Col sm={6}>
                        <img src={interview} alt="aworan" heigh="100%" width="100%" style={imgStyle} className="mt-4"/>
                    </Col>
                    </Row>
                </Container>
                <Container className="mt-3 mb-4" >
                <Row className="footer-bottom" style={{display:'flex',justifyContent:'center'}}>
                    <Col sm={4} className="bottom-card mt-2">
                        <div style={{display:'flex'}}>
                            <div>
                                <FaUsers className="bottom-icon mt-2"/>
                            </div>
                            <div>
                                <p className="mb-0"><b>Community</b></p>
                                <p className="mb-0">Navigate through a large community of potential employers and employees.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="bottom-card mt-2">
                        <div style={{display:'flex'}}>
                            <div>
                                <FaAddressCard className="bottom-icon mt-2"/>
                            </div>
                            <div>
                                <p className="mb-0"><b>Profile</b></p>
                                <p className="mb-0">Comprehensive profile which enables potential employees know you better.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="bottom-card mt-2">
                        <div style={{display:'flex'}}>
                            <div>
                                <FaMoneyBillWave className="bottom-icon mt-2"/>
                            </div>
                            <div>
                                <p className="mb-0"><b>Free</b></p>
                                <p className="mb-0">Free to use</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container>
                               
            </div>
        )
    }

}

const startedButton={
    color:'white',
    backgroundColor:'#6C63FF',
    borderRadius:'20px',
    border:'none',
    height:'40px',
    width:'150px',
    marginRight:'5px',
    cursor:'pointer'
}
const helpButton={
    color:'#6C63FF',
    backgroundColor:'white',
    borderRadius:'20px',
    border:'2px solid #6C63FF',
    height:'40px',
    width:'150px',
    cursor:'pointer'
}
const buttons={
    display:'flex',
    width:'300px',
    marginRight:'auto',
    marginLeft:'auto'
}
const imgStyle={
   borderRadius:'5px',
}

export default Home