import React from 'react';
import './Listing.css';
import { Button } from 'react-bootstrap';
import image1 from '../../media/house1.jpg';
import moment from 'moment/moment';


function Listing({ image, title, description, dateFrom, dateTo, gender,type }) {

  return (
    <div className="listing">
      <img src={image1} alt={`${title} Image`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Available From: {moment(dateFrom).format('MMMM Do YYYY')}</p>
      <p>Available Until: {moment(dateTo).format('MMMM Do YYYY')}</p>
      <p>Gender of Provider: {gender}</p>
      <Button className="request" variant="success">Request {type=="acc"?"Stay":"Food"}</Button>
    </div>
  );
}

export default Listing;
