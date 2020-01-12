import React from "react";
import "../css/SideNav.css";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard  from './Dashboard';
import Profile from './Profile';
import Jobs from './Jobs';
import Application from './Application';
import { FaEnvelope, FaUser, FaHome, FaAlignJustify, FaArchive, FaBriefcase } from 'react-icons/fa'

class SideNav extends React.Component {
  state = {
    state: {
      showNav: false
    },
    user:null
  }
  

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  componentDidMount(){
    this.setState({user:JSON.parse(localStorage.getItem('senderUser'))})
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }

    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () => <h2>Dashboard</h2>
      },
      {
        path: "/dashboard",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Dashboard />
      },
      {
        path: "/sidenav",
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () => <Dashboard />
      },
      {
        path: "/profile",
        sidebar: () => <div></div>,
        main: () => <Profile />
      },
      {
        path: "/jobs",
        sidebar: () => <div></div>,
        main: () => <Jobs />
      },
      {
        path: "/application",
        sidebar: () => <div></div>,
        main: () => <Application />
      }
    ];

    return (
      <React.Fragment>
        <Router>
          <div className="menuBar">
            <span onClick={this.openNavClick} className="open-nav">
              &#9776; <FaEnvelope/> Sender
            </span>
            <span style={{float:'right', position:'relative', top:'15px', right:'10px'}}><FaUser/> 
            {this.state.user? this.state.user.userName:''}</span>
          </div>
        <div
          onClick={this.navCoverClick}
          className="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="#a" onClick={this.closeNavClick} className="close-nav">
            &times;
          </a>
          <Link to={`/dashboard`} onClick={this.closeNav} className="nav-link"><FaAlignJustify /> Dashboard</Link>
          <Link to={`/profile`} onClick={this.closeNav} className="nav-link"><FaUser /> Profile</Link>
          <Link to={'/jobs'} onClick={this.closeNav} className="nav-link"><FaBriefcase /> Jobs</Link>
          <Link to={`/application`} onClick={this.closeNav} className="nav-link"><FaArchive /> Applications</Link>
          <Link to={'/'} onClick={this.closeNav} className="nav-link"><FaHome /> Home</Link>
        </div>
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
      </Router>
      </React.Fragment>
    )
  }
}

export default SideNav