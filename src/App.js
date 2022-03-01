import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React  from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [label , setLabel] = useState("dark")
  const [alert , setAlert] = useState(null)

  const showAlert = (message ,type)=>{
    setAlert({
      message : message , 
      type: type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggler=()=>{
    if(mode==="light"){
      setLabel("white")
      setMode("dark")
      document.body.style.backgroundColor ='black'
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setLabel("black")
      setMode("light")
      document.body.style.backgroundColor ='white'
      showAlert("light mode has been enabled", "success");
    }
  }



  return (
    <>
      <Navbar title="My-App" mode={mode} toggle={toggler} label={label}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} mode={mode} label={label}/>
    </>
  );
}

export default App;
