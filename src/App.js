import React from 'react';
import './App.css';
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Reading from './components/Reading.js'
import me from './media/mj.jpg'

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    fontFamily: 'Seravek'
}

const jumboName = {
    letterSpacing: '0.3rem',
    fontSize: '2.1rem',
    marginBottom: '0'
}
const jumboDesg = {
    fontSize: '1.1rem',
    marginBottom: '0'
}

const tabsStyle = {
    fontSize: '1.1rem',
    fontFamily: 'Seravek'
}

const dpStyle = {
    width:'9rem', 
    height:'9rem',
    marginTop:'-2.5rem'
}

function App() {
    return(
        <Container>
            <Jumbotron style={jumboStyle}>
                <Row>
                    <Col sm={10} className='text-right'>
                        <p style={jumboName}> Mausam Jain </p>
                        <p style={jumboDesg}> Research Scientist </p>
                    </Col>
                    <Col sm={2} className='text-right'>
                        <Image src={me} roundedCircle style={dpStyle} />
                    </Col>
                </Row>
            </Jumbotron>
            
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={tabsStyle}>
                <Tab eventKey="home" title="Home">
                    <Home />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Profile />
                </Tab>
                <Tab eventKey="blog" title="Blog" disabled>
                    this is blog
                </Tab>
                <Tab eventKey="reading" title="Reading">
                    <Reading />
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    this is contact
                </Tab>
            </Tabs>
        
        </Container>
    )
}

export default App;
