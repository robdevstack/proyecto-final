import React from 'react';
import { useFormulario } from '../context/Context';

const Detalles = () => {
  const { productoData } = useFormulario();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Detalles del Producto</h2>
      {productoData && (
        <div className="card mx-auto" style={{ maxWidth: '800px' }}>
          <div className="row no-gutters">
            <div className="col-md-7">
              <img
                src={URL.createObjectURL(productoData.imagen)}
                className="card-img"
                alt="Producto"
              />
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h3 className="card-title font-weight-bold">{productoData.nombre}</h3>
                <p className="card-text"> <strong>Precio:</strong> ${productoData.precio}</p>
                <p className="card-text"> <strong>Descripción:</strong> {productoData.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalles;