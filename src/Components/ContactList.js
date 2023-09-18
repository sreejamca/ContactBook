import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import '../App.css'
import { Table,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrash, BsPencil } from 'react-icons/bs';
import UpdatedContactList from "./UpdatedContactList";

const ContactList = () => {
    const [foundContact, setFoundContact] = useState(null);
    
    const handleSearch = (foundContact) => {
        setFoundContact(foundContact);
      };
    const URL_ENDPOINT = "https://contactbookapp1.netlify.app/contacts"
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState(null);
    const handleUpdateContact = (updatedContact) => {
        const index = contacts.findIndex((contact) => contact.id === updatedContact.id);
        if (index !== -1) {
            const updatedContacts = [...contacts];
            updatedContacts[index] = updatedContact;
            setContacts(updatedContacts);
        }
    }
    const handleEditClick = (contact) => {
        setSelectedContact(contact);
    };
    const handleCloseModal = () => {
        setSelectedContact(null);
        getContactList();
    };

    const getContactList = () => {
        axios.get('https://contactbookapp1.netlify.app/contacts')
            .then(res => setContacts(res.data))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getContactList()
    }, [])

    const deleteContactItem = (id) => {
        fetch(`${URL_ENDPOINT}/${id}`, {
            method: 'DELETE'
        }).then(() => getContactList())
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Container className="mt-5">
            <Table striped bordered hover >
                <thead>
                    <tr className="tablerow">
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created_date</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {contacts.map((contact, index) => (
                        <tr key={index}>

                            <td>{contact.name}</td>
                            <td>{contact.DOB}</td>
                            <td>{contact.address}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.created_date}</td>
                            <td><button onClick={() => deleteContactItem(contact.id)}><BsTrash /></button><button onClick={() => handleEditClick(contact)}><BsPencil /></button></td>
                        </tr>

                    ))}

                </tbody>
            </Table>
            </Container>
            {selectedContact && (
                <UpdatedContactList
                    isOpen={true}
                    onClose={handleCloseModal}
                    contact={selectedContact}
                    onUpdate={handleUpdateContact}
                />
            )}
        </div>
    )
}
export default ContactList;

