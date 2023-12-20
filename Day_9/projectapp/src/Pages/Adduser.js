import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Services/api'; 

function Adduser() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addUser(data); 
      if (res.status === 201) {
        alert('User added');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
    console.log(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='username'
          placeholder='Username'
          onChange={handleChange}
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn'>
          Add
        </button>
      </form>
    </>
  );
}

export default Adduser;
