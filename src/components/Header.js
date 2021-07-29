import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../App.css';

import About from './About.js'
import Profile from './Profile.js'
import Reading from './Reading.js'
import Blog from './Blog.js'
import me from '../media/mj.jpg'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

const jumboStyle = {
    backgroundColor: 'transparent',
    paddingTop: '4rem',
    paddingBottom: '0.5rem',
    marginBottom: '2rem',
    borderBottom: '0.01rem solid #bbbbbb'
    // fontFamily: 'Seravek'
}

const myName = {
    letterSpacing: '0.2rem',
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

function Header(props) {
    return (
        <Router>
            <Jumbotron style={jumboStyle}>
                <Row>
                    <Col sm={4} className='text-right'>
                        <p style={myName}> Mausam Jain </p>
                        <p style={myDesg}> Research Scientist @ Rakuten</p>
                    </Col>
                    <Col sm={2} className='text-right'>
                        <Image src={me} roundedCircle style={dpStyle} />
                    </Col>
                    <Col sm={6} className='text-right'>
                        <Nav variant="tabs" className="justify-content-center" as="ul" style={tabsStyle} id='mainnav' activeKey={props.activenav}>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='about'> <Link to='/'> About </Link> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='profile'> <Link to='/profile'> Profile </Link> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='blog'> <Link to='/blog'> Blog </Link> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='reading'> <Link to='/reading'> Reading </Link> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='contact' disabled> <Link to='/contact'> Contact </Link> </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>    
            </Jumbotron>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="/blog" component={Blog} />
                <Route path="/reading" exact component={Reading} />
                <Route path="/reading/:id" exact component={Reading} />
            </Switch>
        </Router>
    )
}

export default Header