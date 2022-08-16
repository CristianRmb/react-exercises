import React, { useState } from 'react';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleInpuChange(e) {
    const { name, type, value, checked } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function resetInput() {
    setData({
      username: '',
      password: '',
      remember: false,
    });
  }

  return (
    <form>
      <input
        onChange={handleInpuChange}
        value={data.username}
        name='username'
        placeholder='Username'
      />
      <input
        onChange={handleInpuChange}
        value={data.password}
        type='password'
        name='password'
        placeholder='Password'
      />
      <input
        onChange={handleInpuChange}
        value={data.remember}
        type='checkbox'
        name='remember'
      />
      <button onClick={resetInput}>Reset</button>
    </form>
  );
}

export default Login;
