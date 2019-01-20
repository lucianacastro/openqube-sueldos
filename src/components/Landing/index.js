import React, { Component } from 'react';

import Container from '../Container';
import Section from '../Section';
import Title from '../Title';
import SideNav from '../SideNav';
import './styles.css';

import data from './data';

class Landing extends Component {
  static displayName = "Landing";

  render() {
    return (
      <Container>
        <SideNav />
        <div className='right-wrapper'>
          {data.map((category, index) => (
            <section id={category.title} key={category + index} >
              <Title titleId='' title={category.title} type='category' />
              {category.data.map((subcategory, index) => (
                <section id={subcategory.title} key={subcategory + index}>
                  <Title title={subcategory.title} type='subcategory' />
                  {subcategory.data.map((section, index) => (
                    <Section id={section.title} title={section.title} key={section + index} data={section.data} />
                  ))}
                </section>
              ))}
            </section>
          ))
          }
        </div>
      </ Container>
    )
  }
}

export default Landing;