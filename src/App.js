import React from 'react';
// import { Counter } from './Counter';
import { Message } from './Message';
// import { Welcome } from './Welcome ';
// import { ClickCounter } from './ClickCounter';
// import { ClickTracker } from './ClickTracker';
// import { InteractiveWelcome } from './InteractiveWelcome';
// import { Login } from './Login';
// import { UncontrolledLogin } from './UncontrolledLogin';
import TodoList from './TodoList';
import { Container } from './Container';

export class App extends React.Component {
  render() {
    return (
      <Container title={'Title'}>
        <Message />
        {/* <Welcome name='John' age='19' /> */}
        {/* <Counter />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />*/}
        <TodoList
          render={(items, removeHero) => {
            return (
              <div>
                <ul>
                  {items.map((hero, index) => (
                    <div key={Math.random()}>
                      <li key={hero + index}>{hero}</li>
                      <button value={index} onClick={removeHero}>
                        Remove {hero}
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            );
          }}
        ></TodoList>
      </Container>
    );
  }
}
