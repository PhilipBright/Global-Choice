import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Course from './components/Course';
import Job from './components/Job';

function App() {
  return (
    <div style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <Navigation/>
      <Home/>
      <Course/>
      <Job/>
    </div>
  )
}

export default App
