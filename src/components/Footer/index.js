import React, { Component } from 'react';
import Container from '../Container';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <footer>
        <div className='footer-top'>
          <Container>
            <div className='footer-top-left-content'>
              <img src='https://openqube.io/img/logo-text-gray.png' alt='logo-openqube' />
              <p className='footer-top-left-content-text'>openqube.io es una plataforma colaborativa en la que empleados y ex empleados pueden calificar y escribir reseñas anónimas para brindar información de calidad sobre las empresas</p>
            </div>
            <div className='footer-top-right-content'>
              <h2 className='footer-top-right-content-information'>Información</h2>
              <a href='mailto:hola@openqube.io' className='footer-top-right-content-contact'>Contacto</a>
            </div>
          </Container>
        </div>
        <div className='footer-bottom'>
          <Container>
            <div className='footer-bottom-left-content'>
              <p className='footer-bottom-right-content-text'>© <a href='/'>openqube</a>, 2017 Todos los derechos reservados.</p>
            </div>
          </Container>
        </div>
      </footer>
    )
  }
}

export default Header;