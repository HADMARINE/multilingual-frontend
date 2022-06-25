import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '@pages/PageNotFound';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const ClientRouter = (
  <>
    <Router basename="/">
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </Router>
  </>
);

export default ClientRouter;
