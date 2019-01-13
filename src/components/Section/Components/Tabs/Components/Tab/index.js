import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

class Tab extends Component {
  static displayName = "Tab";

  static propTypes = {
    label: PropTypes.string,
    labelIndex: PropTypes.number,
    activeTab: PropTypes.string,
    onClick: PropTypes.func
  }
  static defaultProps = {
    label: '',
    activeTab: '',
  }

  onClick = () => {
    const { label, labelIndex, onClick } = this.props;
    onClick(label, labelIndex);
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