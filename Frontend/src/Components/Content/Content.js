import React from 'react';
import './Content.css';
import Students from '../../Elements/students';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboards from '../../Elements/dashboards';
import Chapters from '../../Elements/chapters';
import Help from '../../Elements/help';
import Reports from '../../Elements/reports';
import Settings from '../../Elements/settings';
const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />

        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/help" element={<Help />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
};

export default Content;
