import React, { useContext, useEffect, useState } from 'react'
import { NavStates } from '../App';
import logo from '../assets/logoWHITE.webp';
import { PiInstagramLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa6';

 {/* #E2A16F #dd9d6dff*/}
export default function TopNavBar() {
  return (
    <div style={{display:'flex',flexWrap:'wrap', width:'100vw',minHeight:'100px', 
        padding:'10px 15px',backgroundColor:'#2b6603ff',
        justifyContent:'space-between', alignItems:'center', gap:'20px'}}>
      <LogoxName/>
      <NavLinks/>
      {/* Social media links */}
      <div style={{display:'flex', gap:'15px', color:'white'}}>
        <a href='https://wa.me/255788491086' target='_blank'>
            <PiWhatsappLogoFill style={{fontSize:'27px', color:'white'}} />
        </a>
        <a href='https://www.instagram.com/tanzcoffee_' target='_blank'>
            <PiInstagramLogoFill style={{fontSize:'27px', color:'white'}} />
        </a>
        <a href='https://www.linkedin.com/company/tanzcoffee-trading-company-limited/' 
        target='_blank'>
            <TbBrandLinkedinFilled style={{fontSize:'27px', color:'white'}} />
        </a>
      </div>
    </div>
  )
}

function LogoxName() {
  const [loaded, setLoaded] = useState(false);
  const [preloadedSrc, setPreloadedSrc] = useState(null);

  // ⭐ Preload image using new Image()
  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      setPreloadedSrc(img.src);
      setLoaded(true);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}>

      {/* Logo wrapper */}
      <div style={{
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: '#ffffff20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* ⭐ Show only when the image is preloaded */}
        {loaded ? (
          <img
            src={preloadedSrc}
            alt="logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              scale:1.32
            }}
          />
        ) : (
          // ⭐ Optional loader / skeleton
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            animation: 'pulse 1.5s infinite',
          }} />
        )}
      </div>

      {/* Company text */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontSize: '17px',
          color: 'white',
          fontWeight: 700,
          whiteSpace: 'nowrap'
        }}>
          TanzCoffee Trading Company Ltd
        </span>

        <span style={{
          fontSize: '13px',
          color: 'white',
          opacity: 0.85,
          fontStyle: 'italic',
          marginTop: '-3px'
        }}>
          We are proud to serve you
        </span>
      </div>
    </div>
  );
}

function NavLinks(){
    const {activeLink, setActiveLink} = useContext(NavStates);

    const [open, setOpen] = useState(false);   // ✅ added

    return(
        <div>

            {/* nav icon */}
            <div className='navIcon'>
                <FaBars 
                    style={{fontSize:'20px', color:'white', cursor:'pointer'}} 
                    onClick={() => setOpen(!open)}   // ✅ added
                />
            </div> 

            {/* nav links (desktop) */}
            <div 
              style={{gap:"8px", flexWrap:'wrap', height:'100%', color:'white', fontWeight:500}} 
              className='navLinks'
            >
                <div onClick={()=>{setActiveLink('Home')}} 
                    style={ activeLink == 'Home' ? { cursor:'pointer',padding:"8px", borderRadius:'5px', ...active } : { cursor:'pointer',padding:"8px", borderRadius:'5px'}}
                >
                    Home
                </div>
                <div onClick={()=>{setActiveLink('About Us')}}
                    style={ activeLink == 'About Us' ? { cursor:'pointer',padding:"8px", borderRadius:'5px', ...active } : { cursor:'pointer',padding:"8px", borderRadius:'5px'}}
                >
                    About Us
                </div>
                <div onClick={()=>{setActiveLink('Business Services')}}
                    style={ activeLink == 'Business Services' ? { cursor:'pointer',padding:"8px", borderRadius:'5px', ...active } : { cursor:'pointer',padding:"8px", borderRadius:'5px'}}
                >
                    Business Services
                </div>
                <div onClick={()=>{setActiveLink('Our Products')}}
                    style={ activeLink == 'Our Products' ? { cursor:'pointer',padding:"8px", borderRadius:'5px', ...active } : { cursor:'pointer',padding:"8px", borderRadius:'5px'}}
                >
                    Our Products
                </div>
                <div onClick={()=>{setActiveLink('Contacts Information')}}
                    style={ activeLink == 'Contacts Information' ? { cursor:'pointer',padding:"8px", borderRadius:'5px', ...active } : { cursor:'pointer',padding:"8px", borderRadius:'5px'}}
                >
                    Contacts Information
                </div>
            </div>

            {/* ✅ MOBILE MENU (only visible when open === true) */}
            {open && (
                <div className="mobileMenu" style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px',
                    backgroundColor:'#2b6603ff',
                    padding:'0px',
                    marginTop:'10px',
                    borderRadius:'5px',
                    color:'white'
                }}>
                    <div onClick={()=>{setActiveLink('Home'); setOpen(false)}}
                        style={activeLink == 'Home' ? {backgroundColor:'#dd9d6dff', padding:'12px', width:'100vw'} : {backgroundColor:'rgba(0,0,0,0)'}}>
                            Home
                    </div>
                    <div onClick={()=>{setActiveLink('About Us'); setOpen(false)}} style={activeLink == 'About Us' ? {backgroundColor:'#dd9d6dff', padding:'12px', width:'100vw'} : {backgroundColor:'rgba(0,0,0,0)'}}>
                        About Us
                    </div>
                    <div onClick={()=>{setActiveLink('Business Services'); setOpen(false)}} style={activeLink == 'Business Services' ? {backgroundColor:'#dd9d6dff', padding:'12px', width:'100vw'} : {backgroundColor:'rgba(0,0,0,0)'}}>
                        Business Services
                    </div>
                    <div onClick={()=>{setActiveLink('Our Products'); setOpen(false)}} style={activeLink == 'Our Products' ? {backgroundColor:'#dd9d6dff', padding:'12px', width:'100vw'} : {backgroundColor:'rgba(0,0,0,0)'}}>
                        Our Products
                    </div>
                    <div onClick={()=>{setActiveLink('Contacts Information'); setOpen(false)}} style={activeLink == 'Contacts Information' ? {backgroundColor:'#dd9d6dff', padding:'12px', width:'100vw'} : {backgroundColor:'rgba(0,0,0,0)'}}>
                        Contacts Information
                    </div>
                </div>
            )}

        </div>
    )
}

const active ={
    backgroundColor:"#dd9d6dff",
}