import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/styles/index.css';
import App from './App';

import {Layout, Header} from './pages/Layout';
import Home from './pages/Home';
import User from './pages/User';
import FractalEngine from './pages/FractalEngine';
import NoPage from './pages/NoPage';



// const container = document.getElementById('root')

// if (container) 
// {
//   const root = ReactDOM.createRoot(container);
//   root.render(<App />);
// }

// else 
// {
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
// }
  