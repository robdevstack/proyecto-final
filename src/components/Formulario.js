import React, { useState } from 'react';
import { useFormulario } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const { updateProductoData } = useFormulario();
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const imagen = e.target.files[0];
      setProducto((prevProducto) => ({
        ...prevProducto,
        imagen,
      }));
    } else {
      setProducto((prevProducto) => ({
        ...prevProducto,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProductoData(producto);
    setProducto({
      nombre: '',
      precio: '',
      descripcion: '',
      imagen: null,
    });
    navigate('/productos');
  };

  return (
    <div className="container text-center mt-5">
      <h1>Nuestro Producto</h1>
      <div className="d-flex align-items-center flex-column">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre del producto"
              value={producto.nombre}
              onChange={handleChange}
              style={{ width: '120%', marginBottom: '15px' }} 
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="precio"
              className="form-control"
              placeholder="Precio del producto"
              value={producto.precio}
              onChange={handleChange}
              style={{ width: '120%', marginBottom: '15px' }} 
              required
            />
          </div>
          <div className="form-group">
            <textarea
              rows="3"
              name="descripcion"
              className="form-control"
              placeholder="Descripción del producto"
              value={producto.descripcion}
              onChange={handleChange}
              style={{ width: '150%', marginBottom: '15px' }} 
              required
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="imagen"
              accept="image/*"
              onChange={handleChange}
              className="form-control-file"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Publicación
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;