import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
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

import { COLORS3 as COLORS } from '../chartsUtils';

class CustomizedLabel extends Component {
  render() {
    const { x, y, stroke, value } = this.props;
    const formattedValue = parseInt(value * 100 * 100, 10) / 100;
    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{formattedValue}%</text>
  }
}

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
    const { data, xDataKey, yDataKeys, isPercentual } = this.props;

    return (
      <LineChart width={620} height={400} data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        className='line-chart'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis tickFormatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
        <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
        {!yDataKeys.includes('value') ? <Legend /> : null}
        {yDataKeys.map((dataKey, i) => (
          <_Line type='monotone' dataKey={dataKey} stroke={COLORS[i]} fill={COLORS[i + 1]} key={`${dataKey}-${i}`} />
        ))}
      </LineChart>
    );
  }
}

export default Line;