import React, { Component } from 'react';
import { FaEnvelope } from 'react-icons/fa';

class Top extends Component{
    render(){
        return (
            <div>
                <h3 style={heading}><FaEnvelope/> Sender</h3>
            </div>
                )
    }

}

const heading={
    backgroundColor:'#6C63FF',
    color:'white',
    padding:'10px',
    marginBottom:'0'
}

export default Top