import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="container text-center mt-5">
      <div className="cont mt-4 w-50">
          <Link to="/login" className="boton btn btn-primary mr-2">
                Iniciar sesión
              </Link>
                       <Link to="/registro" className="btn btn-success">
                Registrarse
              </Link>
 
      </div>

      <h1 className='titulo-principal'>Bienvenido al Marketplace</h1>
      <img src="https://blog.dolado.com.br/wp-content/uploads/2022/02/como-vender-em-marketplaces.png" alt="Welcome" className="img-fluid" />

    </div>
  );
};

export default Home;