import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("grey");
  const [label, setLabel] = useState("black");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const toggler=()=>{
  //   if(mode==="light" || mode==="red"){
  //     setLabel("white")
  //     setMode("dark")
  //     document.body.style.backgroundColor ='black'
  //     showAlert("dark mode has been enabled", "success");
  //   }
  //   else if(mode==="dark" || mode==="red"){
  //     setLabel("black")
  //     setMode("light")
  //     document.body.style.backgroundColor ='white'
  //     showAlert("light mode has been enabled", "success");
  //   }
  //   else if(mode==="dark" || mode==="light"){
  //     setLabel("red")
  //     setMode("red")
  //     document.body.style.backgroundColor ='red'
  //     showAlert("red mode has been enabled", "success");
  //   }
  // }
  const toggleLight = () => {
    setLabel("black");
    setMode("grey");
    setColor("light");
    document.body.style.backgroundColor = "white";
    showAlert("light mode has been enabled", "success");
  
  };
  const toggleDark = () => {
    setLabel("white");
    setMode("grey");
    setColor("dark");
    document.body.style.backgroundColor = "black";
    showAlert("dark mode has been enabled", "success");
    
  };
  const toggleRed = () => {
    setLabel("white");
    setColor("dark");
    setMode("red");
    document.body.style.backgroundColor = "#ce5955";
    showAlert("red mode has been enabled", "success");
    
  };
  const toggleBlue = () => {
    setLabel("white");
    setColor("dark");
    setMode("blue");
    document.body.style.backgroundColor = "#2311be";
    showAlert("blue mode has been enabled ", "success");
  };
  const togglePurple = () => {
    setLabel("black");
    setColor("dark");
    setMode("#a142d8");
    document.body.style.backgroundColor = "#5b0c69";
    showAlert("purple mode has been enabled ", "success");
  };

  return (
    <>
      <Navbar
        title="My-App"
        mode={mode}
        toggleLight={toggleLight}
        toggleDark={toggleDark}
        toggleRed={toggleRed}
        toggleBlue={toggleBlue}
        togglePurple={togglePurple}
        color={color}
        label={label}


      />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} mode={mode} label={label} />
    </>
  );
}

export default App;
