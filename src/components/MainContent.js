import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom'
import '../App.css';
import {Jumbotron, Row, Col, Nav, Image, ListGroup} from  'react-bootstrap'
import { AiFillHome } from "react-icons/ai";

import lin from '../media/linkedin.png'
import git from '../media/github.png'
import About from './About.js'
import Blog from './Blog.js'
import Reads from './Reads.js'
import Footer from './Footer.js'

const jumboStyle = {
    backgroundColor: 'transparent',
    paddingTop: '2rem',
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

const tabsStyle = {
    border: '0rem',
    fontSize: '1.4rem',
    letterSpacing: '0.1rem'
}

const socialStyle = {
    width:'1.8rem', 
    height:'1.9rem',
    // opacity:'0.75'
}
const lgStyle = {
    backgroundColor: 'transparent',
    border: '0rem',
}

const defaultname = "Mausam Jain";
const defaultnamelink = "/"

function MainContent(props) {
    return (
        <Router>
            {/* Header */}
            <Jumbotron style={jumboStyle}>
                <Row className="align-items-center">
                    <Col sm={7} className="text-center align-items-center">
                        <ListGroup horizontal className="align-items-center">
                            <ListGroup.Item style={lgStyle}>
                                <a style={myName} href={!props.namelink ? defaultnamelink : props.namelink}>
                                    {!props.dname ? defaultname : props.dname}
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item style={lgStyle}>
                                
                            </ListGroup.Item>
                            <ListGroup.Item style={lgStyle}>
                                <a href='https://www.linkedin.com/in/mausamsion/'><Image src={lin} style={socialStyle} /></a>
                            </ListGroup.Item>
                            <ListGroup.Item style={lgStyle}>
                                <a href='https://github.com/mausamsion'><Image src={git} style={socialStyle} /></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={5} className="text-right align-items-center">
                        <Nav variant="tabs" className="justify-content-end" as="ul" style={tabsStyle} id='mainnav' activeKey={props.activenav}>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='about'>
                                    <Link to='/'> &nbsp;<AiFillHome />&nbsp; </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='mjbytes'>
                                    <Link to='/mjbytes'>Blog</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey='mjlogs'>
                                    <Link to='/mjlogs'>Reads</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row> 
            </Jumbotron>
            
            {/* Main Content */}
            <div className="flex-grow-1">
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/mjbytes" component={Blog} />
                    <Route path="/mjlogs" component={Reads} />
                </Switch>
            </div>
            
            {/* Footer */}
            <Footer />
        </Router>
    )
}

export default MainContent

