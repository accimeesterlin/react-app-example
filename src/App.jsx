import React from 'react';
import Header from './Header';

/*  
  Components

  Class Component
  Functional Component
  Higher Order Component (Advanced)


  JSX - JavaScript XML

*/

// One data flow

// Props

// Class Component
// Smart, Container, Stateful
class App extends React.Component {

  state = {
    username: 'accimeesterlin',
    age: 5,
    fruit: ['Orange', 'Pineapple', 'Mango'],
    address: {
      zip: 30098,
      street: '9098 Moving Forward',
      phone: '404958'
    }
  };

  componentDidMount = () => {
    // TODO
    // Ajax Calls
  };


  changeUserName = () => {
    const fruit = this.state.fruit;
    this.setState({ fruit: [...fruit, 'Lemon']});
  };

  displayFruit = () => this.state.fruit.map((element, index) => (
    <li> {element}  </li>
  ));

  // CamelCases for Events
  render() {

    const result = 'Taco';
    let x = 'I am Mr.';

    console.log('State: ', this.state);

    // JSX
    return [
      <div>
        <h2>Hello World</h2>
        <p> {result} </p>

        <button onClick={this.changeUserName}>Change Username</button>
      </div>,


      <div>
        <p>My username is {this.state.username}</p>
        <p>I am {this.state.age} years old </p>

        <Header username = { this.state.username } age = {this.state.age}/>

        <ul>
          {this.displayFruit()}
        </ul>
      </div>
    ];
  }
};





// Higher Order Component - advanced
function MainComponent(Subcomponent) {
  return class extends React.Component {

    render() {
      return <Subcomponent />
    }
  }
}

// const GeneratedComponent = MainComponent(Header);

export default App;