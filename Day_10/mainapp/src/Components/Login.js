import React, { useRef } from 'react';

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username.current.value,
      password: password.current.value,
    };

    

    console.log(userData);
  };

  return (
    <>
      <h1>LOGIN FORM</h1>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' id='username' className='username' placeholder='username' ref={username} />

          <input type='password' id='password' className='password' placeholder='password' ref={password} />

          <button type='submit' className='button'>
            LOGIN
          </button>
          <button type='button' className='button'>
            CANCEL
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
