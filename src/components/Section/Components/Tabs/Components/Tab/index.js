import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

class Tab extends Component {
  static displayName = "Tab";

  static propTypes = {
    label: PropTypes.string,
    activeTab: PropTypes.string,
    onClick: PropTypes.func
  }
  static defaultProps = {
    label: '',
    activeTab: '',
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { label, activeTab } = this.props;
    return (
      <li onClick={this.onClick} className={cn('tabs-item', activeTab === label ? 'active' : '')} >
        {label}
      </li>
    )
  }
}

export default Tab;