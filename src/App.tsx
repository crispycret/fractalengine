import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

import { Home } from './components/Home/Home';

import Theme from './helpers/hooks/useTheme';
import ThemedComponent from './components/utils/theme/ThemedComponent';
import ThemeToggler from './components/utils/theme/ThemeToggler';

import Demo from './pages/Demo';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {

  const props = {
    theme: Theme()
  }


  return (
    <ThemedComponent theme={props.theme}>
      <div className='min-vh-100 bg-primary'>
        <ThemeToggler theme={props.theme} />
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={ <Home {...props} /> } />
            <Route path='/demo' element={ <Demo {...props} /> } />
            <Route path='/login' element={ <Login {...props} /> } /> 
            <Route path='/signup' element={ <Register {...props} /> } /> 
            {/* GuardedRoute path='/dashboard' element={ <Dashboard {...props} /> */}
            <Route path='/dashboard' element={ <Dashboard {...props} /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemedComponent>
  );
}

export default App;
