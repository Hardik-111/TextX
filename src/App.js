import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";


function App() {

 const [mode,setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert =(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(() => {
     setAlert(null);
   }, 2500);
 }

 const toggleMode =()=>{
   if (mode === 'light'){
     setMode('dark')
     document.body.style.backgroundColor = 'black';
     showAlert("Dark Mode has been enabled" , "Success")
     document.title="MyText - (Dark Mode)"
   }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled" , "Success")
    document.title="MyText - (Light Mode)"
  }
  

 }
   

  return (
    <>
   
    <Router>
     <Navbar title="YourText" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     
     <div className="container my-3">
     <Switch>
       <Route exact path="/about">
       <About/>
       </Route>
       <Route exact path="/home">
       <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
       </Route>
    </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
 