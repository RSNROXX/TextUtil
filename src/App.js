import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import Testform from './components/TestForm.js';
import Alert from './components/Alert.js';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); //Whether Dark-mode is enabled or not
  const [alert, setalert] = useState(null); //For Alert

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#26282e';
      showalert("Dark mode has been enabled", "success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "TextUtils" about="About Us" mode = {mode} toggleMode = {toggleMode} /> 
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode = {mode}/>}>
            </Route>
            <Route exact path="/" element = {<Testform showalert = {showalert} heading = "TestUtils - Word Counter | Character Counter" mode = {mode}/>}>
            </Route>  
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;