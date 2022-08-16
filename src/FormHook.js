import React, { useState } from 'react';

function useFormState() {
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

  return {
    data,
    handleInpuChange: handleInpuChange,
  };
}

export function FormHook() {
  const { data, handleInpuChange } = useFormState();

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
    </form>
  );
}
