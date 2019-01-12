import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Container from '../Container';
import './styles.css';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    type: PropTypes.oneOf(['category', 'subcategory', 'section']),
  }
  static defaultProps = {
    title: '',
    titleId: '',
    type: 'category'
  }

  renderTitle = () => {
    switch (this.props.type) {
      case 'subcategory':
        return (
          <h2 className={cn('title', this.props.type)} id={this.props.titleId}>
            <a href={'#' + this.props.titleId}>{this.props.title}</a>
          </h2>
        )
      case 'section':
        return (
          < h3 className={cn('title', this.props.type)} id={this.props.titleId} >
            <a href={'#' + this.props.titleId}>{this.props.title}</a>
          </h3 >
        )
      case 'category':
      default:
        return (
          <h1 className={cn('title', this.props.type)} id={this.props.titleId}>
            <a href={'#' + this.props.titleId}>{this.props.title}</a>
          </h1>
        )
    }
  }


  render() {
    return (
      <React.Fragment>
        {this.renderTitle()}
      </React.Fragment>
    )
  }
}

export default Title;