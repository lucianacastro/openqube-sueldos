import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line as _Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import CustomizedTooltip from '../CustomizedTooltip';

import './styles.css';

import { COLORS1 as COLORS } from '../chartsUtils';

class Line extends Component {
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
    const { currency } = this.props;
    return `${currency ? currency + ' ' : ''}${(decimal).toFixed(fixed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  getDataKeyColor(index) {
    return COLORS[index] || COLORS[COLORS.length - 1];
  }

  render() {
    const { data, xDataKey, yDataKeys, isPercentual, customStroke = { } } = this.props;

    return (
      <LineChart width={620} height={400} data={data}
        margin={{ top: 10, right: 0, left: 5, bottom: 10 }}
        className='line-chart'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis tickFormatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
        <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
        {!yDataKeys.includes('value') ? <Legend /> : null}
        {yDataKeys.map((dataKey, i) => (
          <_Line type='monotone' dataKey={dataKey} stroke={customStroke[dataKey]||COLORS[i]} fill={COLORS[i + 1]} key={`${dataKey}-${i}`} />
        ))}
      </LineChart>
    );
  }
}

export default Line;