import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import GoodHabits from './components/GoodHabits';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/good-habits" element={<GoodHabits />} />
      </Routes>
    </Router>
  );
}

export default App;