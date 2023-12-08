import React from 'react';
import Post from './Post';

const Posts = ({ posts, like, eliminarPost }) => {
  return (
    <div className="App">
    <h2 className="py-5 text-center"> Productos</h2>
    <div className="row m-auto px-5">
    <div className="container">
      <div className="row">
        {posts?.map((post) => (
          <div key={post} className="col-12 col-md-6 col-lg-4 mb-4">
            <Post post={post} like={like} eliminarPost={eliminarPost} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Posts;