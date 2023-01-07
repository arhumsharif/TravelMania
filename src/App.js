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
import TourGuidePortfolio from './components/TourGuide/Portfolio'
import TourOrgDashboard from './components/Organization/Dashboard'
import TravelerDashboard from './components/Traveler/Dashboard'

// Layout TourGuide
import TourGuideLayout from './components/Layout/TourGuideLayout'; // for tour guide nav and sidenav
import TourOrgLayout from './components/Layout/TourOrganizationLayout'; // for tour organization nav and sidenav
import TravelerLayout from './components/Layout/TravellerLayout'; // for traveler nav and sidenav
// Higher order component

// Tour Guide
const TourGuideDashboardLayout = TourGuideLayout(TourGuideDashboard);
const TourGuidePortfolioLayout = TourGuideLayout(TourGuidePortfolio)
// Tour Organization
const TourOrganizationDashboardLayout = TourOrgLayout(TourOrgDashboard);
// Traveler
const TravelerDashboardLayout = TravelerLayout(TravelerDashboard);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tour-guide" element={<TourGuideDashboardLayout />} />
        <Route path="/tour-guide-portfolio" element={<TourGuidePortfolioLayout />} />
        <Route path="/tour-org" element={<TourOrganizationDashboardLayout />} />
        <Route path="/traveler" element={<TravelerDashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
