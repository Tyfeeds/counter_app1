import React, { Component } from 'react';

class App extends Component {
  state ={
    count:0
  };
  increment =() =>{
    this.setState({
      count:this.state.count +1
    });
  };

  render() {
    return (
      <div>
      <h2>Simple Counter_App using class</h2>
      <button id="buttons" onClick ={ this.increment}>clicked {this.state.count} times
      </button>
      </div>
    )
};

}
export default App;
