import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
          <h3 className={cn('title', this.props.type)} id={this.props.titleId}>
            <a href={'#' + this.props.titleId}>{this.props.title}</a>
          </h3>
        )
      case 'section':
        return (
          <h4 className={cn('title', this.props.type)} id={this.props.titleId} >
            <a href={'#' + this.props.titleId}>{this.props.title}</a>
          </h4>
        )
      case 'category':
      default:
        return (
          <div className='category-title-wrapper'>
            <div className='color-bar'>
              <span className='color-bar-section-1' />
              <span className='color-bar-section-2' />
              <span className='color-bar-section-3' />
            </div>
            <h2 className={cn('title', this.props.type)} id={this.props.titleId}>
              <a href={'#' + this.props.titleId}>{this.props.title}</a>
            </h2>
          </div>
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