import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
  
      <Container>
      <Row className="justify-content-center">
        <Col xs="6" className="text-center">
      <h1 className="heading">Welcome to My Contact Book</h1>
      <img src='https://e7.pngegg.com/pngimages/345/99/png-clipart-computer-icons-google-contacts-address-book-contact-blue-text-thumbnail.png' alt='ContactBook'></img>
      </Col>
      </Row>
    </Container>
  
  )
}
export default Home;