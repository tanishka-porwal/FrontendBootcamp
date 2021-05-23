import React from 'react';
import { Jumbotron, Button , Container} from 'reactstrap';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : sachin@wynisco.com </p>
          <p className="lead">Phone : 732 874 0188 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available morning 7AM to 11AM EST via slack or whatsapp  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
