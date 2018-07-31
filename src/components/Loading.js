import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

class Loading extends Component {
  render() {
    return (
      <div className="loader">
        <BarLoader color={'#515356'} loading />
      </div>
    );
  }
}

export default Loading;
