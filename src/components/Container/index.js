import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

class Container extends Component {

  static displayName = "Container";

  static propTypes = {
    variant: PropTypes.string,
  }
  static defaultProps = {
    variant: '',
  }

  render() {
    const { variant } = this.props;
    return (
      <div className={cn('container', variant)}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;