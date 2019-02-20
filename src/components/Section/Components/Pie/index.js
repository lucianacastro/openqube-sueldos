import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie as _Pie,
  Cell,
  Tooltip,
} from 'recharts';

import './styles.css';
import { COLORS2 as COLORS } from '../chartsUtils';
import CustomizedTooltip from '../CustomizedTooltip';

class Pie extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isPercentual: PropTypes.bool,
    isLogScale: PropTypes.bool,
  }

  getDataKeys() {
    return this.props.data
      .reduce((dataKeys, row) => [...dataKeys, ...Object.keys(row)], [])
      .filter((value, index, self) => self.indexOf(value) === index) // unique keys
      .filter(value => value !== 'name');
  }

  getDataKeyColor(index) {
    return COLORS[index] || COLORS[COLORS.length - 1];
  }

  toPercent(decimal, fixed = 0) {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }

  toPercentLabel({ percent: decimal, name }, fixed = 0) {
    return `${name}: ${(decimal * 100).toFixed(fixed)}%`;
  };

  render() {
    const { data, isPercentual = false } = this.props;

    return (
      <PieChart width={400} height={250} className='pie-chart'>
        <_Pie
          isAnimationActive={false} data={data} cx={200} cy={110} outerRadius={75} fill={COLORS[0]}
          label={isPercentual ? this.toPercentLabel : null}
          dataKey="value">
          {
            data.map((row, index) => <Cell fill={COLORS[index % COLORS.length]} key={index} />)
          }
        </_Pie>
        <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : null} />
      </PieChart>
    );
  }
}

export default Pie;