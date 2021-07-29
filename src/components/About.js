import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

import lin from '../media/linkedin.png'
import twi from '../media/twitter.png'
import git from '../media/github.png'
import med from '../media/medium.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import Header from './Header.js'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    // fontFamily: 'Seravek'
}

const socialStyle = {
    width:'1.8rem', 
    height:'1.9rem',
    marginRight:'3rem',
    opacity:'0.75'
}

function About() {
    useEffect(() => {
        ReactDOM.render(
            <Header activenav='about' />, 
            document.getElementById('global')
        )
    })

    return (
        <Jumbotron style={jumboStyle}>
            I am a Research Scientist at Rakuten Institute of Technology, Rakuten Inc. 🙂 
            My current work is on finding business solutions for Speech Processing problems like emotion 
            recognition, speech source separation and speech-to-text. Previously, 
            I have worked on forecasting of stocks and bonds for financial trading.
            <br/><br/>
            I try to keep up with the overwhelming progress in the machine 
            learning 😨 OW irregularly read (auto)biographies and science or regularly play computer games 🙃.
            <p style={{marginTop:'3rem'}} className='text-center'>
                <a href='https://www.linkedin.com/in/mausamsion/'><Image src={lin} style={socialStyle} /></a>
                <a href='https://github.com/mausamsion'><Image src={git} style={socialStyle} /></a>
                <a href='https://medium.com/@mausamsion'><Image src={med} style={socialStyle} /></a>
                <a href='https://twitter.com/mausamsion'><Image src={twi} style={socialStyle} /></a>
            </p>
        </Jumbotron>
    )
}

export default About
