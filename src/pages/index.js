import React from "react";
import 'semantic-ui-css/semantic.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';

import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
        <Container textAlign='center'>
          <Header as='h1'>Home</Header>
          <p>Some random text that needs not readen.</p>
          <Button color='green'>Join Now!</Button>
        </Container>
        <Segment>
          <Header as='h2'>News</Header>
          <p>Some more random text</p>
        </Segment>


    </React.Fragment>
  );
}

export default HomePage;