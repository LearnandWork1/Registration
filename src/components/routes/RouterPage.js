import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from "../Login";
 import LoginNEW from "../LoginNEW";
import SchoolNipunaData from '../SchoolNipunaData';
import LoadNipunaResponses from '../LoadNipunaResponses';
import Test from '../Test';
import Registration from '../Registration';
import ContactUs from '../main/ContactUs';
// import AdminTest from "../components/admin/Admintest";
// import UserTest from "..components//user/UserTest";
import ProtectedRoute from '../Auth/ProtectedRoute'; // Import the ProtectedRoute component
// import Dashboard from "../user/Dashboard";
// import AdminDashboard from "../admin/AdminDashboard";

const RouterPage = () => {
    return (
      <Router>
        <Routes>          
          <Route path="/SchoolNipunaData" element={<SchoolNipunaData />} />
          <Route path="/LoadNipunaResponses" element={<LoadNipunaResponses />} />
          <Route path="/Login" element={<Login />} />         
          <Route path="/Test" element={<Test />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="/user-test" element={<ProtectedRoute><UserTest /></ProtectedRoute>} />
          <Route path="/admin-master" element={<ProtectedRoute><AdminTest /></ProtectedRoute>} /> */}
           {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
           <Route path="/admindashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} /> */}
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    );
  };
  
  export default RouterPage;