import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './sass/main.scss'
import Connection from './pages/Connection.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Header from './components/Header.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Connection />}/>
        <Route path='*' element={<Navigate to='/' />}/>
        <Route path='/user/:id' element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
