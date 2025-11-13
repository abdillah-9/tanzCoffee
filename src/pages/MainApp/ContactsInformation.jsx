import React from 'react'

export default function ContactsInformation() {
  return (
<div style={{display:'flex', gap:'30px', padding:"20px 0px 0px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', 
          fontWeight:600, textAlign:'center'}}>
            Contacts Information
        </div>
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
          Get Direction
        </div>
      </div>

      {/* Contacts links */}
      <div style={{width:'100%', display:'flex', flexWrap:'wrap', gap:'15px',
          backgroundColor:'rgba(185, 130, 12 ,1)',padding:'40px 15px',
          justifyContent:'space-between',
      }}>

        <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
          borderRadius:'20px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'25%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
          }}>
            <div style={{padding:'10px'}}>
              <i style={{borderRadius:'50%', padding:'15px', boxShadow:'1px 1px 5px black'}}>
                Icon
              </i>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <span style={{fontWeight:600, fontSize:'20px'}}>Physical address:</span>
              <p style={{fontSize:'16px'}}>Rugarama Street, Kyerwa Road, (Omurushaka) 
                Bugene, Karagwe District.</p>
              <p style={{fontSize:'16px'}}>P. O. Box 265 Kagera Tanzania.</p>
            </div>
        </div>

        <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
          borderRadius:'20px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'25%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
          }}>
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
          borderRadius:'20px', padding:'10px', minWidth:'250px',backgroundColor:'white',width:'25%',
          borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
          }}>
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

      {/* Social Media links */}
      <div style={{display:'flex', flexWrap:'wrap', gap:"20px", justifyContent:'space-between',
        width:'100%',padding:'0px 20px 20px 20px',
      }}>
        {/* Title */}
        <div style={{fontSize:'35px', width:'100%',
          fontWeight:600, textAlign:'center'}}>
            Social Networks
        </div>
        {/* Instagram */}
        <div style={{display:'flex',gap:'8px',flexGrow:1,width:'30%',
          boxShadow:'1px 0.5px 11px black',minWidth:'220px',
        }}>
          <div style={{backgroundColor:'rgba(183,130,12,1)', padding:'17px 12px',
          }}>Icon</div>
          <div style={{fontSize:'20px', fontWeight:600,padding:'12px 5px',
            }}>Instagram</div>
          <div style={{fontSize:'16px', fontWeight:500,padding:'16px 5px',
            color:'rgba(73, 53, 6, 1)',
          }}>tanzCoffee</div>
        </div>

        {/* LinkedIn */}
        <div style={{display:'flex',gap:'8px',flexGrow:1,width:'30%',
          boxShadow:'1px 0.5px 11px black',minWidth:'220px',
        }}>
          <div style={{backgroundColor:'rgba(183,130,12,1)', padding:'17px 12px',
          }}>Icon</div>
          <div style={{fontSize:'20px', fontWeight:600,padding:'12px 5px',
            }}>LinkedIn</div>
          <div style={{fontSize:'16px', fontWeight:500,padding:'16px 5px',
            color:'rgba(73, 53, 6, 1)',
          }}>tanzCoffee Ltd</div>
        </div>

        {/* WhatsApp */}
        <div style={{display:'flex',gap:'8px',flexGrow:1,width:'30%',
          boxShadow:'1px 0.5px 11px black',minWidth:'220px',
        }}>
          <div style={{backgroundColor:'rgba(183,130,12,1)', padding:'17px 12px',
          }}>Icon</div>
          <div style={{fontSize:'20px', fontWeight:600,padding:'12px 5px',
            }}>WhatsApp</div>
          <div style={{fontSize:'16px', fontWeight:500,padding:'16px 5px',
            color:'rgba(73, 53, 6, 1)',
          }}>tanzCoffee Company</div>
        </div>

      </div>

</div>
  )
}
