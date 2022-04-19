import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import GalleryContainer from './components/Gallery/GalleryContainer';
import { Routes, Route, useNavigate, useMatch } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  const match = useMatch('/*');
  const navigate = useNavigate();

  useEffect(() => {
    if (match.pathname === '/') navigate('/gallery');
  }, []);

  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/gallery" element={<GalleryContainer />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
