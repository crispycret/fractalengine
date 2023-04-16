import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/App.css';

import AppBar from './components/AppBar';
import Footer from './components/Footer';

import FractalEngine from './pages/FractalEngine';

function App() {
  return (
    <div className="app">

      <AppBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FractalEngine/>} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
