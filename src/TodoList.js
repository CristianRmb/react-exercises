import React from 'react';

/* Create a TodoList component that renders a ul tag with a li tag for each item contained 
in the items state variable. The items state variable should be an array of strings. 
The TodoList component should also contain an input tag and a button. When the button is clicked, 
the event handler should add the value of the input tag to the items array. */

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
    });
  };

  render() {
    const heroes = this.state.items.map((hero, index) => (
      <li key={hero + index}>{hero}</li>
    ));
    return (
      <div>
        <ul>{heroes}</ul>
        <input name='hero' type={'text'} onChange={this.handleInputChange} />
        <button onClick={this.addHero}>Add Hero</button>
      </div>
    );
  }
}

export default TodoList;
