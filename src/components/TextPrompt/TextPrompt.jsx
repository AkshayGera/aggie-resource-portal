import React from 'react';
import './TextPrompt.css';

function TextPrompt(props) {
  const {onServiceChange,onCategoryChange} = props;
  return (
    <div className="text-prompt">
      <p>I'm
        <select onChange={onServiceChange}>
        <option value="seeking">Seeking</option>
          <option value="providing">Providing</option>
        </select>
        <select onChange={onCategoryChange}>
          <option value="accommodation">Accommodation</option>
          <option value="food">Food</option>
        </select>
      </p>
    </div>
  );
}

export default TextPrompt;
