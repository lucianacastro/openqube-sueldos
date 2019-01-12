import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../../../Container';
import Tab from './Components/Tab';
import './styles.css';

class Tabs extends Component {
  static displayName = "Tabs";

  static propTypes = {
    tabsList: PropTypes.array,
  }
  static defaultProps = {
    tabsList: ['title1', 'title2', 'title3'],
  }

  state = {
    activeTab: this.props.tabsList[0]
  };

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { tabsList } = this.props;
    return (
      <Container>
        <div className='tabs-wrapper'>
          <ul className='tabs-list'>
            {tabsList.map(item => (
              <Tab item={item} activeTab={this.state.activeTab} onClick={this.onClickTabItem}></Tab>
            ))}
          </ul>
        </div>
      </Container>
    )
  }
}

export default Tabs;