import React, { createContext, useContext, useState } from 'react';

const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
  const [productoData, setProductoData] = useState(null);

  const updateProductoData = (data) => {
    setProductoData(data);
  };

  return (
    <FormularioContext.Provider value={{ productoData, updateProductoData }}>
      {children}
    </FormularioContext.Provider>
  );
};

export const useFormulario = () => {
  const context = useContext(FormularioContext);
  if (!context) {
    throw new Error('useFormulario debe ser usado dentro de un FormularioProvider');
  }
  return context;
};