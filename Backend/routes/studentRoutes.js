const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Define routes for CRUD operations
const studentRoutes = {
  configureRoutes: () => {
    router.get('/', studentController.getAllStudents);       // Get all students
    router.get('/:id', studentController.getStudentById);   // Get a student by ID
    router.post('/', studentController.createStudent);      // Create a new student
    router.put('/:id', studentController.updateStudent);    // Update a student by ID
    router.delete('/:id', studentController.deleteStudent); // Delete a student by ID

    return router;
  }
};

module.exports = studentRoutes.configureRoutes();
