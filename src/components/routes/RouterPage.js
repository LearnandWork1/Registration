import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from "../Login";
 import LoginNEW from "../LoginNEW";
import SchoolNipunaData from '../SchoolNipunaData';
import LoadNipunaResponses from '../LoadNipunaResponses';
import Test from '../Test';
import Registration from '../Registration';
import ContactUs from '../main/ContactUs';


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

          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    );
  };
  
  export default RouterPage;