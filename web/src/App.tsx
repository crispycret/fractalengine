import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/styles/App.css';

import ButtonAppBar from "./components/navigation/ButtonAppBar" ;
import ResponsiveAppBar from "./components/navigation/ResponsiveAppBar";
import SimpleBottomNavigation from "./components/navigation/SimpleBottomNavigation";

import FractalCanvas from './components/FractalCanvas';


import {Layout, Header, Footer} from './pages/Layout';
import Home from './pages/Home';
import User from './pages/User';
import FractalEngine from './pages/FractalEngine';
import NoPage from './pages/NoPage';


function App() {

  useEffect(() => {}, []);


  return (
    <div className="App">

      <h2>Fractal Engine</h2>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="user" element={<User />} />
              <Route path="engine" element={<FractalEngine />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>

          <Footer />

        </BrowserRouter>

    </div>
  );
}


export default App;


