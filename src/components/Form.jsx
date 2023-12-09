import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';

const Form = ({ setTitulo, setImgSRC, setPrecio, setDescripcion, agregarPost }) => {
  const { getDeveloper } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');

    if (!token || !getDeveloper) {
      navigate('/'); // Redirect to login page if not authenticated
    }
  }, [navigate, getDeveloper]);

  return (
    <div className="App">
      <h2 className="py-5 text-center">Agregar Producto</h2>
      <div className="row m-auto px-5">
        <div className='form'>
          <div className='mb-2'>
            <h6>Agregar post</h6>
            <label>Título</label>
            <input onChange={(event) => setTitulo(event.target.value)} className='form-control' />
          </div>
          <div className='mb-2'>
            <label>URL de la imagen</label>
            <input onChange={(event) => setImgSRC(event.target.value)} className='form-control' />
          </div>
          <div className='mb-3'>
            <label>Descripción</label> <br />
            <textarea onChange={(event) => setDescripcion(event.target.value)} className='form-control' />
          </div>
          <div className='mb-2'>
            <label>Precio</label>
            <input onChange={(event) => setPrecio(event.target.value)} className='form-control' />
          </div>
          <div className='d-flex'>
            <button type="submit" onClick={agregarPost} className="btn btn-primary m-auto">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;