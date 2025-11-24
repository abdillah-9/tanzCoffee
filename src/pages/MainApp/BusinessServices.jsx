import React from 'react'
import { GiCoffeeBeans, GiFarmer } from 'react-icons/gi';
import { PiShoppingCartFill } from 'react-icons/pi';
import { FaBookOpenReader, FaHandHoldingHand, FaWarehouse } from 'react-icons/fa6';
import videoServices from '../../assets/videoServices_hevc.mp4';

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
        style={{color:'#dd9d6dff',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          TanzCoffee Trading Company Limited is a Tanzanian coffee
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
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <GiCoffeeBeans style={{fontSize:'25px', color:'black'}}/>
              </div>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Processing premium Robusta green coffee
              products to suit international market requirements.
            </p>
          </div>
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <PiShoppingCartFill style={{fontSize:'25px', color:'black'}}/>
              </div>             
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Providing a ready market for the increasing coffee production across Kagera region
            </p>

          </div>  
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <GiFarmer style={{fontSize:'25px', color:'black'}}/>
              </div>                            
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Supplying of quality farming equipment, seeds, pesticides and farming gears.
            </p>
            
          </div>
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <FaWarehouse style={{fontSize:'25px', color:'black'}}/>
              </div>                          
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Storage services of other farmers’ products in our 
              facilities during off-seasons periods. 
            </p>

          </div>
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <FaBookOpenReader style={{fontSize:'25px', color:'black'}}/>
              </div>            
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Company registration services to both local and foreign nationals.
            </p>
            
          </div> 
          <div style={{backgroundColor:'#dd9d6dff', color:'white', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,padding:'1px',
            display:'flex',flexDirection:'column', gap:'10px',alignItems:'center',
          }}>
            <div style={{width:'100%', backgroundColor:'white',justifyContent:'center',
              display:'flex', alignItems:'center', borderRadius:'5px 5px 0px 0px',
              padding:"15px 0px",
            }}>
              <div
              style={{padding:'25px 30px', borderRadius:'50%', 
              boxShadow:'1px 0.5px 5px black'}}>
                <FaHandHoldingHand style={{fontSize:'25px', color:'black'}}/>
              </div>              
            </div>

            <p style={{padding:'10px', color:'white'}}>
              Export and Import trade consultation services
            </p>

          </div>
        </div>
      </div>
      {/*Video */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100vw', padding:'60px', gap:'40px', backgroundColor:'white'}}>
        <div style={{maxWidth:'500px',minWidth:'200px', flexGrow:1,aspectRatio: 1/0.7, width:'40%'}}>
          <video src={videoServices} style={{ objectFit:'cover', width:'100%',aspectRatio:1/1}} autoPlay loop controls muted preload='auto'/>
        </div>
        <div style={{maxWidth:'500px',minWidth:'200px', display:'flex', flexGrow:1, fontSize:'18px',width:'40%', textAlign:'justify', fontWeight:500, color:'black'}}>
          The purpose of this brief video is to provide potential customers with a quick overview of our business practices. The video is a brief demonstration of how we purchase, where we purchase from, how we process, how we inspect for quality, how we pack, how we export, and how quality is our top concern. I appreciate you watching
        </div>
      </div>

    </div>
  )
}
