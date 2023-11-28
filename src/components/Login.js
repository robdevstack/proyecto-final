import React from 'react';

const Login = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Iniciar Sesión</h1>
      <form>
        <div className="form-group">
          <label htmlFor="correo"></label>
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder="Correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña"></label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;