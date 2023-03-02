import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area as _Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import './styles.css';
import { COLORS2 as COLORS } from '../chartsUtils';

class Area extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    xDataKey: PropTypes.string.isRequired,
    yDataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPercentual: PropTypes.bool,
  }

  state = {
    collapsed: true,
  }

  toPercent(decimal, fixed = 0) {
    return `${(decimal * 100 * 100).toFixed(fixed) / 100}%`;
  }

  toNumber(decimal, fixed = 2) {
    return `${(decimal * 100).toFixed(fixed) / 100}`;
  }

  getDataKeyColor(index) {
    return COLORS[index] || COLORS[COLORS.length - 1];
  }

  render() {
    const { data, xDataKey, yDataKeys, isPercentual } = this.props;

    return (
      <AreaChart width={620} height={400} data={data}
        margin={{ top: 10, right: 0, left: 5, bottom: 10 }}
        className='area-chart'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis tickFormatter={isPercentual ? this.toPercent : this.toNumber} />
        <Tooltip formatter={isPercentual ? this.toPercent : this.toNumber} />
        {!yDataKeys.includes('value') ? <Legend /> : null}
        {yDataKeys.map((dataKey, i) => (
          <_Area type='monotone' dataKey={dataKey} stroke={COLORS[i]} fill={COLORS[i]} key={`${dataKey}-${i}`} stackId='1' />
        ))}
      </AreaChart>
    );
  }
}

export default Area;