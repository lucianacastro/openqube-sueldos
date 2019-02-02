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
} from 'recharts';

import './styles.css';

const COLORS = [
  // OpenQube logo
  //'#6d71ac',
  '#9265b3',
  '#f15b88',
  '#fea241',
  
  // https://www.color-hex.com/color-palette/67140
  '#8577b6',
  '#d072cc',
  '#e5ab83',
  '#fff2a5',
  '#856363',

  // https://www.color-hex.com/color-palette/61298 (inverse)
  '#656abb',
  '#9b7cc3',
  '#d28eca',
  '#e3c2bd',
  '#f4f6af',

  // https://www.color-hex.com/color-palette/71119
  '#ffb57c',
  '#fa6579',
  '#bb1f8c',
  '#6a1596',
  '#18299b',

  // https://www.color-hex.com/color-palette/70941
  '#b1e2f0',
  '#f4f4b9',
  '#fdc268',
  '#fb9ed6',
  '#d282e1',
];

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
	  return `${(decimal * 100 * 100).toFixed(fixed)/100}%`;
  }

  toNumber(decimal, fixed = 2) {
	  return `${(decimal * 100).toFixed(fixed)/100}`;
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
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey={xDataKey} />
        <YAxis tickFormatter={isPercentual ? this.toPercent : this.toNumber} />
        <Tooltip formatter={isPercentual ? this.toPercent : this.toNumber} />
        {yDataKeys.map((dataKey, i) => (
          <_Line type='monotone' dataKey={dataKey} stroke={COLORS[i]} fill={COLORS[i + 1]} key={`${dataKey}-${i}`} />
        ))}
      </LineChart>
    );
  }
}

export default Line;