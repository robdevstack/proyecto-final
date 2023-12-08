import React from 'react';

const Post = ({ post: {  titulo, img, precio, descripcion } }) => {
  return (
  <div className="card">
    <img className="card-img-top" src={img} alt={titulo} />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p>${precio}</p>
      <a href="#" class="btn btn-primary">Ver Más</a>
    </div>
  </div>
  
  );
};

export default Post;