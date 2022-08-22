import { Welcome } from './Welcome ';
import { Container } from './Container';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { GithubUserList } from './GithubUserList';

/* Add a Route to the users path that shows the GihubUserList component from useEffect 04. 
Modify it so that instead of showing the GithubUser component for each username entered, 
it shows a link to a nested route that shows the ShowGithubUser component. In doing so, 
remove the /users/:username route from the App component, and add a new nested route within the /users route. */

export function App() {
  return (
    <div>
      <Container title={'React Exercises'}>
        <Link className='mx-1' to={'/'}>
          Home
        </Link>
        <Link className='mx-1' to={'/counter'}>
          Counter
        </Link>
        <Link className='mx-1' to={'/users'}>
          User
        </Link>
        <Link to={`/${Math.random()}`}>Random path</Link>
        <Routes>
          <Route path='/' element={<Welcome name={'CRISTIAN'} />} />
          <Route path='users' element={<GithubUserList />}>
            <Route path=':username' element={<ShowGithubUser />} />
          </Route>
          <Route path='/counter' element={<Counter />} />
          <Route
            path='*'
            element={
              <div>
                <p>Not found</p>
              </div>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}
