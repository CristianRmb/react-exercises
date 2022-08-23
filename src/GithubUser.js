import React from 'react';
import useSWR from 'swr';

/* Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch 
the data of a Github user. */

function useGithubUser(username) {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher,
  );

  function fetchGithubUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser: fetchGithubUser,
  };
}

export function GithubUser({ username }) {
  const { data, error, loading, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
