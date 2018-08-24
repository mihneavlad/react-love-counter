import React, {Component, Fragment} from 'react';

class Counter extends Component {

  constructor(props){
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(({count}) => ({
      count: count + 1
    }));
  };

  decrement = () => {
    this.setState(({count}) => ({
      count: count - 1
    }));
  };

  preventNegative = () => {
    this.setState(({count}) => ({
      count: count > 0
    }));
  };


  render() {
    return(
      <Fragment>
        <input type="text" readOnly value={this.state.count} />
        <button className="increment" onClick={this.increment}>+</button>
        <button className="decrement" onClick={this.decrement.preventNegative}>-</button>
      </Fragment>
    )
  }
}

export default Counter;
