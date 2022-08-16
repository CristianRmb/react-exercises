import React from 'react';
import { Message } from './Message';
import { Welcome } from './Welcome ';
import TodoList from './TodoList';
import { Container } from './Container';
import { LanguageContext } from './LanguageContext';
import { DisplayLanguage } from './DisplayLanguage';
import Sum from './Sum';
import { ClickCounter } from './ClickCounter';
import Login from './Login';

export class App extends React.Component {
  state = {
    language: 'en',
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <Container title={'React Exercises'}>
        <Welcome age={27} />
        <Sum numbers={[5, 10, 15, 20, 25, 30, 35]} />
        <ClickCounter />
        <Login />
      </Container>
    );
  }
}
