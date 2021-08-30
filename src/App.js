import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      // alert('Switched to Light Mode')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      // alert('Switched to Dark Mode')
    } 

  }
  return (
    <>
      {/* This is how files are seperated */}
      {/* Functional parameters into components */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading='Enter text here' mode={mode}  />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
