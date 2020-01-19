import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Top = ()=>{
    return(
        <div>
            <h3 style={heading}><FaBriefcase/> JobIt</h3>
        </div>
    )
}

const heading={
    backgroundColor:'#eee',
    color:'#6C63FF',
    padding:'10px',
    marginBottom:'0'
}

export default Top