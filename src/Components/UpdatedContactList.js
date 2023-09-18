//Importing required packages.
import React, { useState } from 'react'
import '../App.css'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPencil } from 'react-icons/bs';
//Function to update a contact.
const UpdatedContactList = ({ isOpen, onClose, contact, onUpdate }) => {

    const URL_ENDPOINT = 'https://contactbookapp1.netlify.app/contacts';
    const [updatedContactName, setUpdatedContactName] = useState(contact.name)
    const [updatedContactDOB, setUpdatedContactDOB] = useState(contact.DOB)
    const [updatedContactAddress, setUpdatedContactAddress] = useState(contact.address)
    const [updatedContactEmail, setUpdatedContactEmail] = useState(contact.email)
    const [updatedContactPhone, setUpdatedContactPhone] = useState(contact.phone)
    const [updatedContactCreated_date, setUpdatedContactCreated_date] = useState(contact.created_date)

    const updateContactItem = (e, contactObject) => {
        e.preventDefault()

        let updatedContactObject = {
            ...contactObject,
            id: contactObject.id,
            name: updatedContactName,
            DOB: updatedContactDOB,
            address: updatedContactAddress,
            email: updatedContactEmail,
            phone: updatedContactPhone,
            created_date: updatedContactCreated_date,

        }
        //Get the data from the URL,then usin "PUT"method update a contact using it's ID.
        fetch(`${URL_ENDPOINT}/${contactObject.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedContactObject)
        }).catch(error => console.log(error));
        
        onClose();
    }
    //Function to clear the field.
    const clearUpdatedContact = (e) => {
        e.preventDefault();
        const upContactName = document.getElementById('updatedName')
        upContactName.value = '';
        const upContactDOB = document.getElementById('updatedDOB')
        upContactDOB.value = '';
        const upContactAddress = document.getElementById('updatedAddress')
        upContactAddress.value = '';
        const upContactEmail = document.getElementById('updatedEmail')
        upContactEmail.value = '';
        const upContactPhone = document.getElementById('updatedPhone')
        upContactPhone.value = '';
        const upContactDate = document.getElementById('updatedCreated_date')
        upContactDate.value = '';

    }

    return (
        <div id="editModal" className={`modal  ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>Update Contact</h2>
                <label htmlFor="updatedContactName">Name</label>
                <input type="text" id="updatedName" value={updatedContactName} onChange={(e) => setUpdatedContactName(e.target.value)} />
                <label htmlFor="updatedContactDOB">DOB</label>
                <input type="text" id="updatedDOB" value={updatedContactDOB} onChange={(e) => setUpdatedContactDOB(e.target.value)} />
                <label htmlFor="updatedContactAddress">Address</label>
                <input type="text" id="updatedAddress" value={updatedContactAddress} onChange={(e) => setUpdatedContactAddress(e.target.value)} />
                <label htmlFor="updatedContactEmail">Email</label>
                <input type="text" id="updatedEmail" value={updatedContactEmail} onChange={(e) => setUpdatedContactEmail(e.target.value)} />
                <label htmlFor="updatedContactPhone">Phone</label>
                <input type="text" id="updatedPhone" value={updatedContactPhone} onChange={(e) => setUpdatedContactPhone(e.target.value)} />
                <label htmlFor="updatedContactCreated_date">Created_date</label>
                <input type="text" id="updatedCreated_date" value={updatedContactCreated_date} onChange={(e) => setUpdatedContactCreated_date(e.target.value)} />
                <button className="updatebtn" onClick={(e) => updateContactItem(e, contact)}><BsPencil /></button>
                <button className="clearbtn" onClick={(e) => clearUpdatedContact(e)}>Clear</button>
            </div>
        </div>

    )
}
export default UpdatedContactList;