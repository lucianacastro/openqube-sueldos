import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Tab from './Components/Tab';
import './styles.css';

// recharts components
import Barh from '../Barh';
import Pie from '../Pie';
import Line from '../Line';
import Area from '../Area';
import MapArgentina from '../MapArgentina';


class Tabs extends Component {
  static displayName = "Tabs";

  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {
    data: ['title1', 'title2', 'title3'],
  }

  state = {
    activeTab: this.props.data[0].title,
    activeTabIndex: 0
  };

  onClickTabItem = (tab, tabIndex) => {
    this.setState({ activeTab: tab, activeTabIndex: tabIndex });
  }

  getComponent(tabItem) {
    if (!tabItem.props || !tabItem.props.data) {
      console.error('Invalid component props, missing data.', tabItem);
      return null;
    }
    
    switch (tabItem.component) {
      case 'Barh':
        return <Barh {...tabItem.props} />;
      case 'Pie':
        return <Pie {...tabItem.props} />;
      case 'Line':
        return <Line {...tabItem.props} />;
      case 'Area':
        return <Area {...tabItem.props} />;
      case 'MapArgentina':
        return <MapArgentina {...tabItem.props} />;
      default: 
        return null;
    }
  }

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className='tabs-wrapper'>
          {data.length > 1 &&
            <ul className='tabs-list'>
              {data.map((item, index) => (
                <Tab key={item.title + index} label={item.title} labelIndex={index} activeTab={this.state.activeTab} onClick={this.onClickTabItem}></Tab>
              ))}
            </ul>
          }
          {data.map((item, index) => (
            index === this.state.activeTabIndex &&
            <div className='tab-content' key={item + index}>
              <div className='tab-content-content'>{item.content}</div>
              {this.getComponent(item)}
              <div className='tab-content-caption'>{item.caption}</div>
              <div className='tab-content-description'>{item.description}</div>
            </div>
          ))
          }

        </div>
      </React.Fragment>
    )
  }
}

export default Tabs;