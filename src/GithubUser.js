import React, { useState, useEffect } from 'react';

/* Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03
 into a custom hook called useGithubUser. */

function useGithubUser(username) {
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

  return {
    data: data,
  };
}

export function GithubUser({ username }) {
  
  const { data } = useGithubUser(username);

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
