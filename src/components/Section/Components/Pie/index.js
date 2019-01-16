import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  PieChart,
  Pie as _Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

import './styles.css';

const COLORS = [
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
  render () {
    const { x, y, stroke, value } = this.props;
		const formattedValue = parseInt(value*100*100, 10) / 100;
   	return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{formattedValue}%</text>
  }
}

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
    return COLORS[index] || COLORS[COLORS.length-1];
  }

  toPercent(decimal, fixed = 0) {
	  return `${(decimal * 100).toFixed(fixed)}%`;
  }

  toPercentLabel({ percent: decimal, name: name }, fixed = 0) {
	  return `${name}: ${(decimal * 100).toFixed(fixed)}%`;
  };

	render () {
    const { data, isPercentual = false, isLogScale = false } = this.props;
  
  	return (
      <PieChart width={400} height={250} className='pie-chart'>
        <_Pie isAnimationActive={false} data={data} cx={200} cy={110} outerRadius={75} fill={COLORS[0]} label={isPercentual ? this.toPercentLabel : null}>
        {
          	data.map((row, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        </_Pie>
        <Tooltip formatter={isPercentual ? this.toPercent : null} />
     </PieChart>
    );
  }
}

export default Pie;