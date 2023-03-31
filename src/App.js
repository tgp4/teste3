import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Figure } from 'react-bootstrap';
import Produtos from './Produtos';  
import Encomenda from './Encomenda';
import Catalisadores from './Catalisadores';
import MarcasAlternadores from './MarcasAlternadores.js';
import AlternadorDaBosch from './AlternadorDaBosch';
import Carrinho from './Carrinho';

function App() {
  return (
    <div className="App">

      <header classname="App-header">
        <Navbar classname='letras' expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/"><img src='./imagens/IPO.png' width="100"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Páginal Principal</Nav.Link>
                <Nav.Link href="/Produtos">Produtos</Nav.Link>


                <NavDropdown title="Informações e encomendas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Contact"><b>Contactos e Encomendas</b></NavDropdown.Item>
                  <NavDropdown.Item href="/About"><b>Sobre</b></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar></header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Encomenda' element={<Encomenda />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Produtos' element={<Produtos />} />
        <Route path='/MarcasAlternadores' element={<MarcasAlternadores />} />
        <Route path='/Catalisadores' element={<Catalisadores />} />
        <Route path='/AlternadorDaBosch' element={<AlternadorDaBosch />} />
        <Route path='/Carrinho' element={<Carrinho />} />

      </Routes>
    </div>
  );
}
export default App;
