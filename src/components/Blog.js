import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import JupyterViewer from "react-jupyter-notebook"
import blogData from '../data/blogData.js'
import Header from './Header.js'

// CSS styles

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0'
}

const tabsStyle = {
    border: '0rem',
    marginTop: '2rem'
}

// Parse blog categories (years)

var category = []
for (var key in blogData) {
    // pushData(key, blogData[key])
    const tmp = (
        <Nav.Item>
            <Nav.Link eventKey={key}> {key} </Nav.Link>
        </Nav.Item>
    )
    category.push(tmp)
}
const active = key
category = category.reverse()

// main function

function Blog() {
    useEffect(() => {
        ReactDOM.render(
            <Header activenav='blog' />, 
            document.getElementById('global')
        )
    });
    
    return(
        <Jumbotron style={jumboStyle}>
            {/* <JupyterViewer 
                rawIpynb={ss1} 
                showLineNumbers={false} 
                codeBlockStyles={'monokai'}
            /> */}
            <Tab.Container id="left-tabs-example" defaultActiveKey={active}>
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {category}
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {/* <Tab.Pane eventKey="current">
                                {current}
                            </Tab.Pane>
                            <Tab.Pane eventKey="previous">
                                {previous}
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Jumbotron>
    )
}

export default Blog
