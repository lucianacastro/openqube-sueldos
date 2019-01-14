import React, { Component } from 'react';

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
          {data.map((category, index) => (
            <React.Fragment key={category + index}>
              <Title titleId={category.title} title={category.title} type='category' />
              {category.data.map((subcategory, index) => (
                <React.Fragment key={subcategory + index}>
                  <Title titleId={subcategory.title} title={subcategory.title} type='subcategory' />
                  {subcategory.data.map((section, index) => (
                    <Section titleId={section.title} title={section.title} key={section + index} data={section.data} />
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