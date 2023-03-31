import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; 
function Catalisadores() {
    var nextid = 0;

    var carrinho;
    if(localStorage.getItem("carrinho"))
    {
      carrinho = JSON.parse(localStorage.getItem("carrinho"));
    }
    else carrinho = [];
  
    return (
        
        <div className="App">
            <body className="App-Body">
                <Container>
                <Row>
                <Col><h3> Catalisador da JMJ para Nissan</h3>
                <img src='https://cdn.autodoc.de/thumb?id=16149493&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}  
                   />
                 <Row>
                  <Link to  ='/Contact'>
                  <Button variant='primary'>120€</Button> 
                  </Link>
              </Row>
                </Col>
                <Col><h3> Catalisador da Walker</h3>
                <img src='https://cdn.autodoc.de/thumb?id=1008305&m=0&n=3&lng=pt&ccf=94077835'
                  width={270}
                  height={200}
                />
                </Col>
                <Col><h3>Catalisador Universal</h3>
                <img src='https://cdn.autodoc.de/thumb?id=16148786&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}
                />
                </Col>
                </Row>
                <Row>
                <Col>
                <h3>Catalisador</h3>
                <img src=''
                  width={270}
                  height={200}
                />
                </Col>
                <Col><h3>JMJ 0-50 Catalisador universal </h3>
                <img src='https://cdn.autodoc.de/thumb?id=16148781&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}  
                  />
                </Col>
                <Col><h3>Catalisador da Auto Recto</h3>
                <img src='https://image.made-in-china.com/155f0j00MeHhklNCfzrq/Stainless-Steel-Universal-3inch-Inlet-Outlet-15in-Overall-Length-Catalytic-Converters-Catalytic-with-O2-Sensor.jpg'
                  width={270}
                  height={200}  
                  />
                </Col>

                </Row>

                </Container>
                
                <Link to='/Contact' className='btn btn-primary'> Clique nos nomes para ver todas marcas do produto que desejar</Link> 
            
                </body>

                <footer>
                <img src='https://solardasboucas.com/wp-content/uploads/2020/05/metodo-de-pagamento_PT.jpg'
                    width={1150}
                    height={100}
                />
            </footer>
        </div>
    );
}
export default Catalisadores;