import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : tanishkaporwal9@gmail.com my email </p>
          <p className="lead">Phone : 857 272 0298 </p>
          <p className="lead">I will be available from 8 AM till 11:30 PM EST.</p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
