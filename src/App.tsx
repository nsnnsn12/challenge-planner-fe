import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { APPROVED_CHALLENGE_LIST_URI, CHALLENGE_LIST_URI, DASHBOARD_URI, HOME_URI } from './constants/routes';
import DashBoard from './pages/dashboard';
import MainLayout from './components/Layout/MainLayout';
import ApprovedChallenges from './pages/ApprovedChallenges';
import Challenges from './pages/Challenges';

function App() {
  return (
    <Routes>
      <Route path={HOME_URI} element={<MainLayout />}>
        <Route path={DASHBOARD_URI} element={<DashBoard />} />
        <Route path={APPROVED_CHALLENGE_LIST_URI} element={<ApprovedChallenges />} />
        <Route path={CHALLENGE_LIST_URI} element={<Challenges />} />
      </Route>
    </Routes>
  );
}

export default App;
