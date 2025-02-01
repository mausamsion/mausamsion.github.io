import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import {Card} from 'react-bootstrap';
import readsData from '../data/readsData.js'
import MainContent from './MainContent.js'

const reads = []
function populate(R) {
    for (let r of R) {
        reads.push (
            <li>
                <a href={r.url}>{r.title}</a> | {r.owner} | {r.year}
            </li>
        )
    }
}
populate(readsData)

const blogheader = "{Logs}";
const namelink = "/mjlogs";

function Reads(props) {
    useEffect(() => {
        ReactDOM.render(
            <MainContent
                activenav='mjlogs'
                dname={blogheader}
                namelink={namelink}
            />,
            document.getElementById('global')
        )
    }, [])

    return (
        <div>
        <Card style={{backgroundColor: 'transparent', border: 'None'}}>
            <Card.Body>
                <h5>Noteworthy blogs which I repeatedly visit and have nicely unwrapped the intuition behind complex concepts.</h5>
                <br/>
                <ul>
                    {reads}
                </ul>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Reads
