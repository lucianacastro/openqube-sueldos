import React, { Component } from 'react';
import './Styles.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <div className='header-brand'>
            <a href='/'>
              <img src='https://openqube.io/img/logo-text.png' className='header-logo-img' />
            </a>
            <div className='header-slogan'>
              <span className="header-slogan-slash" data-reactid="12">/</span>
              <span class="header-slogan-text" data-reactid="13">Lo que no te cuentan en la entrevista</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;