import React from 'react'

import elomus from '../files/elonmusk.jpg'
import davgog from '../files/davidgoggins.jpg'
import whysle from '../files/whywesleep.webp'
import trenoa from '../files/trevornoah.jpg'
import atohab from '../files/atomichabits.jpg'

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
                                <Row>
                                    <Col sm={2}>
                                        <Card.Img src={elomus} style={{opacity:'0.8'}} />
                                    </Col>
                                    <Col sm={10}>
                                        <Card style={{margin:'1rem', border:'None'}}>
                                            <p>
                                                <b> Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future </b>
                                                <br/> - Ashlee Vance
                                                <br/><br/>
                                                It's a wonderful time to be alive when we see new limits of human beings in terms of innovation and madness (in a good way 🤓). I have read till SpaceX chapter and all I can say is that he is a 'superhuman'😲.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col sm={2}>
                                        <Card.Img src={davgog} style={{opacity:'0.8'}} />
                                    </Col>
                                    <Col sm={10}>
                                        <Card style={{margin:'1rem', border:'None'}}>
                                            <p>
                                                <b> Can't Hurt Me: Master Your Mind and Defy the Odds </b>
                                                <br/><br/>
                                                Just started. I have heard a lot about David Goggins and saw some of his motivaltional videos. I hope to find something incredible in this book. Lets see...
                                                Already like his lines - <i>"Don't stop when you're tired. Stop when you're done."</i>
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col sm={2}>
                                        <Card.Img src={whysle} style={{opacity:'0.8'}} />
                                    </Col>
                                    <Col sm={10}>
                                        <Card style={{margin:'1rem', border:'None'}}>
                                            <p>
                                                <b> Why We Sleep </b>
                                                <br/> - Matthew Walker
                                                <br/><br/>
                                                Really fascinating till now (chapter 3). Knowing the research and science behind sleep, something that many of us take for granted. Author not only discuss the importance and mechanism of sleep in homo sapiens but also other species and how their evolution revolving sleep happened.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="previous">
                                <Row>
                                    <Col sm={2}>
                                        <Card.Img src={trenoa} style={{opacity:'0.8'}} />
                                    </Col>
                                    <Col sm={10}>
                                        <Card style={{margin:'1rem', border:'None'}}>
                                            <p>
                                                <b> Born a Crime: Stories From a South African Childhood </b>
                                                <br/><br/>
                                                One of the funniest stand-up comedian I like to watch (rewatch sometimes), 
                                                in his book Trevor Noah takes us through his struggles and stories of his life in South Africa of the apartheid times.
                                                Content is so filled with humor that sometimes the seriousness of the extreme racial discrimination is forgotten.
                                                <br/>
                                                <ul>
                                                    <li> I like his perspective of learning different languages and accents. </li>
                                                    <li> He never stopped thinking about unfair disadvantages he had in life and always found ways by changing himself to adapt with the situations. </li>
                                                </ul>
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col sm={2}>
                                        <Card.Img src={atohab} style={{opacity:'0.8'}} />
                                    </Col>
                                    <Col sm={10}>
                                        <Card style={{margin:'1rem', border:'None'}}>
                                            <p>
                                                <b> Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones </b>
                                                <br/> - James Clear
                                                <br/><br/>
                                                Yeah, I read it and ... realised I need to change myself. It was a short-lived realisation although 🙈
                                                But, changing long-term habits is a long-term process too and so I am still trying ✌🏽.
                                                <br/>
                                                The book definitely points out effective ways to make and change the good, long-term and effective habits and also ways to cut-out unwanted habits supported by stories and research.
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
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
