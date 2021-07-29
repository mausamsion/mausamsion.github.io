import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  NavLink, Route, useRouteMatch, Redirect, Switch} from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import Header from './Header.js'
import readingData from '../data/readingData.js'
// import ListBooks from './ListBooks.js'

const imgStyle = {
    opacity: '0.8'
}
const contentStyle = {
    margin:'1rem', 
    border:'None',
    background: '#fafafa'
}
const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0'
}

const current = []
const previous = []

function pushData(category, books) {
    for (let book of books){
        const tmpdata = (
            <div>
                <Row>
                    <Col sm={2}>
                        <Card.Img src={book.media} style={imgStyle} />
                    </Col>
                    <Col sm={10}>
                        <Card style={contentStyle}>
                            <p>
                                <b>{book.title}</b> - {book.author}
                                <br/><br/>
                                <div dangerouslySetInnerHTML={{__html:book.desc}}></div>
                            </p>
                        </Card>
                    </Col>
                </Row>
                <hr/>
            </div>
        )
        if (category === 'current') { current.push(tmpdata) }
        else { previous.push(tmpdata) }
    }
}

for (var key in readingData) {
    pushData(key, readingData[key])
}

function Reading({ match }) {
    useEffect(() => {
        ReactDOM.render(
            <Header activenav='reading' />, 
            document.getElementById('global')
        )
    })
    let { url } = useRouteMatch();
    return (
        // <div>
        //     <ListBooks 
        //         current={`current`} 
        //         previous={previous} 
        //     />
        // </div>

        <Router>
        <Jumbotron style={jumboStyle}>
            <Tab.Container id="left-tabs-example">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="current" style={{textDecoration: 'none'}}> 
                                <NavLink to={`${url}/current`} activeStyle={{color: 'white', textDecoration: 'none'}}> Currently reading </NavLink>
                                {/* Currently reading */}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="previous" style={{textDecoration: 'none'}}> 
                                <NavLink to={`${url}/previous`} activeStyle={{color: 'white', textDecoration: 'none'}}> Previously read </NavLink>
                                {/* Previously read */}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <div>
                            <Switch>
                            {/* <Redirect exact from='{`${url}`}' to={`${url}/current`} /> */}
                            <Route path={`${url}/current`}>
                                {current}
                            </Route>
                            <Route path={`${url}/previous`}>
                                {previous}
                            </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        </Jumbotron>
        </Router>
    )
}

export default Reading
