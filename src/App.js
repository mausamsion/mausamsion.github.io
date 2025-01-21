import React from 'react'
import './App.css'
import {Container} from 'react-bootstrap'
import MainContent from './components/MainContent';

function App() {
    return (
        <Container id="global" className="d-flex flex-column min-vh-100 global">
            <MainContent />
        </Container>
    )
}

// function App() {
//   return (
//     <div>
//       <h1>Hello, React 18!</h1>
//     </div>
//   );
// }

export default App;

