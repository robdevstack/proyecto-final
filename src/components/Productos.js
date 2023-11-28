import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormulario } from '../context/Context';

const Productos = () => {
  const { productoData } = useFormulario();
  const [verDetalles, setVerDetalles] = useState(false);

  const handleClickVerMas = () => {
    setVerDetalles(true);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatCurrencyCLP = (value) => {
    return value.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 font-weight-bold">Productos</h2>
      {productoData && (
        <div className="card shadow mx-auto" style={{ maxWidth: '400px' }}>
          <img
            src={URL.createObjectURL(productoData.imagen)}
            className="card-img-top"
            alt="Producto"
          />
          <div className="card-body">
            <h5 className="card-title">{capitalizeFirstLetter(productoData.nombre)}</h5>
            <p className="card-text font-weight-bold"><strong>Precio:</strong> ${formatCurrencyCLP(productoData.precio)}</p>
            {!verDetalles && (
              <Link to="/detalles">
                <button className="btn btn-primary" onClick={handleClickVerMas}>
                  Ver Más
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