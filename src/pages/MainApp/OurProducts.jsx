import React from 'react'
import CoffeeRoaster from '../../assets/roaster.jpg';
import CoffeeUnion from '../../assets/unionCroped.jpg';
import CoffeeTrader from '../../assets/traderCroped.jpg';
import CoffeeManufacture from '../../assets/IMG-20240215-WA0016.jpg';
import Beans from '../../assets/beans.jpg';
import naturalCoffee from '../../assets/robustaCoffee2.jpg';
import naturalCoffee2 from '../../assets/IMG_20241004_114341_116Croped.jpg';
import { IoLocationOutline } from 'react-icons/io5';
import { GiCoffeeBeans, GiJellyBeans } from 'react-icons/gi';
import arabicaSVG from '../../assets/arabicaSVG.svg';
import Soybeans from '../../assets/soyabeans2.png';
import Sesameseeds from '../../assets/sesameseeds.jpg';
import Cashewnuts from '../../assets/cashewnuts.jpg';
import Rice from '../../assets/rice.jpg';
import Allbeans from '../../assets/allbeans.jpg';
import weServe1 from '../../assets/weServe1.jpg';
import weServe2 from '../../assets/weServe2.jpg';
import weServe3 from '../../assets/weServe3.jpg';

export default function OurProducts() {
  return (
    <div style={{display:'flex', gap:'50px', padding:"20px 0px 20px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',textAlign:'centr',
         alignItems:'center', justifyContent:'center', gap:'20px', padding:'0px 10px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:700}}>Our Products</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'18px', fontWeight:400, textAlign:'center'}}>
          We offer non-GMO Arabica and Robusta Green Coffee Products
        </div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center',gap:"90px", padding:'15px 0px 55px 0px'}}>

          <div style={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center', alignItems:'center'}}>
            <img style={{borderRadius:'50%', width:'170px', height:'160px', objectFit:'cover'}} src={naturalCoffee} alt='natural beans'/>
            <div style={{textAlign:'center', fontSize:"16px", fontWeight:500}}>Natural Green Coffee</div>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center', alignItems:'center'}}>
            <img style={{borderRadius:'50%', width:'170px', height:'160px', objectFit:'cover'}} src={Beans} alt='natural beans'/>
            <div style={{textAlign:'center', fontSize:"16px", fontWeight:500}}>Arabica Green Coffee Beans</div>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'15px', justifyContent:'center', alignItems:'center'}}>
            <img style={{borderRadius:'50%', width:'170px', height:'160px', objectFit:'cover'}} src={naturalCoffee2} alt='natural beans'/>
            <div style={{textAlign:'center', fontSize:"16px", fontWeight:500}}>Robusta Green Coffee Beans</div>
          </div>

        </div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'18px', fontWeight:500, textAlign:'center'}}>
          Our products fall under the following coffee grade size
        </div>
        <div style={{display:'flex', flexWrap:'wrap', gap:'100px', justifyContent:'center', paddingBottom:'50px', width:"100vw"}}>
          <div style={{width:'50%',maxWidth:'400px',boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
            borderRadius:'10px', padding:'10px',backgroundColor:'white',
            borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
            maxHeight:'170px',
            }}>
              <div style={{padding:'10px'}}>
                <div style={{borderRadius:'50%', padding:'9px 12px', boxShadow:'1px 1px 5px black'}}>
                  <GiCoffeeBeans style={{fontSize:'25px'}}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
                <span style={{fontWeight:700, fontSize:'18px', paddingBottom:'10px'}}>Arabica Coffee</span>
                <p style={{fontSize:'15px'}}> AAA, AA, AB, B , PB</p>

                {/* <p style={{fontSize:'15px'}}> B, PB</p> */}
              </div>
          </div>

          <div style={{width:'50%',maxWidth:'400px',boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
            borderRadius:'10px', padding:'10px',backgroundColor:'white',
            borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
            maxHeight:'170px',
            }}>
              <div style={{padding:'10px'}}>
                <div style={{borderRadius:'50%', padding:'9px 12px', boxShadow:'1px 1px 5px black'}}>
                  <img alt='robusatSVG' src={arabicaSVG} style={{width:'20px', height:'20px'}}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
                <span style={{fontWeight:700, fontSize:'18px', paddingBottom:'10px'}}>Robusta Coffee</span>
                <p style={{fontSize:'15px'}}> Screen 18, Screen 16, Screen 14,</p>

                <p style={{fontSize:'15px'}}> Screen 12, TR</p>
              </div>
          </div>

        </div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px', fontWeight:500, textAlign:'center',}}>
          Our coffee products meet the following quality requirements
        </div>
        <div style={{display:'flex', gap:"20px", justifyContent:"space-between",flexWrap:'wrap',
          padding:'30px'
        }}>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,
            minWidth:'270px'}}>
            Storage Temperature 18 – 20 degrees centigrade  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,
            minWidth:'270px'}}>
            Moisture: Not less than 12% max  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,
            minWidth:'270px'}}>
            Foreign matters: 0.5%  
          </div>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', 
            borderRadius:'5px', padding:'10px', color:'white', display:'flex',flexGrow:1,
            minWidth:'270px'}}> 
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
          <div style={{fontSize:'45px', fontWeight:700, textAlign:'center',
            width:'100%', color:"white"}}>
            Who We Serve
          </div>
          <div 
          style={{color:'rgba(54, 35, 17, 1)',width:"100%",paddingBottom:'15px',
          fontSize:'18px', fontWeight:500, textAlign:'center'}}>
            We are an international company and we serve both local and international coffee corporations with a diverse range of industries, including the following
          </div>

          <div style={{display:'flex', gap:"20px", justifyContent:"space-between",flexWrap:'wrap', padding:'20px 0px'}}>
            <div style={{backgroundColor:'white',color:'black', 
              borderRadius:'5px', padding:'10px',fontWeight:500,borderLeft:'0px solid black',
              boxShadow:'1px 0.5px 5px rgba(50,50,50,0.7)', display:'flex',flexGrow:1,
              minWidth:'290px'}}>
              Coffee Roasters 
            </div>
            <div style={{backgroundColor:'white',color:'black', 
              borderRadius:'5px', padding:'10px',fontWeight:500,borderLeft:'0px solid black',
              boxShadow:'1px 0.5px 5px rgba(50,50,50,0.7)', display:'flex',flexGrow:1,
              minWidth:'290px'}}>
              Coffee Cooperative Unions 
            </div>
            <div style={{backgroundColor:'white',color:'black', 
              borderRadius:'5px', padding:'10px',fontWeight:500,borderLeft:'0px solid black',
              boxShadow:'1px 0.5px 5px rgba(50,50,50,0.7)', display:'flex',flexGrow:1,
              minWidth:'290px'}}>
              Instant Coffee Traders 
            </div>
            <div style={{backgroundColor:'white',color:'black', 
              borderRadius:'5px', padding:'10px',fontWeight:500,borderLeft:'0px solid black',
              boxShadow:'1px 0.5px 5px rgba(50,50,50,0.7)', display:'flex',flexGrow:1,
              minWidth:'290px'}}> 
              Coffee Products Manufacturers
            </div>
          </div>
  
          {/* <div style={{ backgroundImage:`url(${CoffeeManufacture})`,backgroundSize: '110% 110%',
            backgroundColor:'white', color:'black', width:'100%',
            borderRadius:'5px',maxWidth:'400px',flexGrow:1,display:'flex',
            height:'300px',
            justifyContent:'center',alignItems:'center',gap:'11px',boxShadow:'1px 0.5px 8px black',
          }}>
            <p style={{zIndex:1, width:'100%', height:'100%',display:'flex', fontSize:'18px',
              backgroundColor:'rgba(200,200,200,0.5)',justifyContent:'center',alignItems:'center',
              fontWeight:500,textAlign:'center',
              }}>
              Other coffee products manufacturers
            </p>
          </div> */}

        </div>
      </div>

      {/* Images */}
      <div style={{width:'100vw', padding:'50px 0px', display:'flex', flexWrap:'wrap', justifyContent:' center', gap:'50px'}}>
        <div style={{ backgroundImage:`url(${CoffeeRoaster})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>

        <div style={{ backgroundImage:`url(${CoffeeUnion})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>

        <div style={{ backgroundImage:`url(${CoffeeTrader})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>
        <div style={{ backgroundImage:`url(${weServe1})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>

        <div style={{ backgroundImage:`url(${weServe2})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>

        <div style={{ backgroundImage:`url(${weServe3})`,backgroundSize: 'cover',
          backgroundColor:'white', color:'black', width:'100%',
          borderRadius:'5px',maxWidth:'300px',flexGrow:1,display:'flex',
          height:'200px',
          justifyContent:'center',alignItems:'center',
        }}>
        </div>
      </div>

      {/* Ending paragraph*/}
      <div style={{display:"flex",flexDirection:'column',padding:'10px 0px 60px 0px',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:700, textAlign:'center',}}>Other Products</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          In addition to coffee, the company also supplies the following products. 
          Maize, Rice, Soybeans, All type of beans and Cashew-nuts
        </div>
        {/* slideshow */}
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center', gap:'30px', width:'100vw', padding:"50px 0px 0px 0px"}} className='slidesGap'>
          <div className='slide1' style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', width:'10%', minWidth:'150px', gap:"3px", padding:'50px 0px'}}>
            <img src={Soybeans} alt='pic1' style={{width:'50px', objectFit:'cover' ,aspectRatio:1/0.9, borderRadius:'50%'}}/>
            <div style={{fontSize:'5px',}}>Soybeans</div>
          </div>
          <div className='slide2' style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', width:'10%', minWidth:'150px', gap:"3px", padding:'50px 0px'}}>
            <img src={Sesameseeds} alt='pic1' style={{width:'50px', objectFit:'cover' ,aspectRatio:1/0.9, borderRadius:'50%'}}/>
            <div style={{fontSize:'5px',}}>Sesame seeds</div>
          </div>
          <div className='slide3' style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', width:'10%', minWidth:'150px', gap:"3px", padding:'50px 0px'}}>
            <img src={Cashewnuts} alt='pic1' style={{width:'50px', objectFit:'cover' ,aspectRatio:1/0.9, borderRadius:'50%'}}/>
            <div style={{fontSize:'5px',}}>Cashew nuts</div>
          </div>
          <div className='slide4' style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', width:'10%', minWidth:'150px', gap:"3px", padding:'50px 0px'}}>
            <img src={Rice} alt='pic1' style={{width:'50px', objectFit:'cover' ,aspectRatio:1/0.9, borderRadius:'50%'}}/>
            <div style={{fontSize:'5px',}}>Rice</div>
          </div>
          <div className='slide5' style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', width:'10%', minWidth:'150px', gap:"3px", padding:'50px 0px'}}>
            <img src={Allbeans} alt='pic1' style={{width:'50px', objectFit:'cover' ,aspectRatio:1/0.9, borderRadius:'50%'}}/>
            <div style={{fontSize:'5px',}}>Beans of all types</div>
          </div>
        </div>
      </div>


    </div>
  )
}
