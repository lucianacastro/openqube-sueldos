import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../../../Container';
import Tab from './Components/Tab';
import './styles.css';

class Tabs extends Component {
  static displayName = "Tabs";

  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {
    data: ['title1', 'title2', 'title3'],
  }

  state = {
    activeTab: this.props.data[0].title
  };

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className='tabs-wrapper'>
          <ul className='tabs-list'>
            {data.map(item => (
              item.title && <Tab key={item.title} label={item.title} activeTab={this.state.activeTab} onClick={this.onClickTabItem}></Tab>
            ))}
          </ul>
          <div className='tab-content'>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Tabs;