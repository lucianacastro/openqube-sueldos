import React, { Component } from 'react';
import slugify from 'slugify';

import Container from '../Container';
import Section from '../Section';
import Title from '../Title';
import SideNav from '../SideNav';
import License from '../License';
import CTAButton from '../CTAButton';
import './styles.css';

import data from './data';

class Landing extends Component {
  static displayName = "Landing";

  render() {
    return (
      <Container>
        <SideNav />
        <div className='right-wrapper'>
          {data.map((category, categoryIndex) => (
            <section
              id={slugify(category.title)}
              key={categoryIndex}
              className='category-section'>
              <Title titleId={slugify(category.title)} title={category.title} type='category' />
              {category.content && <div className='category-section-content'>{category.content}</div>}
              {category.data && category.data.map((subcategory, subcategoryIndex) => (
                <section
                  id={slugify(`${category.title} ${subcategory.title}`)}
                  key={`${categoryIndex}-${subcategoryIndex}`}
                  className='subcategory-section'
                >
                  <Title titleId={slugify(`${category.title} ${subcategory.title}`)} title={subcategory.title} type='subcategory' />
                  {subcategory.content && <div className='subcategory-section-content'>{subcategory.content}</div>}
                  {subcategory.data && subcategory.data.map((section, sectionIndex) => (
                    <Section
                      id={slugify(`${subcategory.title} ${subcategory.title} ${section.title}`)}
                      key={`${categoryIndex}-${subcategoryIndex}-${sectionIndex}`}
                      data={section.data}
                      title={section.title}
                      titleId={slugify(`${category.title} ${subcategory.title} ${section.title}`)}
                    />
                  ))}
                </section>
              ))}
            </section>
          ))
          }
          
          <hr />
          <License />
          <br />
          <CTAButton />
        </div>
      </ Container>
    )
  }
}

export default Landing;