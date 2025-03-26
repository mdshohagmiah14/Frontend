import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage';
import DoctorPage from './pages/DoctorPage';
import AppointmentPage from './pages/AppointmentPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
        <Dashboard />
      </Router>
  
  );
}

export default App;