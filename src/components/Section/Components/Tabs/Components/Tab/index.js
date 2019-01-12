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

  onClick = () => {
    const { item, onClick } = this.props;
    onClick(item);
  }

  render() {
    const { item, activeTab } = this.props;
    return (
      <li onClick={this.onClick} className={cn('tabs-item', activeTab === item ? 'active' : '')} >
        {item}
      </li>
    )
  }
}

export default Tab;