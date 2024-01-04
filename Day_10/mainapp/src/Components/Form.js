import React, { useRef, useState } from 'react';

function Form() {
  const username = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const email = useRef(null);
  const mob = useRef(null);
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmpassword: '',
    email: '',
    mob: ''
  });

  const login = (e) => {
    e.preventDefault();

    const data = {
      username: username.current.value,
      password: password.current.value,
      confirmpassword: confirmpassword.current.value,
      email: email.current.value,
      mob: mob.current.value
    };

    if (data.username.length === 0) {
      setErrors({ ...errors, username: 'Username is empty!' });
    } else if (data.username.length < 6) {
      setErrors({ ...errors, username: 'Min 6 characters!' });
    }

    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
      setErrors({ ...errors, email: 'Invalid email' });
    }

    else if (data.password !== data.confirmpassword) {
      setErrors({ ...errors, confirmpassword: 'Passwords do not match' });
    }

    else if (isNaN(data.mob) || data.mob.length !== 10) {
      setErrors({ ...errors, mob: 'Mobile number should be 10 digits' });
    } else {
      setErrors({ ...errors, mob: '' });
    }
  };

  return (
    <>
      <h1>SIGNUP FORM</h1>
      <div className='container'>
        <form className='form' onSubmit={login}>
          <input type='text' id='username' className='username' placeholder='username' ref={username} />
          {errors.username === '' ? '' : <span className='error-comp'>{errors.username}</span>}

          <input type='text' id='email' className='email' placeholder='email' ref={email} />
          {errors.email === '' ? '' : <span className='error-comp'>{errors.email}</span>}

          <input type='password' id='password' className='password' placeholder='password' ref={password} />
          <input type='password' id='confirmpassword' className='password' placeholder='confirm password' ref={confirmpassword} />
          {errors.confirmpassword === '' ? '' : <span className='error-comp'>{errors.confirmpassword}</span>}

          <input type='text' id='mobile' className='mobile' placeholder='mobile' ref={mob} />
          {errors.mob === '' ? '' : <span className='error-comp'>{errors.mob}</span>}

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

export default Form;
