import React from 'react';

/* Modify the TodoList component so that the input clears every time a Todo is added to the items array. */

class TodoList extends React.Component {
  state = {
    items: ['Batman', 'Superman', 'Hulk'],
    newHero: '',
  };

  handleInputChange = (event) => {
    this.setState({
      newHero: event.target.value,
    });
  };

  addHero = () => {
    const heroList = this.state.items;
    heroList.push(this.state.newHero);
    this.setState({
      items: heroList,
      newHero: '',
    });
  };

  render() {
    const heroes = this.state.items.map((hero, index) => (
      <li key={hero + index}>{hero}</li>
    ));
    return (
      <div>
        <ul>{heroes}</ul>
        <input
          value={this.state.newHero}
          name='hero'
          type={'text'}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addHero}>Add Hero</button>
      </div>
    );
  }
}

export default TodoList;
