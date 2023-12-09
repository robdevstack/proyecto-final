import Post from './Post';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../contexts/Context';

const Posts = ({ posts }) => {
  const { getDeveloper } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');

    if (!token || !getDeveloper) {
      navigate('/'); 
    }
  }, [navigate, getDeveloper]);

  return (
    <div className="App">
      <h2 className="py-5 text-center">Productos</h2>
      <div className="row m-auto px-5">
        <div className="container">
          <div className="row">
            {posts?.map((post) => (
              <div key={post} className="col-12 col-md-6 col-lg-4 mb-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;