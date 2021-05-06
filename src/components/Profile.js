import React from 'react'
import resume from '../docs/MausamJain_CV.pdf'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    fontFamily: 'Seravek'
}
const cardHeader = {
    letterSpacing: '0.1rem',
    backgroundColor: 'transparent'
}

class Profile extends React.Component {
    render() {
        return(
            <Jumbotron style={jumboStyle}>
                <a href={resume} target="_blank" rel="noreferrer"> Resume PDF </a>
                <br/><br/>
                <Card border='None'>
                    <Card.Header style={cardHeader}> 
                        Experience
                    </Card.Header>
                    <Card.Body>
                        <Card border="light">
                            <Card.Body>
                                <b> Research Scientist </b> <br/>
                                Rakuten Institue of Technology, Tokyo
                                <p style={{fontSize:'0.8rem', marginTop:'0.5rem'}}>
                                    Areas: 
                                    Speech Processing, 
                                    Financial Analysis
                                </p>
                                <footer className="blockquote-footer"> 2017-Present </footer>
                            </Card.Body>
                        </Card>
                        <Card border="light">
                            <Card.Body>
                                <b> Data Science Intern </b> <br/>
                                Bosch Japan
                                <p style={{fontSize:'0.8rem', marginTop:'0.5rem'}}>
                                    Plant Disease Prediction System using machine learning with tasks like:
                                    <ul type='circle'>
                                        <li>Data preparation, cleaning and visualization and validation of raw data recorded by sensors</li>
                                        <li>Developing regression and classification models for predicting leaf wetness</li>
                                    </ul>
                                </p>
                                <footer className="blockquote-footer"> 2016 (3 months) </footer>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                
                <br/><br/>

                <Card border='None'>
                    <Card.Header style={cardHeader}> 
                        Projects
                    </Card.Header>
                    <Card.Body>
                        <Card border="light">
                            <Card.Body>
                                <b> Pronunciation Modeling for ASR </b>
                                <br/><br/>
                                Pronunciation dictionary is an interface between acoustic model and language model.
                                Modeling it means, given a grapheme (a word like 'hello'), predicting sequence of phonemes (like 'h e: l o:').
                                This becomes a challenge in Japanese language as the source text can contain Kana, English and numeric characters and the usage of kanji characters sometimes depends on the context it is being used in.
                                To tackle this I used a mix of seq2seq model and rule-based mappings.
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card border="light">
                            <Card.Body>
                                <b> Financial Trading of US Bonds </b>
                                <br/><br/>
                                Exploratary data analysis and using machine learning models like SVM, Random Forest and XGBoost to predict the movement of bond price based on technical indicators and other instruments like currency and index.
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                
                <br/><br/>
                
                <Card>
                    <Card.Header style={cardHeader}> 
                        Patents
                    </Card.Header>
                    <Card.Body>
                        <Card border="light">
                            <Card.Body>
                                <a href='https://patentscope2.wipo.int/search/en/detail.jsf?docId=WO2018180239' target="_blank" rel="noreferrer"> WO2018180239 </a> Information  Processing  Device  and  Method -  prediction  of  internal  greenhouse  environment  and minimization of sensor installation and maintenance cost using machine learning.
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                
                <br/><br/>
                
                <Card>
                    <Card.Header style={cardHeader}> 
                        Education
                    </Card.Header>
                    <Card.Body>
                        <Card border="light">
                            <Card.Body>
                                <b> M.Tech in Computer Science </b> <br/>
                                Indian Institue of Technology, Hyderabad
                                <p style={{fontSize:'0.8rem', marginTop:'0.5rem'}}>
                                    Thesis: 
                                    Graph representation learning using machine learning
                                    [<a href='https://kris-singh.github.io/papers/graph2vec_icdm.pdf' target="_blank" rel="noreferrer">preprint</a>]
                                    <br/>
                                    Studied: 
                                    Advanced Machine Learning, 
                                    Computer Vision, 
                                    Database Management, 
                                    Predictive Analysis, 
                                    Linear Optimization
                                </p>
                                <footer className="blockquote-footer"> 2015-17 </footer>
                            </Card.Body>
                        </Card>
                        <Card border="light">
                            <Card.Body>
                                <b> B.E. in Computer Science </b> <br/>
                                Walchand Institue of Technology, Solapur
                                
                                <p style={{fontSize:'0.8rem', marginTop:'0.5rem'}}>
                                    Studied: 
                                    Discrete Mathematics, 
                                    Theory of Computation, 
                                    Digital Electronics, 
                                    Computer Networks, 
                                    Compiler Construction
                                </p>
                                <footer className="blockquote-footer"> 2010-14 </footer>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            
            </Jumbotron>
        )
    }
}

export default Profile
