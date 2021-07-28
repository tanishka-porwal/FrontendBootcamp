import './App.css';
import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from './Components/Navbar/Navbar'
import { Table } from 'reactstrap';

function App() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - JULY 18 EDITION</h1>
          <p className="lead">My Name is Sachin Rajgire and I am instructor  </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Master Sheet</td>
          <td>This is link to master sheet which has links to everything el</td>
          <td><a href="https://docs.google.com/spreadsheets/d/1LP8zSW6I1teJ7RoLqdRtWoU7s3o2A3QxfQMmEW1wXCQ/edit?usp=sharing"> Mastersheet</a></td>
        </tr>
      <tr>
          <th scope="row">3</th>
          <td>Github</td>
          <td>Github repository link where our instructors can review your code </td>
          <td><a href="https://github.com/tanishka-porwal"> Link</a></td>
        </tr>
      
        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default App;


