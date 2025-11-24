import React, { createContext, useState } from 'react'
import TopPic from './pages/TopPic';
import TopNavBar from './pages/TopNavBar';
import MainApp from './pages/MainApp/MainApp';
import './App.css'
import { LuCopyright } from 'react-icons/lu';

export const NavStates = createContext();

export default function App() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <NavStates.Provider value={{activeLink, setActiveLink}}>
      <div style={Main}>
        <div style={{zIndex:5, position:'fixed', gap:'0px'}}>
          {/* <TopPic/> */}
          <TopNavBar/>
        </div>
        <MainApp/>
        {/*Paragraph for contacts footer */}
        <div style={{minHeight:'60px', width:'100vw', backgroundColor:'#2b6603ff', display:'flex', justifyContent:'center', alignItems:'center', padding:'15px', textAlign:'cente'}}>
          <div style={{fontSize:'18px', color:'white', display:'flex', flexWrap:'wrap',alignItems:'center', gap:'5px'}}><span>Copyrights </span><LuCopyright style={{fontSize:'20px'}}/><span>2025. </span> <span>TanzCoffee Trading Company Limited All Rights Reserved</span></div>
        </div>
      </div>
    </NavStates.Provider>
  )
}


const Main ={
  width:'100vw',
  height:'100vh'
}