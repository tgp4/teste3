import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Contact() {
  
    return (
      <div className="Contact">
        <body>
        <Form>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Coloque o seu email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label md={{ span: 10, offset: 3 }}>Escreva as peças que deseja encomendar, seguido da matrícula do automóvel onde pretende instalar as peças</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
       
      <Row><Col><Link to='/Encomenda' className='btn btn-primary'> Submeter</Link></Col></Row>
      <Row><Col><Link to='/' className='btn btn-primary'> Clique para voltar á página principal</Link></Col></Row>
    
      </body>
      
      <footer> 
      <img src='https://solardasboucas.com/wp-content/uploads/2020/05/metodo-de-pagamento_PT.jpg'
            width={1100}
            height={150}
    />
  </footer>
  </div>
    );
  }
  export default Contact;
  