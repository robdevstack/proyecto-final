import React from 'react';

const Perfil = ({ userName, perfilImageSrc }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-3">Hola {userName}</h2>
        <a href="http://localhost:3000/formulario"> <button className="btn btn-primary">Crear Publicación</button></a> 
        </div>
        <div className="col-md-6 text-center">
          <img
            src={perfilImageSrc}
            alt="Profile"
            className="img-fluid"
            style={{ width: '70%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Perfil;