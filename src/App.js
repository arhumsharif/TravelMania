// <!--
// ============================================================================
// * Iron Motorsports V1.0
// ============================================================================
// * Coded by WeTeck - Talha Noman 
// ============================================================================
// -->

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import LandingPage from './components/Credentials/LandingPage';
import Login from './components/Credentials/Login';
import Signup from './components/Credentials/Signup';
import TourGuideDashboard from './components/TourGuide/Dashboard'

// Layout TourGuide
import Layout from './components/Layout/TourGuideLayout';
// Higher order component
const TourGuideDashboardLayout = Layout(TourGuideDashboard);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tour-guide" element={<TourGuideDashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
