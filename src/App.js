import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
  }
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode is enabled","success")
      // alert('Switched to Light Mode')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor='rgb(26 37 47)';
      showAlert("Dark mode is enabled","success")
      // alert('Switched to Dark Mode')
    } 
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
      {/* This is how files are seperated */}
      {/* Functional parameters into components */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading='Enter text here' mode={mode}  />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
