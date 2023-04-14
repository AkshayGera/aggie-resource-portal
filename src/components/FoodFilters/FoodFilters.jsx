import React, { useState } from 'react';
import './FoodFilters.css';

function FoodFilters(props) {
  const { onDietaryRestrictionsChange } = props;



  return (
    <div className="filters">
      <div className="dietary-restrictions-filter">
        <h4>Dietary Restrictions</h4>
        <label htmlFor="vegan">
          <input
            type="checkbox"
            id="vegan"
            value="vegan"
            
          />
          Vegan
        </label>
        <label htmlFor="vegetarian">
          <input
            type="checkbox"
            id="vegetarian"
            value="vegetarian"
           
          />
          Vegetarian
        </label>
        <label htmlFor="gluten-free">
          <input
            type="checkbox"
            id="gluten-free"
            value="gluten-free"
           
          />
          Halal
        </label>
        
      </div>
    </div>
  );
}

export default FoodFilters;
