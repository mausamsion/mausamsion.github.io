import React, { useState } from 'react';
import '../src/App.css';

import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Reading from './components/Reading.js'
import Blog from './components/Blog.js'
import me from './media/mj.jpg'

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

// const globalStyle = {
//     fontFamily: 'PT Sans',
//     fontSize: '1.15rem'
// }

const jumboStyle = {
    backgroundColor: 'transparent',
    paddingTop: '4rem',
    paddingBottom: '0.5rem',
    marginBottom: '0rem',
    borderBottom: '0.01rem solid #bbbbbb',
    // fontFamily: 'Seravek'
}

const myName = {
    letterSpacing: '0.15rem',
    fontSize: '2.1rem',
    marginBottom: '0'
}
const myDesg = {
    fontSize: '1.3rem',
    marginBottom: '0'
}
const dpStyle = {
    width:'9.5rem', 
    height:'9.5rem',
    marginTop:'-2.5rem',
    marginBottom:'-2rem',
    border: '0.3rem solid #ffffff'
}

const tabsStyle = {
    border: '0rem',
    marginTop: '2rem'
}

function App() {
    const [content, setContent] = useState(<Home />)
    function handleSelect(eventKey){
        if (eventKey === 'home'){
            setContent(<Home />)
        } else if (eventKey === 'blog'){
            setContent(<Blog />)
        } else if (eventKey === 'profile'){
            setContent(<Profile />)
        } else if (eventKey === 'reading'){
            setContent(<Reading />)
        } else if (eventKey === 'contact'){
            setContent('')
        }
    }
    return(
        <Container className='global'>
            <Jumbotron style={jumboStyle}>
                <Row>
                    <Col sm={3} className='text-right'>
                        <p style={myName}> Mausam Jain </p>
                        <p style={myDesg}> Research Scientist </p>
                    </Col>
                    <Col sm={2} className='text-right'>
                        <Image src={me} roundedCircle style={dpStyle} />
                    </Col>
                    <Col sm={1} />
                    <Col sm={6} className='text-right'>
                        <Nav variant="tabs" className="justify-content-center" defaultActiveKey="home" as="ul" style={tabsStyle}>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='home' onSelect={handleSelect}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='profile' onSelect={handleSelect}>Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='blog' onSelect={handleSelect}>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='reading' onSelect={handleSelect}>Reading</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='contact' onSelect={handleSelect} disabled>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Jumbotron>
            <div>{content}</div>
        </Container>
    )
}

export default App;
