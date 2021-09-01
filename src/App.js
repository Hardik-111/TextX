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
   }, 1500);
 }

 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-info')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
 }
 const toggleMode =(cls)=>{
   removeBodyClasses();
   document.body.classList.add('bg-'+cls)
   if (mode === 'light'){
     setMode('dark')
     document.body.style.backgroundColor = 'black';
     showAlert("Dark Mode has been enabled" , "Success")
   
   }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled" , "Success")
    
  }
  

 }
   

  return (
    <>
   
    <Router>
     <Navbar  title="YourText"  mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     
     <div className="container my-3">
     <Switch>
       <Route exact path="/about">
       <About  heading="About Us" mode={mode} />
       </Route>
       <Route exact path="">
       <TextForm showAlert={showAlert} heading="Try YourText - Word Counter,Character Counter,Remove extra spaces" mode={mode} />
       </Route>
    </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
 