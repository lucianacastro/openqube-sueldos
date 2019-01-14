import React, { Component } from 'react';
import './styles.css';

class Container extends Component {
  static displayName = "Container";
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}

export default Container;