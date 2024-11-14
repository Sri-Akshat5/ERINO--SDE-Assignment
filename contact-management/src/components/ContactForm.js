import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography, Container } from '@mui/material';

function ContactForm({ onSubmit, initialValues }) {
    const [formValues, setFormValues] = useState(initialValues || {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formValues.firstName || !formValues.lastName || !formValues.email || !formValues.phoneNumber) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            // Send the form values to the backend API (e.g., using axios)
             onSubmit(formValues);

            // Reset the form after successful submission
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                jobTitle: ''
            });

            alert("Contact successfully added!");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <Container sx={{ maxWidth: 'sm', mt: 4, mb:10 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4" align="center" sx={{ mb: 3 }}>Add Contact</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phoneNumber"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Company"
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Job Title"
                            name="jobTitle"
                            value={formValues.jobTitle}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    fullWidth
                    size="large"
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default ContactForm;
