import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
    return (
      <div>
       <body><h3>Com a criação deste site o objetivo é conseguir satisfazer todos os nossos clientes com o melhor material e com a maior rapidez possivel</h3>
       <Row><Col><img src='https://wp-buyco-2021.s3.amazonaws.com/wp-content/uploads/2021/04/mercado-de-oficinas.png'
                  width={785}
                  height={400}
                  /></Col></Row>
                  <h1>⬇</h1>
       <Link to='/' className='btn btn-primary'>Clique para voltar á página principal</Link></body>
       <footer>
      <img src='https://solardasboucas.com/wp-content/uploads/2020/05/metodo-de-pagamento_PT.jpg'
            width={1100}
            height={150}
    />
  </footer></div>
    );
  }
  export default About;
  