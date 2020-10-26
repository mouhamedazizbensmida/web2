import React from "react";
import "./App.css";
import FullName from "./components/profile/FullName";
import Address from "./components/profile/Address";
import ProfilPhoto from "./components/profile/ProfilPhoto";
import './style.css';
function App() {
  return (
    <div className='container'>
 <div className='prof'> 
 <ProfilPhoto/>
 </div>
     
      <FullName />
    
      <div className='ectiture' >
      <Address />
      </div>
  </div>
  );
};

export default App;

