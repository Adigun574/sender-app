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
    backgroundColor:'#6C63FF',
    color:'#eee',
    padding:'10px',
    marginBottom:'0'
}

export default Top