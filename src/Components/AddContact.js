//Importing required packages.
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//A function to Add a new contact.
const AddContact = () => {
  //A useNavigate hook to navigate to a different component.
  const navigate = useNavigate();
  //declaring the states of the variables.
  const [newContactAddress, setNewContactAddress] = useState('')
  const [newContactName, setNewContactName] = useState('')
  const [newContactDOB, setNewContactDOB] = useState('')
  const [newContactEmail, setNewContactEmail] = useState('')
  const [newContactPhone, setNewContactPhone] = useState('')
  const [newContactCreated_date, setNewContactCreated_date] = useState('')
  const [nameValidation, setNameValidation] = useState(null);
  const [dobValidation, setDobValidation] = useState(null);
  const [addressValidation, setAddressValidation] = useState(null);
  const [emailValidation, setEmailValidation] = useState(null);
  const [phoneValidation, setPhoneValidation] = useState(null);
  const [created_dateValidation, setCreated_dateValidation] = useState(null);
  //Functions to validate the input fileds of the add contact form.
  const validateEmail = (email) => {//check if the email is valid.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {//checkj if the phone number is valid
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  const validateDate = (dateString) => {//checking each part of the date string (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dateString)) {
      return false;
    }
    const dateParts = dateString.split('-');
    if (dateParts.length !== 3) {
      return false;
    }

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    // Check if the date is valid
    if (isNaN(year) || isNaN(month) || isNaN(day)||month<1||month>12||day<1||day>31) {
      setDobValidation("error");
      return 
    }

    const date = new Date(dateString);
    return !isNaN(date) && date <= new Date();
  };
  const validateDOBAndCreatedDate = (dobString, createdDateString) => {//check if the contact created date is after the DOB.
    const dob = new Date(dobString);
    const createdDate = new Date(createdDateString);
    return dob < createdDate;
  };
//Function to create a new contact.
  const addNewContact = (e) => {
    e.preventDefault();

    if (newContactName === '') {//invalid error display
      setNameValidation('error');
      return;
    }else{
      setNameValidation(null);
    }
    if ((newContactDOB === '') || (!validateDate(newContactDOB))) {
      setDobValidation('error');
      return;
    }else{
      setDobValidation(null);
    }

    if (newContactAddress === '') {
      setAddressValidation('error');
      return;
    }else{
      setAddressValidation(null);
    }
    if ((newContactEmail === '') || (!validateEmail(newContactEmail))) {
      setEmailValidation('error');
      return;
    }else{
      setEmailValidation(null);
    }
    if ((newContactPhone === '') || (!validatePhoneNumber(newContactPhone))) {
      setPhoneValidation('error');
      return;
    }else{
      setPhoneValidation(null);
    }
    if ((newContactCreated_date === '') || (!validateDate(newContactCreated_date)) || (newContactCreated_date.yyyy > newContactDOB.yyyy)) {
      setCreated_dateValidation('error');
      return;
    }
    if (!validateDOBAndCreatedDate(newContactDOB, newContactCreated_date)) {
      setCreated_dateValidation('error');
      return;
    }else{
      setCreated_dateValidation(null);
    }

// Getting a data from db.json and then adding a new contact to it using "POST" method
    fetch('https://contactbookapp1.netlify.app/contacts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newContactName,
        DOB: newContactDOB,
        address: newContactAddress,
        email: newContactEmail,
        phone: newContactPhone,
        created_date: newContactCreated_date
      })
    }).then(() => navigate('/ContactList'))//after adding a new contact,displaying the contact list again with newly added contact.
  }
  //Function to Clear the input field for the re entry of inputs.
  const clearContact = (e) => {
    e.preventDefault();
    const contactName = document.getElementById('inputName')
    contactName.value = '';
    const contactDOB = document.getElementById('inputDOB')
    contactDOB.value = '';
    const contactAddress = document.getElementById('inputAddress')
    contactAddress.value = '';
    const contactEmail = document.getElementById('inputEmail')
    contactEmail.value = '';
    const contactPhone = document.getElementById('inputPhone')
    contactPhone.value = '';
    const contactDate = document.getElementById('inputDate')
    contactDate.value = '';
    const contactNote = document.getElementById('inputNote')
    contactNote.value = '';

  }

  return (
//JSX returns HTML elements
    <div className="d-flex justify-content-center">
      <Container>
        <h2 className="center">Add Contact</h2>
        <Form className="custom-form">
          <Form.Group controlId="formName">
            <Form.Label htmlFor="Name">Name</Form.Label>
            <Form.Control
              type="text" placeholder="name" className="form-control" id='inputName' value={newContactName} onChange={(e) => {
                setNewContactName(e.target.value);
                setNameValidation(null)
              }}
              isInvalid={nameValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid contact name.
            </Form.Control.Feedback>
            <Form.Label htmlFor="DOB">DOB</Form.Label>
            <Form.Control type="text" placeholder="DOB" className="form-control" id='inputDOB' value={newContactDOB} onChange={(e) => {
              setNewContactDOB(e.target.value);
              setDobValidation(null)
            }}
              isInvalid={dobValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid date (YYYY-MM-DD).
            </Form.Control.Feedback>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control type="text" placeholder="address" className="form-control" id='inputAddress' value={newContactAddress} onChange={(e) => {
              setNewContactAddress(e.target.value);
              setAddressValidation(null)
            }}
              isInvalid={addressValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
            <Form.Label htmlFor="e-mail">Email</Form.Label>
            <Form.Control type="text" placeholder="Example@mail.com" className="form-control" id='inputEmail' value={newContactEmail} onChange={(e) => {
              setNewContactEmail(e.target.value);
              setEmailValidation(null)
            }}
              isInvalid={emailValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
            <Form.Label htmlFor="phone">Phone</Form.Label>
            <Form.Control type="number" placeholder="phone" className="form-control" id='inputPhone' value={newContactPhone} onChange={(e) => {
              setNewContactPhone(e.target.value);
              setPhoneValidation(null)
            }}
              isInvalid={phoneValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number(10 digits).
            </Form.Control.Feedback>
            <Form.Label htmlFor="Datecreated">CreatedDate</Form.Label>
            <Form.Control type="text" placeholder="created date" className="form-control" id='inputDate' value={newContactCreated_date} onChange={(e) => {
              setNewContactCreated_date(e.target.value);
              setCreated_dateValidation(null)
            }}
              isInvalid={created_dateValidation === 'error'}></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid created_date (YYYY-MM-DD).Created date should be after the date of birth.
            </Form.Control.Feedback>
            <Form.Label htmlFor="Note">Note</Form.Label>
            <textarea type="text" placeholder="note" className="form-control" id='inputNote'></textarea>
          </Form.Group>
          <Button className="custom-button" onClick={addNewContact}>
            Add Contact
          </Button>
          <Button className="custom-button1" variant="warning" onClick={clearContact}>
            Clear
          </Button>
        </Form>
      </Container>
    </div>
  )
}
export default AddContact;
