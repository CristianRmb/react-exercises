import React from 'react';

/* Modify the TodoList component so that, instead of rendering the items array within the ul tag,
it calls the function passed to its render prop, passing it the items array as a parameter, 
as well as the function required to delete the item. 
Pass a render prop to the TodoList component to correctly render and interact with the items array. */

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
    return (
      <div>
        <div>{this.props.render(this.state.items, this.removeHero)}</div>

        {/* <ul>
          {this.state.items.map((hero, index) => (
            <div key={Math.random()}>
              <li key={hero + index}>{hero}</li>
              <button value={index} onClick={this.removeHero}>
                Remove {hero}
              </button>
            </div>
          ))}
        </ul> */}

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
