import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Container from '../Container';
import SectionTitle from '../SectionTitle';
import SectionTabs from '../SectionTabs';
import './Styles.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    iconUrl: PropTypes.string,
  }
  static defaultProps = {
    title: '',
    titleId: '',
    
  }
  render() {
    return (
      <Container>
        <SectionTitle title={this.props.title} titleId={this.props.titleId}/>
        <SectionTabs />
      </Container>
    )
  }
}

export default Section;