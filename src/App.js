
import React from 'react';
import './App.css';
import {StickyNavbar} from './StickyNavbar'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StickyNavbar></StickyNavbar>
        <Router></Router>
      </BrowserRouter>

    </div> 
  )
}

export default App;
