import React from 'react'

export default function ContactsInformation() {
  return (
<div style={{display:'flex', gap:'50px', padding:"20px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>Contacts Information</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          TanzCoffee Trading Company Limited is a Tanzanian coffee
          processing and exporting company. We have our processing 
          facilities located in Karagwe District, Kagera, Tanzania and
          we are planning to establish our administration office in Dar es Salaam, Tanzania.
        </div>
        <div style={{backgroundColor:'rgba(185, 130, 12, 1)', padding:'15px 30px' 
          ,borderRadius:'20px', color:'white'}}>
          Map Direction
        </div>
      </div>

      {/* Contacts links */}
      <div style={{width:'100%', display:'flex', flexWrap:'wrap', gap:'15px',
          backgroundColor:'rgba(185, 130, 12 ,1)',padding:'40px 0px',
          justifyContent:'space-between',
      }}>

        <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
          borderRadius:'5px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'30%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)'}}>
            <div style={{padding:'10px'}}>
              <i style={{borderRadius:'50%', padding:'15px', boxShadow:'1px 1px 5px black'}}>
                Icon
              </i>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <span style={{fontWeight:600, fontSize:'20px'}}>Physical address:</span>
              <p style={{fontSize:'16px'}}>Rugarama Street, Kyerwa Road, (Omurushaka) Bugene, Karagwe District.</p>
              <p style={{fontSize:'16px'}}>P. O. Box 265 Kagera Tanzania.</p>
            </div>
        </div>

        <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
          borderRadius:'5px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'30%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)'}}>
            <div style={{padding:'10px'}}>
              <i style={{borderRadius:'50%', padding:'15px', boxShadow:'1px 1px 5px black'}}>
                Icon
              </i>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <span style={{fontWeight:600, fontSize:'20px'}}>Phone number:</span>
              <p style={{fontSize:'16px'}}>+255 788-491-086</p>
            </div>
        </div>

        <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
          borderRadius:'5px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'30%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)'}}>
            <div style={{padding:'10px'}}>
              <i style={{borderRadius:'50%', padding:'15px', boxShadow:'1px 1px 5px black'}}>
                Icon
              </i>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <span style={{fontWeight:600, fontSize:'20px'}}>Email:</span>
              <p style={{fontSize:'16px'}}>info@tanzcoffee.co.tz</p>
            </div>
        </div>

      </div>

</div>
  )
}
