import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';

const Navigation = () => {
  const navigate = useNavigate();
  const { getDeveloper, setDeveloper } = useContext(Context);

  const logout = () => {
    setDeveloper();
    window.sessionStorage.removeItem('token');
    navigate('/');
  };

  const isLogin = () => {
    if (!getDeveloper) {
      return (
        <>
          <Link to='/registrarse' className='btn btn-primary m-1'>Registrarse</Link>
          <Link to='/login' className='btn btn-success'>Iniciar Sesión</Link>
        </>
      );
    }

    return (
      <>
        <Link to='/perfil' className='btn btn-light m-1'>Mi Perfil</Link>
        <button onClick={logout} className='btn btn-danger'>Salir</button>
      </>
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <span className='navbar-brand'>Marketplace</span>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item me-3'>
            <Link to='/' className='nav-link'>
              Inicio <i className='fa-solid fa-house ms-2' />
            </Link>
          </li>
        </ul>
        <div className='navbar-nav ms-auto'>{isLogin()}</div>
      </div>
    </nav>
  );
};

export default Navigation;