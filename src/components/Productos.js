import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormulario } from '../context/Context';

const Productos = () => {
  const { productoData } = useFormulario();
  const [verDetalles, setVerDetalles] = useState(false);

  const handleClickVerMas = () => {
    setVerDetalles(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Productos</h2>
      {productoData && (
        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <img
            src={URL.createObjectURL(productoData.imagen)}
            className="card-img-top"
            alt="Producto"
          />
          <div className="card-body">
            <h5 className="card-title">{productoData.nombre}</h5>
            <p className="card-text">Precio: ${productoData.precio}</p>
            {!verDetalles && (
              <Link to="/detalles">
                <button className="btn btn-primary" onClick={handleClickVerMas}>
                  Ver más
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;