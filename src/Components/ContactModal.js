import React from 'react'

const ContactModal = ({ contact, onClose }) => {
    return (
        
 
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h3>Contact Information</h3>
                <p>name:{contact.name}</p>
                <p>DOB:{contact.DOB}</p>
                <p>address:{contact.address}</p>
                <p>email:{contact.email}</p>
                <p>phone:{contact.phone}</p>
                <p>contactcreated:{contact.contactcreated}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>

    )
}
export default ContactModal;