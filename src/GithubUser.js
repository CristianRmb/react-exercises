import React from 'react';
import useSWR from 'swr';
import { useState } from 'react';

/* Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked. */

function useGithubUser(username) {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
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

export function GithubUser({username}) {

  const { data, error, loading, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Refetch data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
