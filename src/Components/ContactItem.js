
import React from 'react';

const ContactItem = ({ contact, onClose }) => {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>DOB: {contact.DOB}</p>
      <p>Address: {contact.address}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Created_date:{contact.created_date}</p>
      { <button id="clsbtn" onClick={onClose}>Close</button>}
    </div>
  );
};

export default ContactItem;


