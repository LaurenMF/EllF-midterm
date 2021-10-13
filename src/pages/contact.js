import React from "react";
import 'semantic-ui-css/semantic.css';
import { Container, Header, Button, Form, Input, TextArea } from 'semantic-ui-react';

import Navbar from '../components/Navbar';

const ContactPage = () => {
    const [formVal, resetformVal] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    function clearFields(){
        resetformVal({
            name: '',
            email: '',
            message: ''
        })
    };

  return (

    <React.Fragment>
      <Navbar />

      <Container>
          <Header as='h1'>Contact Us!</Header>
          <Form>
              <Form.Field
                  control={Input}
                  label='Full Name'
                  value={formVal.name}
                  placeholder='Enter your full name...'
              />
              <Form.Field
                  control={Input}
                  label='Contact Email:'
                  value={formVal.email}
                  placeholder='Enter the best email to contact you with...'
              />
              <Form.Field
                  control={TextArea}
                  label='Message'
                  value={formVal.message}
                  placeholder='Enter your message...'
              />
              <Button color='green' onclick={clearFields}>Send Message</Button>
          </Form>
      </Container>
      

    </React.Fragment>
  );
}

export default ContactPage;