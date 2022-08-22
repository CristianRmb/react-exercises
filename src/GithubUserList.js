/* Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component 
for each username entered. The usernames should be added to the array using an input field and a button. */

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function GithubUserList() {
  const [arrayUsername, setArrayUsername] = useState([]);
  const [inputValue, setInputValue] = useState();

  function HandleInput(event) {
    setInputValue(event.target.value);
  }

  function AddUsername() {
    setArrayUsername((arrayUsername) => [...arrayUsername, inputValue]);
    setInputValue(''); // reset input
  }

  return (
    <div>
      <Link to={'/users/CristianRmb'}>Show User</Link>
      <Outlet />
    </div>
  );
}
