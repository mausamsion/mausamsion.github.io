import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import MainContent from './MainContent.js'

// CSS styles

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0'
}

const blogheader = "{mjBytes}";
const namelink = "/mjbytes";

function Blog() {
    useEffect(() => {
        ReactDOM.render(
            <MainContent 
                activenav='mjbytes' 
                dname={blogheader} 
                namelink={namelink}
            />, 
            document.getElementById('global')
        )
    }, []);
    return(
        <Jumbotron style={jumboStyle} className="align-items-center text-center">
            Coming soon
        </Jumbotron>
    )
}

export default Blog
