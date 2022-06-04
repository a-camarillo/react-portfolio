import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Tools from './Tools';
import Contact from './Contact';

function App() {
  return (
    <Container className="App container">
      <Header title={"Anthony Camarillo"}/>
      <Home/>
      <About/>
      <Projects/>
      <Tools/>
      <Contact/>
      <Footer title="Built With: "/>      
    </Container>
  );
}

export default App;
