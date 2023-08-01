import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent'
import Home from './Components/Home'
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
const App = () => {
  return (

    <Router>
      <div>
        <NavbarComponent/>
        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/ContactList" element={<ContactList />}></Route>
          <Route path="/AddContact" element={<AddContact />}></Route>
        </Routes>
      </div>
    </Router>

  );
}
export default App;
