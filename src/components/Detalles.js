import React from 'react';
import { useFormulario } from '../context/Context';

const Detalles = () => {
  const { productoData } = useFormulario();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Detalles del Producto</h2>
      {productoData && (
        <div className="card mx-auto" style={{ maxWidth: '600px' }}>
          <img
            src={URL.createObjectURL(productoData.imagen)}
            className="card-img-top"
            alt="Producto"
          />
          <div className="card-body">
            <h3 className="card-title">{productoData.nombre}</h3>
            <p className="card-text">Precio: ${productoData.precio}</p>
            <p className="card-text">Descripción: {productoData.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalles;