/* Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component 
for each username entered. The usernames should be added to the array using an input field and a button. */

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function GithubUserList() {
  const [inputValue, setInputValue] = useState();

  function HandleInput(event) {
    setInputValue(event.target.value);
  }


  return (
    <div>
      <Link to={'/users/CristianRmb'}>Cristian</Link>
      <Outlet />
    </div>
  );
}
