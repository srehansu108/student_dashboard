const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Define custom CORS options
const corsOptions = {
  origin: 'https://student-dashboard-5769-k3pqssxy7-srehansu108s-projects.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow credentials such as cookies or authorization headers
};

// Enable CORS with the custom options
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Use student routes for handling student-related requests
app.use('/api/students', studentRoutes);

// Define a simple route to check if the server is working
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API!');
});

module.exports = app;
