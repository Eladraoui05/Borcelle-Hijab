import { useState } from 'react';
import './Dashbord.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import SidebarD from './SidebarD';
import HomeD from './HomeD';
import ProductDashboard from './ProductDashboard'; 
import CategoryDashboard from './CategoryDashboard';
import Customers from './Customers'; 
import ReportsPage from './ReportsPage';
import GeneralSettings from './GeneralSettings';

function Dashbord() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="dashboard-container">
      <div className='grid-container'>
        <Admin OpenSidebar={OpenSidebar} />
        <SidebarD openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <Routes>
          <Route path="/" element={<HomeD />} />
          <Route path="/ProductDashboard" element={<ProductDashboard />} />
          <Route path="/GeneralSettings" element={<GeneralSettings />} />
          <Route path="/ReportsPage" element={<ReportsPage />} />
          <Route path="/CategoryDashboard" element={<CategoryDashboard />} />
          <Route path="/Customers" element={<Customers/>} /> 
        </Routes>
      </div>
    </div>
  );
}

export default Dashbord;
