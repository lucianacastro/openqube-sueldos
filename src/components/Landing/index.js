import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Section from '../Section';
import Title from '../Title';
import SideNav from '../SideNav';
import './styles.css';

import data from './data';

class Landing extends Component {

  render() {
    return (
      <Container>
        <SideNav />
        <div className='right-wrapper'>
          {data.map(category => (
            <React.Fragment>
              <Title title={category.title} type='category' />
              {category.data.map(subcategory => (
                <React.Fragment>
                  <Title title={subcategory.title} type='subcategory' />
                  {subcategory.data.map(section => (
                    <Section title={section.title} data={section.data} />
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))
          }
        </div>
      </ Container>
    )
  }
}

export default Landing;