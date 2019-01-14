import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  static displayName = "Header";
  render() {
    return (
      <header>
        <div className='container'>
          <div className='header-brand'>
            <a href='/'>
              <img src='./logo-text.png' className='header-logo-img' alt='logo' />
            </a>
            <div className='header-slogan'>
              <span className="header-slogan-slash">/</span>
              <span className="header-slogan-text">Lo que no te cuentan en la entrevista</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;