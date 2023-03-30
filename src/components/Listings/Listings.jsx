import React from 'react';
import Listing from '../Listing/Listing';
import './Listings.css';


function Listings(props) {
  const { listings } = props;
  return (
    <div className="listings">
      {listings.map((listing) => (
        <Listing
          image={listing.image}
          key={listing.id}
          title={listing.title}
          description={listing.description}
          gender={listing.gender}
          accommodationType={listing.accommodationType}
          dateFrom = {listing.dateFrom.toString()}
          dateTo = {listing.dateTo.toString()}
          type={listing.type}
        />
      ))}
    </div>
  );
}

export default Listings;
