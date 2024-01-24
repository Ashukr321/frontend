import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    Aos.init();
  })
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);

  const baseurl = 'http://localhost:3001';

  const handleContact = async e => {
    e.preventDefault();

    const sendData = {
      email,
      fullName: name,
      message,
      subject,
    };

    if (!email || !name || !message || !subject) {
      return alert('Data cant be empty');
    };

    try {
      const response = await fetch(`${baseurl}/email/sendEmail`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setPopupOpen(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = e => {
    setSubject(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handlePopupClose = e => {
    setPopupOpen(false);
  };

  return (
    <Box
    class="contact"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100',   
             
      }}
     data-aos="zoom-in-down"
    >
      
      <Container class="contact_form"
        sx={{ maxWidth: '600px', width: '90%'}}
        component='main'
      >
        <Paper elevation={3} style={{ padding: 20}}>
          <Typography
            fontWeight={'bold'}
            variant='h4'
            align='center'
            gutterBottom
            mt={2}
            mb={3}
          >
            Contact Us
          </Typography>
          <form onSubmit={handleContact}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Full Name'
                  variant='outlined'
                  required
                  autoFocus
                  onChange={handleNameChange}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Email'
                  variant='outlined'
                  required
                  autoFocus
                  onChange={handleEmailChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  label='Subject'
                  variant='outlined'
                  required
                  autoFocus
                  onChange={handleSubjectChange}
                  value={subject}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  label='Message'
                  variant='outlined'
                   multiline
                  rows={4}
                  required
                  autoFocus
                  onChange={handleMessageChange}
                  value={message}
                />
              </Grid>
              <Grid item xs={12} mt={3} mb={3}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'
                  margin={'0px auto'}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      <Dialog open={isPopupOpen} onClose={handlePopupClose}>
        <DialogTitle>Message Sent</DialogTitle>
        <DialogContent>
          <Typography>Your message has been sent successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} color='primary'>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;