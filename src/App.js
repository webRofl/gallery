import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Container>
      <header>
        <Header />
      </header>
    </Container>
  );
};

export default App;
