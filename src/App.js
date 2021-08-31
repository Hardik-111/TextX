import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';




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
   }, 2000);
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
     <Navbar title="YourText" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
     </div>

    </>
  );
}

export default App;
 