import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  // Fetch contacts from API when the component mounts
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle adding or updating a contact
  const handleAddContact = async (contact) => {
    try {
      if (editingContact) {
        // Update contact
        const response = await axios.put(`http://localhost:5000/api/contacts/${editingContact.id}`, contact);
        setContacts((prevContacts) =>
          prevContacts.map((c) => (c.id === editingContact.id ? response.data : c))
        );
        setEditingContact(null);
      } else {
        // Add new contact
        const response = await axios.post('http://localhost:5000/api/contacts', contact);
        setContacts((prevContacts) => [...prevContacts, response.data]);
      }
      fetchContacts();
    } catch (error) {
      console.error('Error adding/updating contact:', error);
    }
  };

  // Handle editing a contact
  const handleEditContact = (contact) => setEditingContact(contact);

  // Handle deleting a contact
  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="App">
      
      <ContactForm onSubmit={handleAddContact} initialValues={editingContact} />
      <ContactsTable
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;
