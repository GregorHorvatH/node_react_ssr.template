import React, { Component } from 'react';

class Mongo extends Component {
  state = {
    message: undefined
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <p>mongo</p>
        <p>{message}</p>
      </div>
    );
  }
}

export default Mongo;
