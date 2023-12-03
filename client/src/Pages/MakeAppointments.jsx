import { useState, useEffect } from 'react';
import appdentist from '../../pictures/appdentist.jpg';
import dentistself from '../../pictures/dentistself.png';
import '../Styles/MakeAppointments.css';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../Component/Nav_Bar';
import Footer from '../Component/Footer';


function MakeAppointments() {
  const [appointment, setAppointment] = useState({
    service: '',
    dentist: '',
    patient: '',
    phone: '',
    email: '',
    selectedDate: null,
    selectedTime: null,
    note: '',
  });

  const handleChange = (field) => (event) => {
    setAppointment({
      ...appointment,
      [field]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setAppointment({
      ...appointment,
      selectedDate: date,
    });
  };

  const handleTimeChange = (time) => {
    setAppointment({
      ...appointment,
      selectedTime: time,
    });
  };

  const handleSubmit = () => {
    // Prepare the data to be sent to the server
    const formData = {
      service: appointment.service,
      dentist: appointment.dentist,
      patient: appointment.patient,
      phone: appointment.phone,
      email: appointment.email,
      selectedDate: appointment.selectedDate?.format('YYYY-MM-DD'),
      selectedTime: appointment.selectedTime?.format('HH:mm'),
      note: appointment.note,
    };
    console.log(formData);
  };

  // useEffect(() => {
  //   console.log(appointment);
  // }, [appointment]);

  return (
    <div className="appointments-page">
      <NavBar />
        <div className="top-area">
          <h1>Make Appointments</h1>
          <img className="img-container" src={appdentist} alt="dentist" />
        </div>
        <div className="appointment-area">
          <div className="form-container">

            <Box sx={{ width: '500px' }}>
              <h4 className="service">Type of Services:</h4>
              <FormControl fullWidth variant="outlined">
                
                <InputLabel>Sevice</InputLabel>
                <Select
                  sx={{ bgcolor: 'white'}}
                  value={appointment.service}
                  label="Service"
                  onChange={handleChange('service')}
                >
                  <MenuItem value={"bridges"}>Dental Bridges</MenuItem>
                  <MenuItem value={"filling"}>Dental Filling</MenuItem>
                  <MenuItem value={"implants"}>Dental Implants</MenuItem>
                  <MenuItem value={"dentures"}>Dentures</MenuItem>
                  <MenuItem value={"inlays & onlays"}>Inlays and Onlays</MenuItem>
                  <MenuItem value={"checkup & clean"}>Check-up & Clean</MenuItem>
                  <MenuItem value={"child therapy"}>Children's Therapy</MenuItem>
                  <MenuItem value={"root canal"}>Root Canal Therapy</MenuItem>
                  <MenuItem value={"emergency dentistry"}>Emergency Dentistry</MenuItem>
                  <MenuItem value={"tmj"}>TMJ Treatment</MenuItem>
                  <MenuItem value={"whitening"}>Teeth Whitening</MenuItem>
                  <MenuItem value={"orthodonic treatment"}>Orthodonic Treatment</MenuItem>
                  <MenuItem value={"veneers"}>Dental Veneers</MenuItem>
                  <MenuItem value={"braces"}>Braces</MenuItem>
                  <MenuItem value={"crowns & veneers"}>Dental Crowns & Veneers</MenuItem>
                </Select>
              </FormControl>

              <h4>Choose Dentist by Name:</h4>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Dentist</InputLabel>
                <Select
                  sx={{ bgcolor: 'white'}}
                  value={appointment.dentist}
                  label="Dentist"
                  onChange={handleChange('dentist')}
                >
                  <MenuItem value={"Shawn"}>Shawn Ryan Nacario</MenuItem>
                  <MenuItem value={"aisha"}>Aisha Manalo</MenuItem>
                  <MenuItem value={"gabriel"}>Gabriel Dela Cruz</MenuItem>
                  <MenuItem value={"jeremiah"}>Jeremiah Juinio</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <TextField sx={{ my: 2, bgcolor: 'white' }} label="Patient Name" variant="outlined" onChange={handleChange('patient')} />
              </FormControl>

              <Grid container columnSpacing={{ xs: '10px'}}>
                <Grid item>
                  <TextField sx={{ mb: 1, bgcolor: 'white' }} className="gridtxt" label="Phone" variant="outlined" onChange={handleChange('phone')} />
                </Grid>
                <Grid item>
                  <TextField sx={{ mb: 1, bgcolor: 'white' }} className="gridtxt" label="Email" variant="outlined" onChange={handleChange('email')} />
                </Grid>
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['MobileDatePicker']}>
                      <MobileDatePicker sx={{ bgcolor: 'white'}} className="gridpicker" label="Select Date" onChange={handleDateChange}/>
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['MobileTimePicker']}>
                      <MobileTimePicker sx={{ bgcolor: 'white'}} className="gridpicker" label="Select Time" onChange={handleTimeChange}/>
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <FormControl fullWidth>
                <TextField sx={{ my: 2, bgcolor: 'white' }} label="Note" multiline rows={5} variant="outlined" onChange={handleChange('note')} />
              </FormControl>

              <Button variant="contained" onClick={handleSubmit}>Submit</Button>

            </Box>
          
          </div>
          <div >
            <img className="img-div" src={dentistself} alt="dentistself" />
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default MakeAppointments;
