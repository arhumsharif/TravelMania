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
import Login from './components/Credentials/Login';
import DaySheets from './components/DaySheets/DaySheets';
import Reports from './components/Reports/Reports';
import Invoicing from './components/Invoicing/Invoicing';
import PendingPayment from './components/PendingPayment/PendingPayment'
import FindJobs from './components/Jobs/FindJobs';
import AddJobs from './components/Jobs/AddJobs';
import FindCustomers from './components/Customer/FindCustomers';
import AddCustomers from './components/Customer/AddCustomers';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import AddEmployee from './components/Employee/AddEmployee';
import FindEmployee from './components/Employee/FindEmployee';
// Layout
import Layout from './components/Layout/Layout';
import Signup from './components/Credentials/Signup';
// SuperAdmin
import Dashboard from './components/SuperAdmin/Dashboard/Dashboard';
import Coupons from './components/SuperAdmin/Coupons/Coupons'
import Payment from './components/SuperAdmin/Payment/Payment'
import Plans from './components/SuperAdmin/Plans/Plans'
import PaymentDetails from './components/Credentials/PaymentDetails';
import PurchaseDetails from './components/Credentials/PurchaseDetails';

// Higher Ordered Components Used
const DaySheetsComponent = Layout(DaySheets)
const ReportsComponent = Layout(Reports)
const InvoicingComponent = Layout(Invoicing)
const JobsComponent = Layout(AddJobs)
const FindJobsComponent = Layout(FindJobs)
const FindCustomersComponent = Layout(FindCustomers)
const AddCustomersComponent = Layout(AddCustomers)
const ProfileComponent = Layout(Profile)
const SettingsComponent = Layout(Settings)
const AddEmployeeComponent = Layout(AddEmployee)
const FindEmployeeComponent = Layout(FindEmployee)
const PendingPaymentComponent = Layout(PendingPayment)
const SuperAdminDashboard = Layout(Dashboard)
const CouponsAdminComponent = Layout(Coupons)
const PaymentAdminComponent = Layout(Payment)
const PlansAdminComponent = Layout(Plans)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/day-sheets" element={<DaySheetsComponent />} />
        <Route path="/reports" element={<ReportsComponent />} />
        <Route path="/invoicing" element={<InvoicingComponent />} />
        <Route path="/pending" element={<PendingPaymentComponent />} />
        <Route path="/add-jobs" element={<JobsComponent />} />
        <Route path="/find-jobs" element={<FindJobsComponent />} />
        <Route path="/find-customers" element={<FindCustomersComponent />} />
        <Route path="/add-customers" element={<AddCustomersComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/find-employee" element={<FindEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/settings" element={<SettingsComponent />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/payment-details" element={<PaymentDetails/>} />
        <Route path="/purchase-details" element={<PurchaseDetails/>} />
        <Route path="/admin-dashboard" element={<SuperAdminDashboard />} />
        <Route path="/admin-coupons" element={<CouponsAdminComponent />} />
        <Route path="/admin-payment" element={<PaymentAdminComponent />} />
        <Route path="/admin-plans" element={<PlansAdminComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
