import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import '../App.css';
import { BiSearch } from 'react-icons/bi';
import ContactItem from './ContactItem';
import ContactNotFound from './ContactNotFound';
import axios from 'axios';
import SearchResultCard from './SearchResultCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const Search = ({ searchContacts, onSearch }) => {
  const [isContactItemVisible, setIsContactItemVisible] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [contacts, setContacts] = useState([]);
  const [foundContact, setFoundContact] = useState('');
  const getContactList = () => {
    axios.get('https://contactbookapp1.netlify.app/contacts')
      .then(res => { setContacts(res.data); console.log(res.data); })
      .catch(error => console.log(error))
  }
  useEffect(() => {
    getContactList()
  }, [])
  const handleCloseContactItem = () => {
    setFoundContact(null);
    setIsContactItemVisible(false);
    searchName = "";
    setSearchName("");
  };

  const handleSearch = () => {
    getContactList();
    if (!contacts || contacts.length === 0) {
      setFoundContact(null);
      return;
    }
    const foundContact = contacts.find((contact) => contact.name === searchName);
    setFoundContact(foundContact);
    onSearch(foundContact);
  };


  return (
    <div >
      <Form >
        <InputGroup>
          <FormControl
            type="search"
            placeholder="Search here"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Button id='button' onClick={handleSearch}><BiSearch /></Button>
          {(foundContact) ? <SearchResultCard contact={foundContact} onClose={handleCloseContactItem} /> : searchName.length > 0 ? <ContactNotFound /> : ''}
        </InputGroup>
      </Form>
      
    </div>
  )
}
export default Search;
