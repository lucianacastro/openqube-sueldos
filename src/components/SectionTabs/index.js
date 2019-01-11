import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../Container';
import './Styles.css';

class SectionTabs extends Component {
  static propTypes = {
    tabsOptions: PropTypes.array,
  }
  static defaultProps = {
    tabsOptions: [ 'title1', 'title2', 'title3' ],
  }
  render() {
    const { tabsOptions } = this.props;
    return (
      <Container>
        <div className='tabs-section-content'>
          <ul className='tabs-section-tabs-list'>
            {tabsOptions.map(item => (
              <li className='tabs-section-tabs-item'>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    )
  }
}

export default SectionTabs;