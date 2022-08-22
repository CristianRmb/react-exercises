import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GithubUser } from './GithubUser';

/* Add a new Route to the users/:username path that renders a ShowGithubUser component 
that receives the username as a path parameter and renders the GithubUser component from 
useEffect 03 by passing it the received username. */

export function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <GithubUser username={username} />
      <Link to={'/users'}>Back</Link>
    </div>
  );
}
