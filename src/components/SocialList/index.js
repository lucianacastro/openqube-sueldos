import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

export default class SocialList extends Component {
  static displayName = "SocialList";

  render() {
    const url = window.location.href;
    const text = encodeURI(`Estos son los resultados de la última encuesta de sueldos de @sysarmy! ${url}`);
    const via = encodeURI('openqube');
    const hashtags = encodeURI('encuestaIT');
    return (
      <ul className='social-list'>
        <li className='social-item twitter'>
          <a href={`https://twitter.com/intent/tweet?text=${text}&via=${via}&hashtags=${hashtags}`}
            className='sharing-twitter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className='social-item facebook'>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} className='social-item-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li className='social-item instagram'>
          <a href='https://www.instagram.com/openqube/' className='social-item-link' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    )
  }
}