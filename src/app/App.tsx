import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '../pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='login' />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
