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

    if (this.state.count <= 0) return;

    this.setState(({count}) => ({
      count: count - 1
    }));
  };


  render() {
    return(
      <Fragment>
        <input type="text" readOnly value={this.state.count} />
        <button className="increment" onClick={this.increment}>+</button>
        <button className="decrement" onClick={this.decrement}>-</button>
      </Fragment>
    )
  }
}

export default Counter;
