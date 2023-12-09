import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa el enrutador
import Form from './components/Form';
import Posts from './components/Posts';
import Login from './components/Login';
import Registro from './components/Registro';
import Perfil from './components/Profile'
import useDeveloper from './hooks/useDeveloper'
import Context from './contexts/Context'
import Navigation from './components/Navigation';
import Home from './components/Home';

const urlBaseServer = 'http://localhost:3000';

const App = () => {
  const [titulo, setTitulo] = useState('');
  const [imgSrc, setImgSRC] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(`${urlBaseServer}/posts`);
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { titulo, url: imgSrc, precio, descripcion };
    await axios.post(`${urlBaseServer}/posts`, post);
    getPosts();
  }
  ;

  useEffect(() => {
    getPosts();
  }, []);

  const globalState = useDeveloper()

  // ruta /form para formulario y /posts para los productos creados desde form

  return (
    <Context.Provider value={globalState}>
    <Router>
    <Navigation />
        <Routes>
        < Route path="/" element={ <Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registro />} />
          <Route
            path="/form"
            element={<Form setTitulo={setTitulo} setImgSRC={setImgSRC} setPrecio={setPrecio} setDescripcion={setDescripcion} agregarPost={agregarPost} />}
          />
          <Route
            path="/posts"
            element={<Posts posts={posts} />}
          />
          <Route path='/perfil' element={<Perfil />} />

        </Routes>
  </Router>
  </ Context.Provider>
  );
};

export default App;
