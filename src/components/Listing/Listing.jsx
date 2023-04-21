import React from 'react';
import './Listing.css';
import { Button } from 'react-bootstrap';
import image1 from '../../media/house1.jpg';
import foodimage1 from '../../media/Food1.jpeg';
import moment from 'moment/moment';


function Listing({ image, title, description, dateFrom, dateTo, gender,type,diet }) {

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
      <Button className="request" variant="success">Request {type=="acc"?"Stay":"Food"}</Button>
    </div>
  );
}

export default Listing;
