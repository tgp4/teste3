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
function MarcasAlternadores() {
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
                <Col><h3> Alternador da Bosch</h3>
                <Link to="/alternadorDaBosch">
                <img src='https://cdn.pkwteile.de/thumb?id=1158719&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}  
                  /></Link>
                 <Row>
                  <Link to  ='/Contact'>
                  <Button variant='primary'>120€</Button> 
                  </Link>
              </Row>
                </Col>
                <Col><h3> Alternador da Ridex</h3>
                <img src='https://cdn.pkwteile.de/thumb?id=13630658&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}
                />
                </Col>
                <Col><h3> Alternador da Valeo</h3>
                <img src='https://cdn.pkwteile.de/thumb?id=1080107&m=0&n=0&lng=pt&ccf=94077835'
                  width={270}
                  height={200}
                />
                </Col>
                </Row>
                <Row>
                <Col>
                <h3>Alternador MF Pinto</h3>
                <img src='https://mfpinto.com/wp-content/uploads/2016/07/alternador_3.gif'
                  width={270}
                  height={200}
                />
                </Col>
                <Col><h3> Alternador da Krautly</h3>
                <img src='https://posvenda.pt/wp-content/uploads/2022/04/IMG_20042022_175618_624_x_397_pixel.jpg'
                  width={270}
                  height={200}  
                  />
                </Col>
                <Col><h3> Alternador da Auto Recto</h3>
                <img src='https://www.autorecto.com/temp/1652786641_bfe0f2e33be7c7d8b38df8bcaeb2ccab.jpg'
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
export default MarcasAlternadores;