const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contacts'); // Import contact routes

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Use the contact routes under /api
app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.send('Contact Management API Assignment');
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
