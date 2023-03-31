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

function Produtos() {
  return (
    <div className="App">
      
      <body className="App-Body">
        
        <Container>
        
          <Row>
            <Col><h3><b><Link to='/MarcasAlternadores' className='btn btn-dark'> Alternadores</Link></b></h3>
                <img src='https://cdn-dhhpn.nitrocdn.com/sgKyArEdsZyTpIRtJjzigfMkrslhnjBQ/assets/static/optimized/rev-03d484a/wp-content/uploads/2017/10/Alternador-automotivo.jpg'
                  width={220}
                  height={200}
                />
             </Col>
            <Col><h3><b><Link to='/Catalisadores' className='btn btn-dark'> Catalisadores</Link></b></h3>
                <img src='https://naboleia.com.br/wp-content/uploads/2018/04/2-1-16042018-min.jpg'
                  width={220}
                  height={200}

                />
            </Col>
            <Col><h3><b><Link to='/' className='btn btn-dark'> Tirantes</Link></b></h3>
                <img src='https://images.cws.digital/produtos/gg/06/15/tirante-de-comando-da-caixa-de-mudancas-3691506-1619654724327.jpg'
                  width={220}
                  height={200}

                />
            </Col>
          </Row>
          <Row>
            <Col><h3><b><Link to='/' className='btn btn-dark'> Escapes</Link></b></h3>
                <img src='https://fpcat.pt/wp-content/uploads/2017/01/escape-fpcat-.png'
                  width={220}
                  height={200}

                  />
            </Col>
            <Col><h3><b><Link to='/'className='btn btn-dark'> Correias</Link></b></h3>
                <img src='https://www.serradomarautopecas.com.br/wp-content/uploads/2015/07/correias-3.jpg'
                  width={220}
                  height={200}

                  />
            </Col>
            <Col><h3><b><Link to='/' className='btn btn-dark'> Calços</Link></b></h3>
                <img src='https://media.autoteiledirekt.de/360_photos/2192369/preview.jpg'
                  width={220}
                  height={200}
              />
            </Col>
          </Row>
          <Row>
            <Col><h3><b><Link to='/ListaDeProdutos' className='btn btn-dark'> Discos de Travagem</Link></b></h3>
                <img src='https://media.autoteiledirekt.de/360_photos/1656217/preview.jpg'
                  width={220}
                  height={200}
                />
             </Col>
            <Col><h3><b><Link to='/Catalisadores' className='btn btn-dark'>Filtros de óleo</Link></b></h3>
                <img src='https://www.blue-print.com/fileadmin/content/products/filters/Filters-website-images-Oil.png'
                  width={220}
                  height={200}

                />
            </Col>
            <Col><h3><b><Link to='/' className='btn btn-dark'> Filtros de ar</Link></b></h3>
                <img src='https://media.autoersatzteile.de/360_photos/8000623/preview.jpg'
                  width={220}
                  height={200}

                />
            </Col>
          </Row>
          <Row>
            <Col><h3><b><Link to='/' className='btn btn-dark'>Filtros de Habitáculo</Link></b></h3>
                <img src='https://cdn.motordoctor.de/thumb/assets/bvs/ersatz_categories/300x300/54.png'
                  width={220}
                  height={200}

                  />
            </Col>
            <Col><h3><b><Link to='/' className='btn btn-dark'>Óleos e Lubrificantes</Link></b></h3>
                <img src='https://i0.wp.com/www.maosaoauto.com.br/wp-content/uploads/2018/06/%C3%B3leo-5w30.jpg?ssl=1'
                  width={220}
                  height={200}

                  />
            </Col>
            <Col><h3><b><Link to='/' className='btn btn-dark'>Radiadores</Link></b></h3>
                <img src='https://autos.culturamix.com/blog/wp-content/gallery/cuidados-com-o-radiador-do-carro-4/Cuidados-Com-o-Radiador-Do-Carro-11.jpg'
                  width={220}
                  height={200}
              />
            </Col>
          </Row>
          
        </Container>
        <h4>Clique nos nomes para ver todas marcas do produto que desejar</h4>
      
        <Link to='/ListaDeProdutos' className='btn btn-primary'> Clique nos nomes para ver todas marcas do produto que desejar</Link>
        </body>
        <footer>
            <img src='https://solardasboucas.com/wp-content/uploads/2020/05/metodo-de-pagamento_PT.jpg'
                  width={900}
                  height={200}
          />
        </footer>
    </div>
  );
}
export default Produtos;
