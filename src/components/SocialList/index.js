import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialList extends Component {
  static displayName = "SocialList";

  static propTypes = {
  }
  static defaultProps = {
  }

  render() {

    return (
      <ul className='social-list'>
        <li className='social-item twitter'>
          <a className='social-item-link'>
            <FontAwesomeIcon icon={['fab', 'apple']} />
          </a></li>
        <li className='social-item facebook'>
          <a className='social-item-link'>
            <FontAwesomeIcon icon={['fab', 'apple']} />
          </a>
        </li>
      </ul>
    )
  }
}