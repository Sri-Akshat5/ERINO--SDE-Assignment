const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = 5000;

// Body parser middleware to handle JSON data
app.use(bodyParser.json());

// Initialize Sequelize (replace these with your database details)
const sequelize = new Sequelize('contact_management', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable logging to keep the console clean
});

// Test the connection to MySQL
sequelize
  .authenticate()
  .then(() => console.log('Connected to MySQL'))
  .catch((error) => console.error('Unable to connect to the database:', error));

// Define the Contact model
const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
  },
  jobTitle: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Sync the models with the database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.error('Error syncing database:', error));

// Utility function for handling API responses
const handleResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).send({
    message,
    data,
  });
};

// POST request to add a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    if (!firstName || !lastName || !email || !phoneNumber) {
      return handleResponse(res, 400, 'Missing required fields');
    }
    const contact = await Contact.create({ firstName, lastName, email, phoneNumber, company, jobTitle });
    handleResponse(res, 201, 'Contact created successfully', contact);
  } catch (error) {
    handleResponse(res, 500, 'Error creating contact', error.message);
  }
});

// GET request to fetch all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    handleResponse(res, 200, 'Contacts fetched successfully', contacts);
  } catch (error) {
    handleResponse(res, 500, 'Error fetching contacts', error.message);
  }
});

// PUT request to update a specific contact
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return handleResponse(res, 404, 'Contact not found');
    }

    await contact.update(req.body);
    handleResponse(res, 200, 'Contact updated successfully', contact);
  } catch (error) {
    handleResponse(res, 400, 'Error updating contact', error.message);
  }
});

// DELETE request to delete a specific contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return handleResponse(res, 404, 'Contact not found');
    }

    await contact.destroy();
    handleResponse(res, 200, 'Contact deleted successfully');
  } catch (error) {
    handleResponse(res, 500, 'Error deleting contact', error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
