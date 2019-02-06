import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
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
import { COLORS1 } from '../chartsUtils';
import CustomizedTooltip from '../CustomizedTooltip';


class CustomizedLabel extends Component {
  render() {
    const { x, y, stroke, value } = this.props;
    const formattedValue = parseInt(value * 100 * 100, 10) / 100;
    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{formattedValue}%</text>
  }
}

class Barh extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isPercentual: PropTypes.bool,
    isLogScale: PropTypes.bool,
    cutoff: PropTypes.number,
    isStacked: PropTypes.bool
  }

  state = {
    collapsed: true,
  }

  getData() {
    const { data = [], cutoff = 0, isPercentual = false } = this.props;

    if (this.state.collapsed && cutoff) {
      const visibleRows = data.filter((v, i) => i < cutoff);
      const hiddenRows = data.filter((v, i) => i >= cutoff);

      return data[0].value !== undefined ? visibleRows.concat({
        name: 'Otros',
        value: hiddenRows.reduce((val, row) => val + row.value, 0),
      }) : visibleRows;
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
    return COLORS1[index] || COLORS1[COLORS1.length - 1];
  }

  toPercent(decimal, fixed = 0) {
    return `${(decimal * 100 * 100).toFixed(fixed) / 100}%`;
  }

  toNumber(decimal, fixed = 2) {
    return `${(decimal * 100).toFixed(fixed) / 100}`;
  }

  toggleCollapse(e) {
    e.preventDefault();
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

  render() {
    const { isPercentual = false, isLogScale = false, cutoff = 0, minLogScale = 0.01, isStacked = false } = this.props;
    const { collapsed } = this.state;
    const data = this.getData();
    const dataKeys = this.getDataKeys();
    const rowCount = this.state.collapsed && cutoff ? cutoff : data.length;
    const logScaleProps = isLogScale ? { scale: 'log', domain: [minLogScale, 'auto'], allowDataOverflow: true } : null;
    const height = 31 * (rowCount + 2) + 20;

    return (
      <div>
        {cutoff ? <div className='more-info-wrapper'><a className={cn('more-info-link', collapsed && 'collapsed')} href='#' onClick={(e) => this.toggleCollapse(e)} >{collapsed ? 'ver más' : 'ver menos'}</a></div> : null}
        <BarChart width={620} height={height} data={data}
          margin={{ top: 5, right: 50, left: 0, bottom: 5 }} layout="vertical"
          maxBarSize={25}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis type="number" tickFormatter={isPercentual ? this.toPercent : this.toNumber} {...logScaleProps} />
          <YAxis dataKey="name" type="category" width={200} />
          <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : this.toNumber} />
          {!dataKeys.includes('value') ? <Legend /> : null}
          {dataKeys.map((dataKey, indexGroup) =>
            <Bar key={dataKey} dataKey={dataKey} stackId={isStacked ? 'a' : null} fill={this.getDataKeyColor(indexGroup)} >
              {
                data.map((entry, indexRow) => (
                  <Cell cursor="pointer" fill={entry.name === 'Otros' && data[0].value !== undefined ? '#82ca9d' : this.getDataKeyColor(indexGroup)} key={`cell-${indexRow}`} />
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