import React, { Component } from 'react';
import './styles.css';

class MainContainer extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer;