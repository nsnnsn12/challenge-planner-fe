import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { CHALLENGE_URI, DASHBOARD_URI, HOME_URI } from './constants/routes';
import DashBoard from './pages/dashboard';
import MainLayout from './components/Layout/MainLayout';
import Challenge from './pages/challenge';

function App() {
  return (
    <Routes>
      <Route path={HOME_URI} element={<MainLayout />}>
        <Route path={DASHBOARD_URI} element={<DashBoard />} />
        <Route path={CHALLENGE_URI} element={<Challenge />} />
      </Route>
    </Routes>
  );
}

export default App;
