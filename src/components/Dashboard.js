import React, { Component } from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
//import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import avatar from '../images/avatar.png';
import '../css/Dashboard.css';

class Dashboard extends Component{
    state = {
        user:null
    }
    goToJobs = ()=>{
        this.props.history.push('/jobs')
    }
    componentDidMount(){
        this.setState({user:JSON.parse(localStorage.getItem('senderUser'))})
    }
    render(){
        return (
            <div>
                <Container>
                    <div className="dashboard-top mt-4">
                        <div className="mr-4">
                            <img src={avatar} height="100px" width="100px" className="image" alt=''/>
                        </div>
                        <div>
                            <h5><b>Welcome {this.state.user?this.state.user.userName:''}</b></h5>
                            <p>Explore the jobs page where you can hire or be hired.</p>
                            <button className="btn job-button" onClick={this.goToJobs}>Go to Jobs</button>
                        </div>
                    </div>
                    <Row className="mt-4">
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                                <h5 className="pt-2 pb-2 mb-2 caption"><b>Jobs posted</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                            <h5 className="pt-2 pb-2 mb-2 caption"><b>Jobs applied for</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                            <h5 className="pt-2 pb-2 mb-2 caption"><b>Jobs approved</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                            <h5 className="pt-2 pb-2 mb-2 caption"><b>Jobs declined</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                            <h5 className="pt-2 pb-2 mb-2 caption"><b>Messages</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        
                        <Col sm={4}>
                            <Card className="text-center mt-4 job-card">
                            <h5 className="pt-2 pb-2 mb-2 caption"><b>Applications</b></h5><br/>
                                <h1 className="mb-4"><b className="number">10</b></h1>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>             
            </div>
                )
    }

}


export default withRouter(Dashboard)