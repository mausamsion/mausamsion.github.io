import React from 'react'
import lin from '../files/linkedin.png'
import twi from '../files/twitter.png'
import git from '../files/github.png'
import med from '../files/medium.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    fontFamily: 'Seravek'
}

const socialStyle = {
    width:'1.5rem', 
    height:'1.5rem',
    marginRight:'3rem',
    opacity:'0.75'
}

class Home extends React.Component {
    render() {
        return(
            <Jumbotron style={jumboStyle}>
                Hi there 🖐🏽 I am Mausam, Research Scientist at Rakuten Institute of Technology, Rakuten Inc. 
                My current work is on speech processing problems like emotion 
                recognition, speech source separation and speech-to-text. Previously, 
                I have worked on forecasting of stocks and bonds for financial trading.
                <br/><br/>
                I try to keep up with the overwhelming progress in the machine 
                learning 😨 or if can't, read (auto)biographies and science or play computer games 🙃.
                <p style={{marginTop:'3rem'}}>
                    <a href='https://www.linkedin.com/in/mausamsion/'><Image src={lin} style={socialStyle} /></a>
                    <a href='https://github.com/mausamsion'><Image src={git} style={socialStyle} /></a>
                    <a href='https://medium.com/@mausamsion'><Image src={med} style={socialStyle} /></a>
                    <a href='https://twitter.com/mausamsion'><Image src={twi} style={socialStyle} /></a>
                </p>
            </Jumbotron>
        )
    }
}

export default Home
