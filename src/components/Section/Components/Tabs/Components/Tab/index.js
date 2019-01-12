import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

class Tab extends Component {
  static displayName = "Tab";

  static propTypes = {
    item: PropTypes.string,
    activeTab: PropTypes.string,
    onClick: PropTypes.func
  }
  static defaultProps = {
    item: '',
    activeTab: '',
  }

  onClick = (event) => {
    const { item, onClick } = this.props;
    onClick(item);
    event.preventDefault();
  }

  render() {
    const { item, activeTab } = this.props;
    return (
      <li className={cn('tabs-item', activeTab === item ? 'active' : '')} >
        <a href='' onClick={this.onClick} className='tabs-item-link'> {item} </a>
      </li>
    )
  }
}

export default Tab;