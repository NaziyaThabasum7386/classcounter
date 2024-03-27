import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2 data-testid="count">Count: {this.state.count}</h2>
        <button onClick={this.handleIncrement} data-testid="increment-button">Increment</button>
        <button onClick={this.handleDecrement} data-testid="decrement-button">Decrement</button>
      </div>
    );
  }
}

export default App;
