import React from 'react';
import './OldListing.css';

const OldListing = ({listings}) => {
//   const listings = [
//     {
//       name: 'Listing 1',
//       image: 'https://via.placeholder.com/150'
//     },
//     {
//       name: 'Listing 2',
//       image: 'https://via.placeholder.com/150'
//     },
//     {
//       name: 'Listing 3',
//       image: 'https://via.placeholder.com/150'
//     }
//   ];

  return (
    <div className="card">
      <h2 className="card-title">Your previous Listings</h2>
      <ul className="list">
        {listings.map((listing, index) => (
          <li key={index} className="list-item">
            <img src={listing.image} alt={listing.name} className="list-item-image" />
            <span className="list-item-name">{listing.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OldListing;
