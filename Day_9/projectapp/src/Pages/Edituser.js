import React from 'react'
import { useState } from 'react'
import { addUser, editUser } from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { getUserId } from '../Services/api';
import { useEffect } from 'react';
function Edituser() {
  const navigate=useNavigate();
  const {id}=useParams()
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  
  const fetchUser= async()=>
    {
     try{
      const res=await getUserId(id)
      setData(res.data)
     }
     catch(e)
     {
      console.log(e)
     }
  }
  console.log(id)

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await editUser(id,data); // Make sure you have an addUser function
      if (res.status === 200) {
        alert('User updated');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>
  {
    fetchUser()
  },[])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={data.username}
          id='username'
          placeholder='Username'
          onChange={handleChange}
        />
        <input
          type='password'
          value={data.password}
          id='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn'>
          save
        </button>
      </form>
    </>
  )
}
export default Edituser