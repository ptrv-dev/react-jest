import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
