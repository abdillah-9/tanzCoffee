import React from 'react'
import SospeterPic from '../../assets/20251016_235737.png';
import EvodiusPic from '../../assets/Evodius.png';
import OmaryPic from '../../assets/Omary.png';
import CoffeeRoaster from '../../assets/20220716_134205.jpg';
import CoffeeUnion from '../../assets/IMG-20240518-WA0002.jpg';
import CoffeeTrader from '../../assets/IMG-20230224-WA0008.jpg';
import CoffeeManufacture from '../../assets/IMG-20240215-WA0016.jpg';

export default function OurProducts() {
  return (
    <div style={{display:'flex', gap:'50px', padding:"20px 0px 20px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',textAlign:'centr',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>Our Products</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px', fontWeight:400, textAlign:'center'}}>
          Our coffee products meet the following quality requirements
        </div>
        <div style={{display:'flex', gap:"20px", justifyContent:"space-between",flexWrap:'wrap'}}>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,}}>
            Storage Temperature 18 – 20 degrees centigrade  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,}}>
            Moisture: Not less than 12% max  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,}}>
            Foreign matters: 0.5%  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,}}> 
            Humidity 55% - 70% 
          </div>
        </div>
      </div>

      {/* Business Organizations */}
      <div style={{display: 'flex', flexWrap:'wrap', }}>
        <div style={{display:'flex', flexWrap:'wrap',
         gap:"23px", color:"white", backgroundColor:'rgba(185, 130, 12, 1)',
         padding:'20px 20px 50px 20px',justifyContent:'center',alignItems:'center'
        }}
          className='opacityAnimation'
        >
          <div style={{fontSize:'40px', fontWeight:500, textAlign:'center',
            width:'100%', color:"white"}}>
            Target Market
          </div>
          <div 
          style={{color:'rgba(54, 35, 17, 1)',width:"100%",paddingBottom:'15px',
          fontSize:'18px', fontWeight:500, textAlign:'center'}}>
            We serve both local and international coffee 
            corporations with a diverse range of industries
          </div>
  
          <div style={{ backgroundImage:`url(${CoffeeRoaster})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'black', width:'100%',
            borderRadius:'0px',maxWidth:'400px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,textAlign:'center',
              }}>
              Coffee roasters
            </p>
          </div>

          <div style={{ backgroundImage:`url(${CoffeeUnion})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'black', width:'100%',
            borderRadius:'0px',maxWidth:'400px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,textAlign:'center',
              }}>
              Coffee Cooperative Unions
            </p>
          </div>

          <div style={{ backgroundImage:`url(${CoffeeTrader})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'black', width:'100%',
            borderRadius:'0px',maxWidth:'400px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,textAlign:'center',
              }}>
              Instant coffee traders
            </p>
          </div>

          <div style={{ backgroundImage:`url(${CoffeeManufacture})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'black', width:'100%',
            borderRadius:'0px',maxWidth:'400px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,textAlign:'center',
              }}>
              Other coffee products manufacturers
            </p>
          </div>

        </div>
      </div>

      {/* Ending paragraph*/}
      <div style={{display:"flex",flexDirection:'column',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600, textAlign:'center',}}>Other Products</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          In addition to coffee, the company distributes maize, beans,
          sesame seeds, rice, cashew nuts, and red beans to both domestic and foreign markets.
        </div>
      </div>


    </div>
  )
}
