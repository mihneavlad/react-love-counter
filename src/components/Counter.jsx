import React, {Component, Fragment} from 'react';

class Counter extends Component {
  render() {
    return(
      <Fragment>
        <input type="text"/>;
        <button className="increment">+</button>
      </Fragment>
    )
  }
}

export default Counter;
