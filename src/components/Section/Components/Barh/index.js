import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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

class Barh extends Component {
  propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  }

  getDataKeys() {
    return this.props.data
      .reduce((dataKeys, row) => [...dataKeys, ...Object.keys(row)], [])
      .filter((value, index, self) => self.indexOf(value) === index) // unique keys
      .filter(value => value != 'name');
  }

  getDataKeyColor(index) {
    return COLORS[index] || COLORS[COLORS.length-1];
  }

  toPercent(decimal, fixed = 0) {
	  return `${(decimal * 100).toFixed(fixed)}%`;
  };

	render () {
    const { data, isPercentual = false } = this.props;
    const dataKeys = this.getDataKeys();
    const isStacked = !dataKeys.includes('value');
    const rowCount = isStacked ? dataKeys.length : data.length;
  
  	return (
    	<BarChart width={640} height={30 * (rowCount +1) + (isStacked ? 80 : 20)} data={data}
        margin={{top: 5, right: 50, left: 100, bottom: 5}} layout="vertical"
        maxBarSize={30}
        >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis type="number" tickFormatter={isPercentual ? this.toPercent : null} />
        <YAxis dataKey="name" type="category" width={150} />
        <Tooltip formatter={isPercentual ? this.toPercent : null} />
        { isStacked ? <Legend /> : null }
        {dataKeys.map((dataKey, index) => <Bar dataKey={dataKey} stackId="a" fill={this.getDataKeyColor(index)} />)}
      </BarChart>
    ); // label={<CustomizedLabel />}
  }
}

export default Barh;