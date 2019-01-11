import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../Container';
import './Styles.css';

class SectionTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    iconUrl: PropTypes.string,
  }
  static defaultProps = {
    title: '',
    titleId: '',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Purple_circle_100%25.svg',
  }
  render() {
    return (
      <Container>
        <h1 className='section-title' id={this.props.titleId}>
          <img href={this.props.iconUrl}/>
          <a src={'#' + this.props.titleId}>{this.props.title}</a>
        </h1>
      </Container>
    )
  }
}

export default SectionTitle;