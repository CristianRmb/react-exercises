import React from 'react';
import { Welcome } from './Welcome ';
import { Container } from './Container';
import Sum from './Sum';
import { ClickCounter } from './ClickCounter';
import Login from './Login';
import { Counter } from './Counter';
import { GithubUser } from './GithubUser';
import { CarDetails } from './CarDetails';

export class App extends React.Component {
  state = {
    counter: true,
  };

  handleCouner = () => {
    this.setState({
      counter: false,
    });
  };

  render() {
    return (
      <Container title={'React Exercises'}>
        <Welcome age={27} />
        <Sum numbers={[5, 10, 15, 20, 25, 30, 35]} />
        <ClickCounter
          onCounterChange={() => console.log('counter has been incremented ')}
        />
        <Login />
        {this.state.counter && <Counter />}
        {this.state.counter && (
          <button onClick={this.handleCouner}>Remove Counter</button>
        )}
        <GithubUser username={'CristianRmb'} />

        <CarDetails
          initialData={{ model: 'Ford', year: 2000, color: 'blue' }}
        />
      </Container>
    );
  }
}
