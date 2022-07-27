import React from 'react';

/* Modify the TodoList by adding a "remove" button to each li tag.
When clicked, the event handler should remove corresponding item from the items array. */

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

  resetList = () => {
    this.setState({
      items: [],
    });
  };

  removeHero = (event) => {
    const newArray = this.state.items;
    newArray.splice(event.target.value, 1);
    this.setState({
      items: newArray,
    });
  };

  render() {
    const heroes = this.state.items.map((hero, index) => (
      <div key={Math.random()}>
        <li key={hero + index}>{hero}</li>
        <button value={index} onClick={this.removeHero}>
          Remove {hero}
        </button>
      </div>
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
        <button onClick={this.resetList}>Reset List</button>
      </div>
    );
  }
}

export default TodoList;
