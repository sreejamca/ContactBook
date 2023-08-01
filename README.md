<!-- 
    Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
  ------------------------------------------->
  
# Web App Design with React Router Week 16 Coding Assignment

## Instructions 

1. run ```npm install```
2. run ```npm start```
This is a simple Contact Book application built using React.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts, including adding new contacts, viewing contact details, updating contact information, and deleting contacts.

Features
View a list of contacts with their names, DOB, address, email, phone, and creation date.
Add a new contact with name, DOB, address, email, phone, and creation date fields.
View individual contact details by clicking on a contact from the list.
Update the details of a contact, including name, DOB, address, email, phone, and creation date.
Delete a contact from the list.

#Setup
1.Clone the Repository
https://github.com/sreejamca/ContactBook.git
#Install the required dependencies
1.npm install react-router-dom@6
2.npm install react bootstrap booytstrap
3.npm install axios
4.npm install react-icons
5.npm install json-server
6.npm start
The application should now be running on http://localhost:3000.
##How to Use
1.Adding a New Contact
     Click on the "Add Contact" button at the top of the page.
     Enter the required details for the new contact, including name, DOB, address, email, phone, and creation date.
     Click the "Add Contact" button to save the new contact.
     The new contact will now appear in the contact list.
2.Searching a particular contact
     Click on the search box on the top right of the page.
     Enter the name you need to search.
     Click on the search button,
     The contact details of that perticular contact will be displayed in a card.
3.Updating Contact Details
     Click on the "Edit" button next to a contact in the list.
     The contact's details will be displayed in a modal dialog for editing.
     Modify the desired information (name, DOB, address, email, phone, or creation date).
     Click the "Update" button to save the changes.
4.Deleting a Contact
     Click on the "Delete" button next to a contact in the list.
##Technologies Used
React.js - Front-end JavaScript library for building user interfaces.
React Bootstrap - Framework for styling and building responsive UI components.
React Router - Library for handling routing in a React application.

Folder Structure:
ContactBook/
  |-node_modules
  |-Public
  |- src/
     |- components/
        |- ContactList.js
        |- AddContact.js
        |- ContactDetails.js
        |- UpdateContact.js
     |- App.js
     |- index.js
  |- package.json
  |- README.md
#Acknowledgments
This project was inspired by the need to create a simple Contact Book application with CRUD functionality using React.js. It was created for learning purposes and can be extended further to include more features and improvements.
