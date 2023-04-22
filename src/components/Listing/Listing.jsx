import React from 'react';
import './Listing.css';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';


function Listing({ image, title, description, dateFrom, dateTo, gender,type,diet }) {
  const passprops = { image, title, description, dateFrom, dateTo, gender,type,diet };
  const link = (type=="acc")?{
    to:"/reqstay",
  }:{to:"/reqfood"};
  return (
    <div className="listing">
      <img src={image} alt={`${title} Image`} />
      <h2>{title}</h2>
      <p>{description}</p>
      {type=="food"?<p>{diet}</p>:<></>}
      <p><b>Available From</b>: {moment(dateFrom).format('MMMM Do YYYY')}</p>
      <p><b>Available Until</b>: {moment(dateTo).format('MMMM Do YYYY')}</p>
      {type=="acc"?<p><b>Gender of Provider</b>: {gender}</p>:<></>}
      <br/>
      <Link className="request btn btn-success" to={link.to} state={{prop1:passprops}}  variant="success">Request {type=="acc"?"Stay":"Food"}</Link>
    </div>
  );
}

export default Listing;
