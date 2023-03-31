import { Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Home   () {
    return (
      <div className="App">
        <body className='App-body'>
        <div>
          <video autoPlay loop muted width="100%"className='banner'>
            <source src='./imagens/videoautomovel.mp4' type="video/mp4"/>
            
          </video>
          <div className='banner-overlay'>
          </div>
        </div>
        </body>
        <footer><img src='https://solardasboucas.com/wp-content/uploads/2020/05/metodo-de-pagamento_PT.jpg'
                  width={1100}
                  height={150} 
                  /></footer>

      </div>
    );
  }
export default Home;
