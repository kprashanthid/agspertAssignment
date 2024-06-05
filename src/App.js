import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductManagementPage from './pages/ProductManagementPage';
import SaleOrdersPage from './pages/SaleOrdersPage';
import { AuthProvider, useAuth } from './AuthContext';
import NavBar from './components/NavBar';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/products" 
            element={<ProtectedRoute><ProductManagementPage /></ProtectedRoute>} 
          />
          <Route 
            path="/orders" 
            element={<ProtectedRoute><SaleOrdersPage /></ProtectedRoute>} 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
