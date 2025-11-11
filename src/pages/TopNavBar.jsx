import React, { useContext, useState } from 'react'
import { NavStates } from '../App';
import logo from '../assets/IMG_20240513_131143_913.jpg';

export default function TopNavBar() {
  return (
    <div style={{display:'flex',flexWrap:'wrap', 
        padding:'0px 15px',backgroundColor:'rgba(116, 80, 4, 1)',
    justifyContent:'cente', alignItems:'center', gap:'15px', height:'120px'}}>
      <LogoxName/>
      <NavLinks/>
    </div>
  )
}

function LogoxName(){
    return(
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:"center", gap:'15px'}}>
     <img src={logo} alt='TanzCoffee' style={{width:'80px', height:'80px',borderRadius:'50%'}}/>
     <div style={{display:'flex', flexDirection:'column'}}>
        <span style={{fontSize:'25px', color:"white"}}>TanzCoffee</span>
        <span style={{fontSize:'13px',color:'rgba(185, 130, 12, 1)'}}>Secondary text here</span>
     </div>
  </div>
    )
}

function NavLinks(){
    const {activeLink, setActiveLink} = useContext(NavStates);

    return(
    <div style={{display:'flex', gap:"10px", flexWrap:'wrap'}}>
        <span onClick={()=>{setActiveLink('Home')}} 
            style={ activeLink == 'Home' ? 
                { cursor:'pointer',padding:"15px", ...active } : { cursor:'pointer',padding:"15px"}}
        >
            Home
        </span>
        <span onClick={()=>{setActiveLink('About Us')}}
            style={ activeLink == 'About Us' ? 
                {  cursor:'pointer',padding:"15px", ...active } : { cursor:'pointer',padding:"15px"}}
        >
            About Us
        </span>
        <span onClick={()=>{setActiveLink('Business Services')}}
            style={ activeLink == 'Business Services' ? 
                {  cursor:'pointer',padding:"15px", ...active } : { cursor:'pointer',padding:"15px"}}
        >
            Business Services
        </span>
        <span onClick={()=>{setActiveLink('Our Products')}}
            style={ activeLink == 'Our Products' ? 
                {  cursor:'pointer',padding:"15px", ...active } : { cursor:'pointer',padding:"15px"}}
        >
            Our Products
        </span>
        <span onClick={()=>{setActiveLink('Contacts Information')}}
            style={ activeLink == 'Contacts Information' ? 
            {  cursor:'pointer',padding:"15px", ...active } : { cursor:'pointer',padding:"15px"}}
        >
            Contacts Information
        </span>
    </div>
    )
}

const active ={
    backgroundColor:"rgba(185, 130, 12, 1)",
}