import React from 'react';

import Generator from './components/generator';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <Container>
        <h1>Warrior Cats Name Generator</h1>
        <Generator/>
        <footer className="footer">Site made in 2022 by Katte Noel.</footer>
    </Container>
  );
}

export default App;
