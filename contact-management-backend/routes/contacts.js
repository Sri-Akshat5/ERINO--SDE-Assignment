const express = require('express');
const router = express.Router();
const db = require('../db'); // Import your MySQL connection

// Add a new contact
router.post('/contacts', (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  const query = 'INSERT INTO contacts (firstName, lastName, email, phoneNumber, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, phoneNumber, company, jobTitle], (err, result) => {
    if (err) {
      res.status(400).send({ message: 'Error adding contact', error: err.message });
    } else {
      res.status(201).send({ message: 'Contact added successfully', contactId: result.insertId });
    }
  });
});

// Fetch all contacts
router.get('/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching contacts', error: err.message });
    } else {
      res.status(200).send(results);
    }
  });
});

// Update a contact by ID
router.put('/contacts/:id', (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  const query = `UPDATE contacts SET firstName = ?, lastName = ?, email = ?, phoneNumber = ?, company = ?, jobTitle = ? WHERE id = ?`;
  db.query(query, [firstName, lastName, email, phoneNumber, company, jobTitle, req.params.id], (err, result) => {
    if (err) {
      res.status(400).send({ message: 'Error updating contact', error: err.message });
    } else {
      res.status(200).send({ message: 'Contact updated successfully' });
    }
  });
});

// Delete a contact by ID
router.delete('/contacts/:id', (req, res) => {
  const query = `DELETE FROM contacts WHERE id = ?`;
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      res.status(400).send({ message: 'Error deleting contact', error: err.message });
    } else {
      res.status(200).send({ message: 'Contact deleted successfully' });
    }
  });
});

module.exports = router;
