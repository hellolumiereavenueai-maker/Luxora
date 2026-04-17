import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', background: '#111', color: '#fff', padding: '20px'}}>
        <h1>✨ LUXORA</h1>
        <p>AI-powered Interior Design Platform</p>
        <button style={{background: '#7c3aed', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
          Get Started
        </button>
      </div>
    </Router>
  );
}

export default App;
