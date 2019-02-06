import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import StickyBox from 'react-sticky-box';
import slugify from 'slugify';

import './styles.css';
import data from '../Landing/data';

class SideNav extends Component {
  static displayName = "SideNav";
  render() {
    return (
      <div className='sticky-wrapper'>
        <StickyBox offsetTop={20} offsetBottom={20} bottom={false}>
          <div className='side-nav-wrapper'>
            <Scrollspy className='side-nav' items={data.map(category => slugify(category.title))} currentClassName="is-current" offset={-200}>
              {data.map((category, categoryIndex) => (
                <li key={categoryIndex}><a className='item-title' href={`#${slugify(category.title)}`} type='category' >{category.title}</a>
                  <Scrollspy items={category.data && category.data.map(subcategory => slugify(`${category.title} ${subcategory.title}`))} currentClassName="is-current">
                    {category.data && category.data.map((subcategory, subcategoryIndex) => (
                      <li key={`${categoryIndex}-${subcategoryIndex}`}>
                        <a className='item-title' href={`#${slugify(`${category.title} ${subcategory.title}`)}`} type='subcategory' >{subcategory.title}</a>
                      </li>
                    ))}
                  </Scrollspy>
                </li>
              ))
              }
            </Scrollspy>
          </div>
        </StickyBox>
      </div>
    )
  }
}

export default SideNav;