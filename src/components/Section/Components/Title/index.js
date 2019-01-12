import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../../../Container';
import './styles.css';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
  }
  static defaultProps = {
    title: '',
    titleId: '',
  }
  render() {
    return (
      <Container>
        <h1 className='title' id={this.props.titleId}>
          <a href={'#' + this.props.titleId}>{this.props.title}</a>
        </h1>
      </Container>
    )
  }
}

export default Title;