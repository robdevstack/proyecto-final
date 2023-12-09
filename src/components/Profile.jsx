import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/Context';
import { ENDPOINT } from '../config/constans';

const Profile = () => {
  const navigate = useNavigate();
  const { getDeveloper, setDeveloper } = useContext(Context);

  const getDeveloperData = async () => {
    try {
      const token = window.sessionStorage.getItem('token');
      console.log('Token:', token);

      const response = await axios.get(ENDPOINT.users, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const [user] = response.data;
      console.log('User Data:', user);
      setDeveloper({ ...user });
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);

      // Handle unauthorized access
      window.sessionStorage.removeItem('token');
      setDeveloper(null);
      navigate('/');
    }
  };

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');

    // Check if the user is authenticated
    if (!token) {
      navigate('/'); // Redirect to login page if not authenticated
      return;
    }

    // Fetch user data if authenticated
    getDeveloperData();
  }, [navigate]);

  return (
    <div className='py-5'>
      <h1>
        Hola <span className='fw-bold'>{getDeveloper?.email}</span>
      </h1>
    </div>
  );
};

export default Profile;