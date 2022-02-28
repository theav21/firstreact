import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React  from 'react';

function App() {
  const [mode, setMode] = useState("light")
  const [label , setLabel] = useState("dark")

  const toggler=()=>{
    if(mode==="light"){
      setLabel("white")
      setMode("dark")
      document.body.style.backgroundColor ='black'
    }
    else{
      setLabel("black")
      setMode("light")
      document.body.style.backgroundColor ='white'
    }
  }



  return (
    <>
      <Navbar title="My-App" mode={mode} toggle={toggler} label={label}/>
      <TextForm  mode={mode} label={label}/>
    </>
  );
}

export default App;
