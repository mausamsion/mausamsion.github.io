import React from 'react';
import '../App.css';

const footer = {
    backgroundColor: 'transparent',
    marginTop: '2rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    borderTop: '0.01rem solid #bbbbbb'
    // fontFamily: 'Seravek'
}

function Footer() {
    return (
        <div className='text-center' style={footer}>
            Copyright © 2025. Mausam Jain. All Rights Reserved.
        </div>
    )
}

export default Footer