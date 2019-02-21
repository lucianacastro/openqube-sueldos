import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class CTAButton extends Component {
  static displayName = "CTAButton";

  render() {

    return (
      <button className='cta'>
        <a className='cta-link' href='https://openqube.io/'>Calificá tu empresa</a>
      </button>
    )
  }
}