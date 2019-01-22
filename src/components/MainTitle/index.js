import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

class MainTitle extends Component {
    static propTypes = {
        title: PropTypes.string,
    }
    static defaultProps = {
        title: 'Encuesta de sueldos 2019.01',
    }

    render() {
        return (
            <div className='main-title-wrapper'>
                <h1 className='main-title'>{this.props.title}</h1>
            </div>
        )
    }
}

export default MainTitle;