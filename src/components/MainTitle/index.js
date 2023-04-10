import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class MainTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
    title: 'Resultados de la encuesta de sueldos 2023.01',
  }

  render() {
    return (
      <div className='main-title-wrapper'>
        <h1 className='main-title'>
          <span className='first-line'>Resultados de la</span><br />
          <span>Encuesta de Sueldos 2023.01</span><br />
          <span alt="Segundo Semestre &trade;">Diciembre - Febrero</span>
        </h1>
      </div>
    )
  }
}

export default MainTitle;