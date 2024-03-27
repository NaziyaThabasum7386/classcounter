import React from "react";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start,
    };
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return {
        count: prevState.count - (this.props.jump || 1),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h3>Count : {this.state.count}</h3>
        
        <button
          onClick={(e) => {
            this.setState((prevState) => {
              return {
                count: prevState.count + (this.props.jump || 1),
              };
            });
          }}
        >
          Increment
        </button>
        <button onClick={this.handleClick}>Decrement</button>
       
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter start={0} />
      </div>
    );
  }
}

export default App;
