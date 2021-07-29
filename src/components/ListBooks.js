import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0'
}

const navItemStyle = {
    background: 'none', 
    border: '1px #000000 solid'
}

function ListBooks({match}, props) {
    return (
        <Router>
        <Jumbotron style={jumboStyle}>
            <Tab.Container id="left-tabs-example" defaultActiveKey='current'>
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="current"> 
                                <Link to={`${match.url}/current`}> Currently reading </Link>
                                {/* Currently reading */}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="previous"> 
                                <Link to={`${match.url}/previous`}> Previously read </Link>
                                {/* Previously read */}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="current">
                                <div>
                                <Route path={`${match.url}/current`} component={props.current} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="previous">
                                <div>
                                <Route path={`${match.url}/previous`} component={props.previous} />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Jumbotron>
        </Router>
    )
}

export default ListBooks