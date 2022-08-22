import { Welcome } from './Welcome ';
import { Container } from './Container';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';

export function App() {

  return (
    <div>
        <Container title={'React Exercises'}>
        <Link className='mx-1' to={'/'}>Home</Link>
        <Link className='mx-1' to={'/counter'}>Counter</Link>
        <Link className='mx-1' to={'/users/CristianRmb'}>User</Link>
        <Routes>
          <Route path='/' element={<Welcome name={'CRISTIAN'} />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='users/:username' element={<ShowGithubUser />} />
        </Routes>
      </Container>
    </div>
  );
}
