import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  Cell,
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
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isPercentual: PropTypes.bool,
    isLogScale: PropTypes.bool,
    cutoff: PropTypes.number,
  }

  state = {
    collapsed: true,
  }

  getData() {
    const { data = [], cutoff = 0 } = this.props;

    if (this.state.collapsed && cutoff) {
      return data.filter((v, i) => i < cutoff)
        .concat({
          name: 'Otros',
          value: data.filter((v, i) => i >= cutoff).reduce((val, row) => val+row.value, 0),
        });
    }

    return data;
  }

  getDataKeys() {
    return this.getData()
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

  toggleCollapse(e) {
    e.preventDefault();
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

	render () {
    const { isPercentual = false, isLogScale = false, cutoff = 0 } = this.props;
    const data = this.getData();
    const dataKeys = this.getDataKeys();
    const isStacked = !dataKeys.includes('value');
    const rowCount = this.state.collapsed && cutoff ? cutoff : (isStacked ? dataKeys.length : data.length);
    const logScaleProps = isLogScale ? { scale: 'log', domain: [0.01, 'auto'], allowDataOverflow: true } : null;
    const height = 31 * (rowCount+2) + (isStacked ? 80 : 20);
  
  	return (
      <div>
        { cutoff ? <a href='#' onClick={(e) => this.toggleCollapse(e)} >{ this.state.collapsed ? 'ver más' : 'ver menos' }</a> : null }
        <BarChart width={640} height={height} data={data}
          margin={{ top: 5, right: 50, left: 0, bottom: 5 }} layout="vertical"
          maxBarSize={30}
          >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis type="number" tickFormatter={isPercentual ? this.toPercent : null} {...logScaleProps} />
          <YAxis dataKey="name" type="category" width={200} />
          <Tooltip formatter={isPercentual ? this.toPercent : null} />
          { isStacked ? <Legend /> : null }
          {dataKeys.map((dataKey, indexGroup) =>
            <Bar key={dataKey} dataKey={dataKey} stackId="a" fill={this.getDataKeyColor(indexGroup)} >
            {
              data.map((entry, indexRow) => (
                <Cell cursor="pointer" fill={entry.name === 'Otros' ? '#82ca9d' : this.getDataKeyColor(indexGroup) } key={`cell-${indexRow}`}/>
              ))
            }
            </Bar>
          )}
        </BarChart>
      </div>
    );
  }
}

export default Barh;