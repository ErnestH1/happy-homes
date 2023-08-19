import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import ProductsPage from './components/Productspage';
import ContactsPage from './components/Contactspage';
import Navbar from './components/Navbar'; // Import the Navbar component

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Use the Navbar component */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>

      <footer className="bg-dark text-white text-center py-3 fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Happy Homes. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              {/* Add logos and other info here */}
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
