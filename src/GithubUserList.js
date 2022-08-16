/* Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component 
for each username entered. The usernames should be added to the array using an input field and a button. */

import React, { useState, useEffect } from 'react';
import { GithubUser } from './GithubUser';

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
      <input name='username' value={inputValue} onChange={HandleInput} />
      <button onClick={AddUsername}>Add Username</button>
      <ul>
        {arrayUsername.map((name, index) => (
          <div key={name + index}>
            <GithubUser username={name} />
          </div>
        ))}
      </ul>
    </div>
  );
}
