import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Marketplace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Iniciar sesión
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registro" className="nav-link">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://blog.dolado.com.br/wp-content/uploads/2022/02/como-vender-em-marketplaces.png"
                alt="First slide"
                style={{ opacity: 0.6 }}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;