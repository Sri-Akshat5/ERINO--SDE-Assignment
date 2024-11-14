// models/contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assuming you have a separate DB config

const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING
  },
  jobTitle: {
    type: DataTypes.STRING
  }
});

module.exports = Contact;
