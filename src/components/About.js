import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import {Jumbotron, Image, Col, Row, Card} from 'react-bootstrap'

import MainContent from './MainContent.js'
import me from '../media/mj.jpg'

import Publications from './Publications.js';
import Patents from './Patents.js';

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    marginTop: '-2em',
    marginRight: '-2em'
    // fontFamily: 'Seravek'
}

const dpStyle = {
    width:'13rem', 
    height:'13rem',
}

function About() {
    useEffect(() => {
        ReactDOM.render(
            <MainContent activenav='about' />, 
            document.getElementById('global')
        )
    }, [])

    return (
        <div>
            <Row className="align-items-center">
                <Col sm={9} className='text-left'>
                    <Jumbotron style={jumboStyle}>
                        I am a Senior Research Scientist at <a href="https://rit.rakuten.com/"> Rakuten Institute of Technology</a>, Rakuten Inc.
                        where my current area of research is in Recommender Systems and Model Explainability for Deep Learning Models. 
                        My previous work on Natural Language Processing involves understanding of dual-encoder retrieval models and their ranking interpretation.
                        I am interested in exploring reasoning ability and embeddings learnt by Large Langugage Models and their interpretability. 
                        Otherwise, I love table tennis and video games! <br/>
                        I completed my Master's in Computer Science from <a href="https://cse.iith.ac.in/"> Indian Institute of Technology Hyderabad </a> 
                        in 2017, where I was advised by Dr. Vineeth N Balasubramanian, for on my thesis on 
                        Learning Graph invariant Hierarchical Representations for sub-graph matching and classification.
                    </Jumbotron>
                </Col>
                <Col sm={3} className='text-left'>
                    <Jumbotron style={jumboStyle}>
                        <Image src={me} roundedCircle style={dpStyle} />
                    </Jumbotron>
                </Col>
            </Row>
            
            <Publications />
            
            <Patents />
        </div>
    )
}

export default About
