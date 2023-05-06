import React, { useState } from 'react';
import faqData from './faqData.json';
import '../FAQ/FAQ.css';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function FAQ() {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));
  // Array to keep track of which questions are expanded

  function toggleQuestion(index) {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  }
  
  return (
    <div>
    <h2>Frequently Asked Questions</h2>
    <div className="faq-container"> 
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {item.question}
            {expanded[index] ? <FaMinusSquare/> : <FaPlusSquare/>}
          </div>
          {expanded[index] && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQ;