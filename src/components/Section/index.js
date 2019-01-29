import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Tabs from './Components/Tabs';

class Section extends Component {
  static displayName = "Section";
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    id: PropTypes.string,
    data: PropTypes.array,
  }
  static defaultProps = {
    title: '',
    titleId: '',
    id: '',
    data: [],
  }
  render() {
    return (
      <div id={this.props.id} className='section-wrapper'>
        <Title title={this.props.title} type='section' titleId={this.props.titleId}/>
        <Tabs data={this.props.data} />
      </div>
    )
  }
}

export default Section;