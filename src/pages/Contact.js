// src/components/ContactForm.js
import React from 'react';
import { TextField, Button, Container, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../stylesheet/contact.css';
import Layout from '../component/Layout'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Layout>
    <Container className="form-container body_background">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      <br/>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Contact Information</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>
              Customer Care Number: +1 (123) 456-7890
            </p>
            <p>
              Email: support@example.com
            </p>
            <p>
              Call Timings: Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
    </Layout>
  );
};

export default ContactForm;
