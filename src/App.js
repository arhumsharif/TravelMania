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
import TourGuidePackageBuilder from './components/TourGuide/PackageBuilder/PackageBuilder'

import TourOrgDashboard from './components/Organization/Dashboard'
import TourOrgPortfolio from './components/Organization/Portfolio'
import TourOrgPackageBuilder from './components/Organization/PackageBuilder/PackageBuilder'

import TravelerDashboard from './components/Traveler/Dashboard'
import TravelerPortfolio from './components/Traveler/Portfolio'

// Layout TourGuide
import TourGuideLayout from './components/Layout/TourGuideLayout'; // for tour guide nav and sidenav
import TourOrgLayout from './components/Layout/TourOrganizationLayout'; // for tour organization nav and sidenav
import TravelerLayout from './components/Layout/TravellerLayout'; // for traveler nav and sidenav
// Higher order component

// Tour Guide
const TourGuideDashboardLayout = TourGuideLayout(TourGuideDashboard);
const TourGuidePortfolioLayout = TourGuideLayout(TourGuidePortfolio)
const TourGuidePackageBuilderLayout = TourGuideLayout(TourGuidePackageBuilder)
// Tour Organization
const TourOrganizationDashboardLayout = TourOrgLayout(TourOrgDashboard);
const TourOrganizationPortfolioLayout = TourOrgLayout(TourOrgPortfolio);
const TourOrgPackageBuilderLayout = TourOrgLayout(TourOrgPackageBuilder)
// Traveler
const TravelerDashboardLayout = TravelerLayout(TravelerDashboard);
const TravelerPortfolioLayout = TravelerLayout(TravelerPortfolio);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tour-guide" element={<TourGuideDashboardLayout />} />
        <Route path="/tour-guide-portfolio" element={<TourGuidePortfolioLayout />} />
        <Route path="/tour-guide-package" element={<TourGuidePackageBuilderLayout />} />
        <Route path="/tour-org" element={<TourOrganizationDashboardLayout />} />
        <Route path="/tour-org-portfolio" element={<TourOrganizationPortfolioLayout />} />
        <Route path="/tour-org-package" element={<TourOrgPackageBuilderLayout />} />
        <Route path="/traveler" element={<TravelerDashboardLayout />} />
        <Route path="/traveler-portfolio" element={<TravelerPortfolioLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
