// src/services/contactService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';  // Adjust this when your backend is set up.

const addContact = (contact) => axios.post(API_URL, contact);
const getContacts = () => axios.get(API_URL);
const updateContact = (id, contact) => axios.put(`${API_URL}/${id}`, contact);
const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);

export { addContact, getContacts, updateContact, deleteContact };
    