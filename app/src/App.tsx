import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Tools from './Tools';
import Connect from './Connect';
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';


const links = [
    { id: "Home", href: "#Home" },
    { id: "About", href: "#About" },
    { id: "Projects", href: "#Projects" },
    { id: "Tools", href: "#Tools" },
    { id: "Connect", href: "#Connect" }
]

function App() {
  return (
    <Container className="App container">
      <Header title="anthony camarillo"/>
      <NavBar links={ links } />
      <Home/>
      <About/>
      <Projects/>
      <Tools/>
      <Connect/>
      <Footer title="built with: "/>      
    </Container>
  );
}

export default App;
