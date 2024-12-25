const studentModel = require('../models/studentModel');

const studentController = {
  // Get all students
  getAllStudents: async (req, res) => {
    try {
      const students = await studentModel.getAllStudents();
      if(!students){
        return res.status(404).json({
          success: false,
          message: 'Database not found',
        });
      }
      else{
        res.status(200).json(students);
      }
    } catch (error) {
      console.error('Error fetching students:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // Get student by ID
  getStudentById: async (req, res) => {
    try {
      const student = await studentModel.getStudentById(req.params.id);
      if(!student){
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }
      else{
        res.status(200).json(student);
      }
    } catch (error) {
      console.error('Error fetching student:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  // Create new student
  createStudent: async (req, res) => {
    try {
      const newStudent = await studentModel.createStudent(req.body);
      res.status(201).json({
        success: true,
        message: 'Student created successfully',
      });
    } catch (error) {
      console.error('Error creating student:', error.message);
      res.status(500).json({
        success: false,
        message: 'Failed to create student',
        error: error.message,
      });
    }
  },

  // Update student by ID
  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await studentModel.updateStudent(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Student updated successfully',
      });
    } catch (error) {
      console.error('Error updating student:', error.message);
      res.status(500).json({
        success: false,
        message: 'Failed to update student',
        error: error.message,
      });
    }
  },

  // Delete student by ID
  deleteStudent: async (req, res) => {
    try {
      const result = await studentModel.deleteStudent(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Student deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting student:', error.message);
      res.status(500).json({
        success: false,
        message: 'Failed to delete student',
        error: error.message,
      });
    }
  },
};

module.exports = studentController;
