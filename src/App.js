import { useState } from 'react';
import { Welcome } from './Welcome ';
import { Container } from './Container';
import { LanguageContext } from './LanguageContext';
import { HookCounter } from './HookCounter';
import { FilteredList } from './FilteredList';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';

export function App() {
  const [language, setLanguage] = useState('en');

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value='en'>English</option>
        <option value='it'>Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title={'React Exercises'}>
          <Welcome age={27} />
          <HookCounter />
          <FilteredList />
        </Container>
      </LanguageContext.Provider>
      <Container>
        <Routes>
          <Route path='/' element={<Welcome name={'CRISTIAN'} />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='users/:username' element={<ShowGithubUser />} />
        </Routes>
      </Container>
    </div>
  );
}
