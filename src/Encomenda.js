import Home from './Home';
import {Link} from "react-router-dom";
function Encomenda() {
    return ( 
       <body><h2>Obrigado pela encomenda!</h2>
        <Link to='/' className='btn btn-primary'> Clique para voltar á página principal</Link></body> 

    );
}
export default Encomenda;