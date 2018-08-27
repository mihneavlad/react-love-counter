import React, {Component, Fragment} from 'react';

class Hearts extends Component {

  constructor(props){
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return(
    <Fragment>
      <div className="hearts-container">
        <Hearts className="hearts">{this.props.count}
        </Hearts>
      </div>
    </Fragment>
  )
  }
}

export default Hearts;
