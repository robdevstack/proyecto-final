
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormularioProvider } from './context/Context';
import Detalles from './components/Detalles';

const App = () => {

   // const handleCreateProduct = (producto) => {
      // se puede enviar desde aqui al servidor, pero una vez veamos backend
    //  console.log('Producto creado:', producto);
  //  };

  const [listaProductos, setListaProductos] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
  };

  return (
     /* http://localhost:3000/perfil para acceder a ruta de perfil y luego crear publicacion, ver productos y detalle de producto  */

    <FormularioProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} />  
        <Route  path="/perfil" element={<Perfil userName="Roberto" perfilImageSrc="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />} />
        <Route path="/formulario" element={<Formulario onAgregarProducto={agregarProducto} />} />
        <Route path="/productos" element={<Productos listaProductos={listaProductos} />} />
        <Route path="/detalles" element={<Detalles />} />

        

      </Routes>
    </Router>
    </FormularioProvider>

  );
};

export default App;
