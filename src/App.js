import { useState } from 'react';
import { Welcome } from './Welcome ';
import { Container } from './Container';
import { LanguageContext } from './LanguageContext';
import { HookCounter } from './HookCounter';

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
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}
