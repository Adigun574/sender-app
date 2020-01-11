import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import wallet from '../images/wallet.png';
import { FaBeer, FaAmazon} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Top from './Top.js'

class Home extends Component{
    render(){
        return (
            <div>
                <Top />
                <Container style={bodyStyle}>
                <Row>
                    <Col sm={6} style={{marginTop:'50px', textAlign:'center'}}>
                        <h2><b>Sender Application</b></h2>
                        <h5>Are you looking to hire professionals or artisans, permanent or contract job? This is a platform to connect employees and employers.</h5>
                        <div style={buttons} className="mt-4">
                            <Link to="/login"><button style={startedButton}>Login</button></Link>
                            <Link to="/register"><button style={helpButton}>Signup</button></Link>
                        </div>
                    </Col>   
                    <Col sm={6}>
                        <img src={wallet} alt="aworan" heigh="100%" width="100%" style={imgStyle} className="mt-4"/>
                    </Col>
                </Row>
                </Container>

                <Container>
                <Row>
                    <Col sm={6}>
                        <div className="card p-4 mt-4 text-center" style={cardStyle}>
                            <h1><FaBeer /></h1>
                            <h5><b>Easy To Use</b></h5>
                            <hr style={hrStyle}></hr>
                            <h5>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</h5>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="card p-4 mt-4 text-center" style={cardStyle}>
                            <h1><FaAmazon/></h1>
                            <h5><b>Easy To Use</b></h5>
                            <hr style={hrStyle}></hr>
                            <h5>Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.</h5>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }

}

const bodyStyle={
    // color:'#FD9309',
    // color:'#FD3909',
    color:'#6C63FF',
    height:'100%'
}
const startedButton={
    color:'white',
    // backgroundColor:'#FD3909',
    backgroundColor:'#6C63FF',
    borderRadius:'20px',
    border:'none',
    height:'40px',
    width:'150px',
    marginRight:'5px',
    cursor:'pointer'
}
const helpButton={
    //color:'#FD3909',
    color:'#6C63FF',
    backgroundColor:'white',
    borderRadius:'20px',
    // border:'1px solid #FD3909',
    border:'1px solid #6C63FF',
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
   
}

const hrStyle={
    // color:'#FD3909',
    color:'#6C63FF',
    width:'50%'
}

const cardStyle={
    boxShadow:'3px 3px 5px #CFCFCF, -3px -3px 5px #CFCFCF',
    // color:'#FD3909'
    color: '#6C63FF'
}


export default Home