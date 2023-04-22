import React from 'react';
import './DetailsCard.css';
import moment from 'moment/moment';


function DetailsCard({details}) {
    // console.log(JSON.stringify(details))
    const { image, title, description, dateFrom, dateTo, gender, type, diet } = details;
    return (
        <div className="details">
            <img src={image} alt={`${title} Image`} />
            <h2>{title}</h2>
            <p>{description}</p>
            {type == "food" ? <p>{diet}</p> : <></>}
            <p><b>Available From</b>: {moment(dateFrom).format('MMMM Do YYYY')}</p>
            <p><b>Available Until</b>: {moment(dateTo).format('MMMM Do YYYY')}</p>
            {type == "acc" ? <p><b>Gender of Provider</b>: {gender}</p> : <></>}
        </div>
    );
}

export default DetailsCard;
