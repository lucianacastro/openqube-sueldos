import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import './styles.css';
import data from '../Landing/data';

class SideNav extends Component {
  static displayName = "SideNav";
  render() {
    return (
      <div className='side-nav-wrapper'>
        <Scrollspy items={data.map(category => category.title)} currentClassName="is-current">

          {data.map((category, index) => (
            <li key={category + index}><a href={'#' + category.title} type='category' >{category.title}</a>
              <Scrollspy items={category.data.map(subcategory => subcategory.title)} currentClassName="is-current">
                {category.data.map((subcategory, index) => (
                  <li key={subcategory + index}><a href={'#' + subcategory.title} type='subcategory' >{subcategory.title}</a>
                    <Scrollspy items={subcategory.data.map(section => section.title)} currentClassName="is-current">
                      {subcategory.data.map((section, index) => (
                        <li><a href={'#' + section.title} key={section + index} data={section.data} >{section.title}</a></li>
                      ))}
                    </Scrollspy>
                  </li>
                ))}
              </Scrollspy>
            </li>
          ))
          }
        </Scrollspy>
      </div>
    )
  }
}

export default SideNav;