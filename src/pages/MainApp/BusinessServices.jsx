import React from 'react'
import OperationsPIC from '../../assets/20250527_091654.jpg';
import GreenCoffee from '../../assets/WhatsApp Image 2025-07-12 at 14.25.59_5c57bb2a.jpg';
import ReadyMarket from '../../assets/Screenshot_20240924_194001_Instagram.jpg';
import FarmingEquipment from '../../assets/20251006_114627 (1).jpg';
import StorageService from '../../assets/IMG-20220720-WA0027.jpg';
import CompanyRegistrationService from '../../assets/IMG_20240513_131143_913.jpg';
import TradeConsultation from '../../assets/IMG-20230301-WA0016.jpg';

export default function BusinessServices() {
  return (
    <div style={{display:'flex', gap:'50px', padding:"20px 0px 20px 0px",
    flexDirection:'column', alignItems:'center'}}>
      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',textAlign:'center',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>Business Services</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          Give brief desc like this -- TanzCoffee Trading Company Limited is a Tanzanian coffee
          processing and exporting company. We have our processing 
          facilities located in Karagwe District, Kagera, Tanzania and
          we are planning to establish our administration office in Dar es Salaam, Tanzania.
        </div>
      </div>

      {/* Business Organizations */}
      <div style={{display: 'flex', flexWrap:'wrap', }}>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between',
         gap:"10px", color:"white", padding:'10px 15px'}}
          className='opacityAnimation'
        >
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={GreenCoffee} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Processing premium Robusta green coffee
              products to suit international market requirements.
            </p>
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={ReadyMarket} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Providing a ready market for the increasing coffee production across Kagera region
            </p>

          </div>  
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={FarmingEquipment} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Supplying of quality farming equipment, seeds, pesticides and farming gears.
            </p>
            
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={StorageService} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Storage services of other farmers’ products in our 
              facilities during off-seasons periods. 
            </p>

          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={CompanyRegistrationService} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Company registration services to both local and foreign nationals.
            </p>
            
          </div> 
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <img src={TradeConsultation} alt='pic' 
              style={{width:'190px', height:'170px',borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}/>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Export and Import trade consultation services
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}
