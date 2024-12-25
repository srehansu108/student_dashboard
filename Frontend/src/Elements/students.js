import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import './student.css';

const Students = () => {
  const [students, setStudents] = useState([]);  // State to store fetched students
  const [loading, setLoading] = useState(true);   // State to track loading status
  const [error, setError] = useState(null);       // State to store any error messages

  // Fetch students from the backend API
  const fetchStudents = async () => {
    try {
      const response = await fetch('https://backend-s0e2.onrender.com/api/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',  // Prevent caching
        },
        mode: 'cors',  // Explicitly set the mode to CORS
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Fetched Data:', data);  // Log fetched data for debugging
      setStudents(data);  // Assuming you are using `setStudents` to store the data
    } catch (err) {
      console.error('Fetch error:', err);  // Log any fetch errors
      setError(err.message);  // Assuming you have an error state
    } finally {
      setLoading(false);  // Assuming you have a loading state
    }
  };
  

  // Use effect hook to fetch students when the component mounts
  useEffect(() => {
    fetchStudents();  // Call fetchStudents function on component mount
  }, []);

  // Check if there is an error or if data is still loading
  if (loading) {
    return <div>Loading...</div>;  // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message
  }

  return (
    <div>
      <div className='Content-header'>
        <select name="options" className="dropdown">
          <option value="" disabled selected>Select an option</option>
          <option value="option1">AY-2023-24</option>
          <option value="option2">AY-2024-25</option>
          <option value="option3">AY-2025-26</option>
        </select>
        <select name="options" className="dropdown">
          <option value="" disabled selected>Select class</option>
          <option value="option1">CBSE 8</option>
          <option value="option2">CBSE 9</option>
          <option value="option3">CBSE 10</option>
        </select>
        <button><FaPlus className='plus'/>Add New Student</button>
      </div>
      
      {students.length === 0 ? (
        <div>No data found</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Cohorot</th>
              <th>Courses</th>
              <th>Date joined</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.Student_name}</td>
                <td>{student.Cohorot}</td>
                <td className='course-boxes'>
                  <div className='course-box'>
                    <img src='../Images/Student.png' alt='course-box'/>
                    {student.Courses}
                  </div>
                  <div className='course-box'>
                    <img src='../Images/Student02.png' alt='course-box'/>
                    {student.course02}
                  </div>
                </td>
                <td>{student['Date-joined']}</td>
                <td>{student.Last_login}</td>
                <td>
                  <div
                    className='status'
                    style={{
                      backgroundColor: student.Status ? '#40cd00' : 'red', // Dynamically set background color
                    }}
                  >
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Students;