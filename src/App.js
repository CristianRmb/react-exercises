import { useState } from 'react';
import { Welcome } from './Welcome ';
import { Container } from './Container';
import Sum from './Sum';
import { ClickCounter } from './ClickCounter';
import Login from './Login';
import { GithubUser } from './GithubUser';
import { CarDetails } from './CarDetails';
import { LanguageContext } from './LanguageContext';

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
          <Sum numbers={[5, 10, 15, 20, 25, 30, 35]} />
          <ClickCounter
            onCounterChange={() => console.log('counter has been incremented ')}
          />
          <Login />
          <GithubUser username={'CristianRmb'} />
          <CarDetails
            initialData={{ model: 'Ford', year: 2000, color: 'blue' }}
          />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}
