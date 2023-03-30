import React, { useState } from 'react';
import './Filters.css';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';

function Filters(props) {

  const { onGenderClick } = props

  console.log(moment(new Date()).format("yyyy-MM-dd"));
  return (
    <div className="filters">
      <div className="gender-filter">
        <label htmlFor="gender-select">Filter by Gender:</label>
        <select id="gender-select" onChange={onGenderClick}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="dateFrom">Date From</label>
        <input type="date" id="myDate" />
        {/* defaultValue={moment(new Date()).format("yyyy-MM-DD")} */}
      </div>
      <div>
        <label htmlFor="dateFrom">Date To</label>
        <input type="date"/>
      </div>
    </div>
  );
}

export default Filters;
