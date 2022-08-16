import React, { useState, useEffect } from 'react';

/* Create a GithubUser component that fetches the data of the username passed as a prop, and renders some 
of the data within a div tag. The API to query is https://api.github.com/users/${username}. */

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);

  return (
    <div>
      {data && (
        <ul>
          {' '}
          <h1>{data.name}</h1>
          <h2>{username}</h2>
          <li>Public Repos: {data.public_repos}</li>
          <li>Email: {data.email}</li>
        </ul>
      )}
    </div>
  );
}
