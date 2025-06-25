import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

// Service Pages
import IndoorOutdoorLighting from './pages/services/IndoorOutdoorLighting';
import PowerOutletInstallations from './pages/services/PowerOutletInstallations';
import SwitchboardRepairs from './pages/services/SwitchboardRepairs';
import ConsumerMainsReplacement from './pages/services/ConsumerMainsReplacement';
import CeilingFanFitting from './pages/services/CeilingFanFitting';
import ExhaustFanFitting from './pages/services/ExhaustFanFitting';
import SmokeDetectorSetup from './pages/services/SmokeDetectorSetup';
import VideoDoorbellSetup from './pages/services/VideoDoorbellSetup';
import EVChargerInstallation from './pages/services/EVChargerInstallation';
import SecurityCameraInstallation from './pages/services/SecurityCameraInstallation';
import ElectricalSafetyInspections from './pages/services/ElectricalSafetyInspections';
import RentalComplianceReports from './pages/services/RentalComplianceReports';
import RenovationElectricalFitouts from './pages/services/RenovationElectricalFitouts';
import PoolSpaWiring from './pages/services/PoolSpaWiring';
import EmergencyTroubleshooting from './pages/services/EmergencyTroubleshooting';
import DataPointConnections from './pages/services/DataPointConnections';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          
          {/* Service Routes */}
          <Route path="/services/indoor-outdoor-lighting" element={<IndoorOutdoorLighting />} />
          <Route path="/services/power-outlet-installations" element={<PowerOutletInstallations />} />
          <Route path="/services/switchboard-repairs" element={<SwitchboardRepairs />} />
          <Route path="/services/consumer-mains-replacement" element={<ConsumerMainsReplacement />} />
          <Route path="/services/ceiling-fan-fitting" element={<CeilingFanFitting />} />
          <Route path="/services/exhaust-fan-fitting" element={<ExhaustFanFitting />} />
          <Route path="/services/smoke-detector-setup" element={<SmokeDetectorSetup />} />
          <Route path="/services/video-doorbell-setup" element={<VideoDoorbellSetup />} />
          <Route path="/services/ev-charger-installation" element={<EVChargerInstallation />} />
          <Route path="/services/security-camera-installation" element={<SecurityCameraInstallation />} />
          <Route path="/services/electrical-safety-inspections" element={<ElectricalSafetyInspections />} />
          <Route path="/services/rental-compliance-reports" element={<RentalComplianceReports />} />
          <Route path="/services/renovation-electrical-fitouts" element={<RenovationElectricalFitouts />} />
          <Route path="/services/pool-spa-wiring" element={<PoolSpaWiring />} />
          <Route path="/services/emergency-troubleshooting" element={<EmergencyTroubleshooting />} />
          <Route path="/services/data-point-connections" element={<DataPointConnections />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;