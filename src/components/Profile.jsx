import axios from 'axios'
import Context from '../contexts/Context'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constans'

const Profile = () => {
  const navigate = useNavigate()
  const { getDeveloper, setDeveloper } = useContext(Context)

  const getDeveloperData = () => {
    const token = window.sessionStorage.getItem('token');
    console.log('Token:', token);
  
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => {
        console.log('User Data:', user);
        setDeveloper({ ...user });
      })
      .catch(({ response: { data } }) => {
        console.error('Error:', data);
        window.sessionStorage.removeItem('token');
        setDeveloper(null);
        navigate('/perfil');
      });
  };
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwiaWF0IjoxNzAyMDcwNTI0fQ.Sv5dNZ36YqWJ31uVagmqjN5OvXq1BYtRw2F0JrgtaCE'; // Obtén el token del servidor o de donde sea necesario
  window.sessionStorage.setItem('token', token);
  useEffect(getDeveloperData, [])

  return (
    <div className='py-5'>
      <h1>
        Hola <span className='fw-bold'>{getDeveloper?.email}</span>
      </h1>
    </div>
  )
}

export default Profile
