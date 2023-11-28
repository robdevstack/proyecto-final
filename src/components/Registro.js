import React, { useState } from 'react';

const Registro = () => {
  const [userData, setUserData] = useState({
    usuario: '',
    correo: '',
    contraseña: '',
    avatarUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({
      usuario: '',
      correo: '',
      contraseña: '',
      avatarUrl: '',
    });
  };

  return (
    <div className="container text-center mt-5">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="usuario"
            className="form-control"
            placeholder="Ingrese su usuario"
            value={userData.usuario}
            onChange={handleChange}
            style={{ width: '120%', marginBottom: '15px' }} // Ajusta el ancho y el margen inferior
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder="Ingrese su correo"
            value={userData.correo}
            onChange={handleChange}
            style={{ width: '120%', marginBottom: '15px' }} // Ajusta el ancho y el margen inferior
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="contraseña"
            className="form-control"
            placeholder="Contraseña"
            value={userData.contraseña}
            onChange={handleChange}
            style={{ width: '120%', marginBottom: '15px' }} // Ajusta el ancho y el margen inferior
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="avatarUrl"
            className="form-control"
            placeholder="Url Imagen de Avatar"
            value={userData.avatarUrl}
            onChange={handleChange}
            style={{ width: '120%', marginBottom: '15px' }} // Ajusta el ancho y el margen inferior
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Registro;