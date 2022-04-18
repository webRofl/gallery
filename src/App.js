import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import GalleryContainer from './components/Gallery/GalleryContainer';

const App = () => {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <GalleryContainer />
      </main>
    </Container>
  );
};

export default App;
