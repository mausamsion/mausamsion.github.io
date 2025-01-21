import React from 'react';
import {Card} from 'react-bootstrap';

function Publications() {
    return(
        <div>
        <Card style={{backgroundColor: 'transparent', border: 'None'}}>
            <Card.Body>
                <h4>Publications</h4>
                <ol>
                    <li>
                        <b>Mausam Jain</b>. <a href="https://gist.github.com/mausamsion/4edf79639308b6fd96f6fd558a54eab6">Learning hierarchical representations of graphs using neural network techniques</a>. Master’s thesis, Indian Institute of Technology Hyderabad, 2017. 
                    </li>
                    <li>
                        Raymond Hendy Susanto, Dongzhe Wang, Sunil Yadav, <b>Mausam Jain</b>, and Ohnmar Htun. <a href='https://aclanthology.org/2021.wat-1.9/'>Rakuten‘s participation in WAT 2021: Examining the effectiveness of pre-trained models for multilingual and multimodal machine translation</a>. In Proceedings of the 8th Workshop on Asian Translation, WAT2021. Association for Computational Linguistics.
                    </li>
                    <li>
                        Debopriyo Banerjee, <b>Mausam Jain</b>, and Ashish Kulkarni. <a href='https://link.springer.com/chapter/10.1007/978-3-031-33380-4_9'>MFBE: Leveraging multi-field information of FAQs for efficient dense retrieval</a>. In Advances in Knowledge Discovery and Data Mining: 27th Pacific-Asia Conference on Knowledge Discovery and Data Mining, PAKDD 2023, Proceedings, Part III, 2023.
                    </li>
                    <li>
                        <a href='https://patentscope2.wipo.int/search/en/detail.jsf?docId=WO2018180239'>Information Processing Device and Method</a> - prediction of internal greenhouse environment and minimization of sensor installation and maintenance cost using machine learning.
                    </li>
                </ol>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Publications
