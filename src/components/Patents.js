import React from 'react'
import {Card} from 'react-bootstrap'

function Patents() {
    return(
        <div>
        <Card style={{backgroundColor: 'transparent', border: 'None'}}>
            <Card.Body>
                <h4>Patents</h4>
                <ol>
                    <li>
                        <a href='https://patentscope2.wipo.int/search/en/detail.jsf?docId=WO2018180239'>Information Processing Device and Method</a> - prediction of internal greenhouse environment and minimization of sensor installation and maintenance cost using machine learning.
                    </li>
                </ol>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Patents
