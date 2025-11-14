import React, { useContext, useState } from 'react'
import { NavStates } from '../App';
import logo from '../assets/tanzCoffee_logo.png';
import { PiInstagramLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';
import { TbBrandLinkedinFilled } from 'react-icons/tb';

export default function TopNavBar() {
  return (
    <div style={{display:'flex',flexWrap:'wrap', width:'100vw',minHeight:'100px', 
        padding:'10px 15px',backgroundColor:'rgba(116, 80, 4, 1)',
        justifyContent:'space-between', alignItems:'center', gap:'20px',
        boxShadow:'1px 0.5px 7px rgb(200,200,200)'}}>
      <LogoxName/>
      <NavLinks/>
      {/* Social media links */}
      <div style={{display:'flex', gap:'15px', color:'rgba(185,130,12,1)'}}>
        <PiWhatsappLogoFill style={{fontSize:'18px', color:'rgba(185, 130, 12, 1)'}} />
        <PiInstagramLogoFill style={{fontSize:'18px', color:'rgba(185,130,12,1)'}} />
        <TbBrandLinkedinFilled style={{fontSize:'18px', color:'rgba(185,130,12,1)'}} />
      </div>
    </div>
  )
}

function LogoxName(){
    return(
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:"center", gap:'15px'}}>
     <div style={{ width:'65px', height:'65px', overflow:'hidden', borderRadius:'50%'}}>
        <img src={logo} alt='logo' style={{width:'100%', height:'100%', scale:1.35}} />
     </div>
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
    <div style={{display:'flex', gap:"8px", flexWrap:'wrap',height:'100%'}}>
        <div onClick={()=>{setActiveLink('Home')}} 
            style={ activeLink == 'Home' ? 
                { cursor:'pointer',padding:"8px", ...active } : { cursor:'pointer',padding:"8px"}}
        >
            Home
        </div>
        <div onClick={()=>{setActiveLink('About Us')}}
            style={ activeLink == 'About Us' ? 
                {  cursor:'pointer',padding:"8px", ...active } : { cursor:'pointer',padding:"8px"}}
        >
            About Us
        </div>
        <div onClick={()=>{setActiveLink('Business Services')}}
            style={ activeLink == 'Business Services' ? 
                {  cursor:'pointer',padding:"8px", ...active } : { cursor:'pointer',padding:"8px"}}
        >
            Business Services
        </div>
        <div onClick={()=>{setActiveLink('Our Products')}}
            style={ activeLink == 'Our Products' ? 
                {  cursor:'pointer',padding:"8px", ...active } : { cursor:'pointer',padding:"8px"}}
        >
            Our Products
        </div>
        <div onClick={()=>{setActiveLink('Contacts Information')}}
            style={ activeLink == 'Contacts Information' ? 
            {  cursor:'pointer',padding:"8px", ...active } : { cursor:'pointer',padding:"8px"}}
        >
            Contacts Information
        </div>
    </div>
    )
}

const active ={
    backgroundColor:"rgba(185, 130, 12, 1)",
}