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
import { COLORS1 as COLORS } from '../chartsUtils';
import CustomizedTooltip from '../CustomizedTooltip';

class Barh extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isPercentual: PropTypes.bool,
    isLogScale: PropTypes.bool,
    cutoff: PropTypes.number,
    isStacked: PropTypes.bool,
    currency: PropTypes.string,
    markNegativeValues: PropTypes.oneOfType(PropTypes.bool, PropTypes.arrayOf(PropTypes.string)),
  }

  state = {
    collapsed: true,
  }

  getData() {
    const { data = [], cutoff = 0, sumOthers = true, markNegativeValues = false } = this.props;
    const isOneDimensional = data[0] && data[0].value !== undefined;
    let _data = [ ...data ];
    if (markNegativeValues) {
      const keys = true === markNegativeValues ? ['value'] : [...markNegativeValues];

      _data = _data.map(row => ({
        ...row,
        ...keys.reduce((row, key) => ({ ...row, [key]: Math.abs(row[key])}), row),
        invalid: row[keys[0]] <= 0,
      }))
      .sort((row1, row2) => keys.reduce((manhattanDist, key) => manhattanDist+(row2[key] - row1[key]), 0));
    }


    if (this.state.collapsed && cutoff) {
      const visibleRows = _data.filter((row, i) => i < cutoff);
      const hiddenRows = _data.filter((row, i) => i >= cutoff);

      return isOneDimensional ? visibleRows.concat({
        name: 'Otros',
        value: sumOthers ? hiddenRows.reduce((val, row) => val + row.value, 0) : Math.max(...hiddenRows.map(r => r.value)),
      }) : visibleRows;
    }

    if (this.state.collapsed && markNegativeValues) {
      return _data.filter((row, i) => !row.invalid);
    }

    return _data;
  }

  getDataKeys() {
    return this.getData()
      .reduce((dataKeys, row) => [...dataKeys, ...Object.keys(row)], [])
      .filter((value, index, self) => self.indexOf(value) === index) // unique keys
      .filter(value => !['name', 'invalid'].includes(value));
  }

  getDataKeyColor(index, row = null) {
    if (this.props.markNegativeValues && row && row.invalid) {
      return '#eee';
    }

    return COLORS[index] || COLORS[COLORS.length - 1];
  }

  toPercent(decimal, fixed = 0) {
    return `${(decimal * 100 * 100).toFixed(fixed) / 100}%`;
  }

  toNumber(decimal, fixed = 2) {
    const { currency } = this.props;
    return `${currency ? currency + ' ' : ''}${(decimal).toFixed(fixed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  toggleCollapse(e) {
    e.preventDefault();
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

  getRowsCount() {
    if (this.state.collapsed && this.props.cutoff) {
      return this.props.cutoff;
    }

    if (this.state.collapsed && this.props.markNegativeValues) {
      return this.getData().filter((row, i) => !row.invalid).length;
    }

    return this.getData().length;
  }

  render() {
    const { isPercentual = false, isLogScale = false, cutoff = 0, minLogScale = 0.01, isStacked = false, markNegativeValues = false } = this.props;
    const { collapsed } = this.state;
    const data = this.getData();
    const dataKeys = this.getDataKeys();
    const rowCount = this.getRowsCount();
    const logScaleProps = isLogScale ? { scale: 'log', domain: [minLogScale, 'auto'], allowDataOverflow: true } : null;
    const height = 31 * (rowCount + 2) + 20;

    return (
      <div>
        {cutoff || markNegativeValues ? <div className='more-info-wrapper'><a className={cn('more-info-link', collapsed && 'collapsed')} href='#' onClick={(e) => this.toggleCollapse(e)} >{collapsed ? 'ver más' : 'ver menos'}</a></div> : null}
        <BarChart width={620} height={height} data={data}
          margin={{ top: 5, right: 50, left: 0, bottom: 5 }} layout="vertical"
          maxBarSize={25}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis type="number" tickFormatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} {...logScaleProps} />
          <YAxis dataKey="name" type="category" width={200} />
          <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
          {!dataKeys.includes('value') ? <Legend /> : null}
          {dataKeys.map((dataKey, indexGroup) =>
            <Bar key={dataKey} dataKey={dataKey} stackId={isStacked ? 'a' : null} fill={this.getDataKeyColor(indexGroup)} >
              {
                data.map((entry, indexRow) => (
                  <Cell cursor="pointer" fill={entry.name === 'Otros' && data[0].value !== undefined ? '#82ca9d' : this.getDataKeyColor(indexGroup, entry)} key={`cell-${indexRow}`} />
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