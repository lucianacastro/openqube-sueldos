import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class License extends Component {
  static displayName = "License";

  render() {

    return (
      <p className="license">
          <a className="license-image-container" rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
          <br />
          Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
      </p>
    )
  }
}