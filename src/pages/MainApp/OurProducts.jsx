import React from 'react'
import SospeterPic from '../../assets/20251016_235737.png';
import EvodiusPic from '../../assets/Evodius.png';
import OmaryPic from '../../assets/Omary.png';

export default function OurProducts() {
  return (
    <div style={{display:'flex', gap:'50px', padding:"20px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',textAlign:'center',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>Our Products</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px', fontWeight:400}}>
          Our coffee products meet the following quality requirements
        </div>
        <div style={{display:'flex', gap:"20px", justifyContent:"space-between",flexWrap:'wrap'}}>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white'}}>
            Storage Temperature 18 – 20 degrees centigrade  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white'}}>
            Moisture: Not less than 12% max  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white'}}>
            Foreign matters: 0.5%  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white'}}> 
            Humidity 55% - 70% 
          </div>
        </div>
      </div>

      {/* Business Organizations */}
      <div style={{display: 'flex', flexWrap:'wrap', }}>
        <div style={{display:'flex', flexWrap:'wrap',
         gap:"13px", color:"white", backgroundColor:'rgba(185, 130, 12, 1)',
         padding:'20px',
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
  
          <div style={{ backgroundImage:`url(${EvodiusPic})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'rgba(185, 130, 12, 1)', width:'100%',
            borderRadius:'0px',maxWidth:'600px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,
              }}>
              Coffee roasters
            </p>
          </div>

          <div style={{ backgroundImage:`url(${EvodiusPic})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'rgba(185, 130, 12, 1)', width:'100%',
            borderRadius:'0px',maxWidth:'600px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,
              }}>
              Coffee Cooperative Unions
            </p>
          </div>

          <div style={{ backgroundImage:`url(${EvodiusPic})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'rgba(185, 130, 12, 1)', width:'100%',
            borderRadius:'0px',maxWidth:'600px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,
              }}>
              Instant coffee traders
            </p>
          </div>

          <div style={{ backgroundImage:`url(${EvodiusPic})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'rgba(185, 130, 12, 1)', width:'100%',
            borderRadius:'0px',maxWidth:'600px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,
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
        <div style={{fontSize:'50px', fontWeight:600}}>Other Products</div>
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
