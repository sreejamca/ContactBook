import React from 'react';
import { useState } from "react";
import ContactItem from './ContactItem';

const SearchResultCard = ({ contact, onClose }) => {
  const [isContactItemVisible, setIsContactItemVisible] = useState(true);
  const handleCloseContactItem = () => {
   setIsContactItemVisible(false);
    onClose();
  };
  
  return (
    <div className="search-result-card">
      <h2 className='contacthead'>Contact Details:</h2>
      <ContactItem contact={contact} onClose={handleCloseContactItem} />
   
    </div>
  );
};

export default SearchResultCard;