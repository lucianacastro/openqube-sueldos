import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import StickyBox from "react-sticky-box";

import './styles.css';
import data from '../Landing/data';

class SideNav extends Component {
  static displayName = "SideNav";
  render() {
    return (
      <div className='sticky-wrapper'>
        <StickyBox offsetTop={20} offsetBottom={20} bottom={false}>
          <div className='side-nav-wrapper'>
            <Scrollspy className='side-nav' items={data.map(category => category.title)} currentClassName="is-current">

              {data.map((category, index) => (
                <li key={category + index}><a className='item-title' href={'#' + category.title} type='category' >{category.title}</a>
                  <Scrollspy items={category.data.map(subcategory => subcategory.title)} currentClassName="is-current">
                    {category.data.map((subcategory, index) => (
                      <li key={subcategory + index}><a className='item-title' href={'#' + subcategory.title} type='subcategory' >{subcategory.title}</a>
                        {/*<Scrollspy items={subcategory.data.map(section => section.title)} currentClassName="is-current">
                          {subcategory.data.map((section, index) => (
                            <li><a className='item-title' href={'#' + section.title} key={section + index} data={section.data} >{section.title}</a></li>
                          ))}
                        </Scrollspy>*/}
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