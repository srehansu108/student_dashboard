import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Body from './Components/Body/Body';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <Body />
      </div>
    </Router>
  );
}

export default App;
