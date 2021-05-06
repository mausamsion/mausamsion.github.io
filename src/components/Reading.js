import React from 'react'
import readingData from './data/readingData.js'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    fontFamily: 'Seravek'
}

const imgStyle = {
    opacity: '0.8'
}
const contentStyle = {
    margin:'1rem', 
    border:'None'
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


class Reading extends React.Component {
    render() {
        return(
            <Jumbotron style={jumboStyle}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="current"> Currently reading </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="previous"> Previously read </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="current">
                                    {current}
                                </Tab.Pane>
                                <Tab.Pane eventKey="previous">
                                    {previous}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Jumbotron>
        )
    }
}

export default Reading
