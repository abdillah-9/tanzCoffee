import React, { createContext, useState } from 'react'
import TopPic from './pages/TopPic';
import TopNavBar from './pages/TopNavBar';
import MainApp from './pages/MainApp/MainApp';
import './App.css'

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
      </div>
    </NavStates.Provider>
  )
}


const Main ={
  width:'100vw',
  height:'100vh'
}