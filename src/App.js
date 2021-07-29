import React from 'react';
import '../src/App.css';
import Container from 'react-bootstrap/Container'

import Header from './components/Header.js'

function App() {
    return (
        <Container className='global' id='global'>
            <Header />
        </Container>
    )
}

export default App;



















// const [content, setContent] = useState(<Home />)
    // const [linkto, setLinkto] = useState('/')
    // function handleSelect(eventKey){
    //     if (eventKey === 'home'){
    //         setLinkto('/')s
    //         setContent(<Home />)
    //     } else if (eventKey === 'blog'){
    //         setLinkto('/blog')
    //         setContent(<Blog />)
    //     } else if (eventKey === 'profile'){
    //         setLinkto('/profile')
    //         setContent(<Profile />)
    //     } else if (eventKey === 'reading'){
    //         setLinkto('/reading')
    //         setContent(<Reading />)
    //     } else if (eventKey === 'contact'){
    //         setContent('')
    //     }
    // }






{/* <Jumbotron style={jumboStyle}>
    <Row>
        <Col sm={4} className='text-right'>
            <p style={myName}> Mausam Jain </p>
            <p style={myDesg}> Research Scientist @ Rakuten</p>
        </Col>
        <Col sm={2} className='text-right'>
            <Image src={me} roundedCircle style={dpStyle} />
        </Col>
        <Col sm={6} className='text-right'>
            <Nav variant="tabs" className="justify-content-center" defaultActiveKey="blog" as="ul" style={tabsStyle}>
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
</Jumbotron> */}


{/* <div>{content}</div> */}