import React, { useContext } from 'react'
import { NavStates } from '../../App';
import Home from './Home';
import AboutUs from './AboutUs';
import BusinessServices from './BusinessServices';
import OurProducts from './OurProducts';
import ContactsInformation from './ContactsInformation';

export default function MainApp() {
    const {activeLink, setActiveLink} = useContext(NavStates);
  return (
    <div style={{backgroundColor:'white', marginTop:'100ppx'}}>
        {
            activeLink == "Home" ? <Home/> :
            activeLink == "About Us" ? <AboutUs/> :
            activeLink == "Business Services" ? <BusinessServices/> :
            activeLink == "Our Products" ? <OurProducts/> :
            activeLink == "Contacts Information" && <ContactsInformation/>
        }
    </div>
  )
}
