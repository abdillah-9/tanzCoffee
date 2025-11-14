import React, { useEffect, useState } from 'react'
import GreenCoffee from '../../assets/20250527_091654.jpg';
import Marketing from '../../assets/IMG_20231214_210029_874.jpg';
import StockPic from '../../assets/IMG-20230301-WA0033.jpg';
import pic1 from '../../assets/IMG-20240215-WA0015.jpg';
import pic2 from '../../assets/TanzCoffee_Investor_Deck.png';
import pic3 from '../../assets/WhatsApp Image 2025-07-06 at 19.31.25_631247c4.jpg';
import { FaCogs } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa6';
import { MdFactory } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

export default function Home() {
  
  return (
    <div>
        <SlideShow/>
        <MiniHome/>
    </div>
  )
}

function SlideShow(){

  const images = [
    pic1,
    pic2,
    pic3
  ];

  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prev)=> (prev + 1) % images.length);
    }, 3000);

    return function(){
      clearInterval(interval);
    }
  }, []);

  return(
    <div style={{height:"100vh", width:'100vw',paddingTop:'100px', position:'relative',
      overflow:'hidden'
    }}>
      <div style={{width:'100%', height:'100%',position:'absolute',
        backgroundColor:'rgba(20,20,20,0.5)',
      }}>
      </div>
      <img src={images[index]} alt='slide pic' style={{width:'100%', height:'100%'}}/>     
    </div>
  )
}

 function MiniHome(){
  return(
    <div style={{display:'flex', padding:"20px 0px 0px 0px",
    flexDirection:'column',}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column', alignItems:'center',
      padding:'50px 0px',gap:'20px'}}>
        <div style={{fontSize:'50px', fontWeight:600}}>Overview</div>
        <div className='opacityAnimation' 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'18px', fontWeight:600}}>
          TanzCoffee Trading Company Limited is a Tanzanian coffee
          processing and exporting company. We have our processing 
          facilities located in Karagwe District, Kagera, Tanzania and
          we are planning to establish our administration office in Dar es Salaam, Tanzania.
        </div>
      </div>

      {/* Operations */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', 
      padding:"20px 30px 50px 30px",
      backgroundColor:'rgba(185, 130, 12, 1)',gap:'10px',width:"100%",
        justifyContent:'center'}}>
        <div style={{fontSize:'50px', fontWeight:600, width:"100%", textAlign:'center',
         paddingBottom:"15px"}}>Operations</div>
        <div style={{width:'100%', maxWidth:'85vw', fontSize: '16px', paddingBottom:'30px'}}>
          The company was established with the aim of processing premium 
          Robusta green coffee products to suit international market 
          requirements while simultaneously providing a ready market 
          for the increasing coffee production across Kagera region 
          and to provide efficient customer service throughout our business operations.
        </div>
        <img src={GreenCoffee} alt='pic' style={{width:'15%',maxHeight:'200px',
          minWidth:'200px',boxShadow:'1px 0.5px 11px black',flexGrow:1,
          maxWidth:'230px', margin:'0px 20px'}}/>
        <img src={Marketing} alt='pic' style={{width:'15%',maxHeight:'200px',
          minWidth:'200px',boxShadow:'1px 0.5px 11px black',flexGrow:1,
          maxWidth:'230px', margin:'0px 20px'}}/>
        <img src={StockPic} alt='pic' style={{width:'15%',maxHeight:'200px',
          minWidth:'200px',boxShadow:'1px 0.5px 11px black',flexGrow:1,
          maxWidth:'230px', margin:'0px 20px'}}/>
      </div>

      {/* Why Our Company */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', padding:"15px 15px 60px 15px",
      backgroundColor:'white',gap:'15px',width:"100%",
        justifyContent:'space-between'}}>
        <div style={{fontSize:'50px', fontWeight:600, width:"100%",paddingBottom:'20px',
          textAlign:'center'
        }}>Why Our Company</div>
        <div style={{display:'flex', flexWrap:'wrap',fontSize:'16px',
           gap:"20px", width:'100%', color:'white'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'13px',width:'20%',
            minWidth:'200px', flexGrow:1,alignItems:'center',backgroundColor:'rgba(185,130,12,1)',
            padding:'15px', textAlign:'center',
          }}>
            <div style={{padding:"15px 20px",backgroundColor:'white', borderRadius:'50%'}}>
              <FaCogs style={{fontSize:'35px', color:'black'}}/>
            </div>
            <p style={{fontSize:'17px', fontWeight:500}}>
              Reduction of broken coffee and high retention rate through 
              the use of highly developed, high-capacity processing machines
            </p>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'13px',width:'20%',
            minWidth:'200px', flexGrow:1,alignItems:'center',backgroundColor:'rgba(185,130,12,1)',
            padding:'15px', textAlign:'center',
          }}>
            <div style={{padding:"15px 20px",backgroundColor:'white', borderRadius:'50%'}}>
              <FaUserTie style={{fontSize:'35px', color:'black'}}/>
            </div>
            <p style={{fontSize:'17px', fontWeight:500}}>
              Maintaining professional services through hiring 
              skilled and experienced staff.
            </p>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'13px',width:'20%',
            minWidth:'200px', flexGrow:1,alignItems:'center',backgroundColor:'rgba(185,130,12,1)',
            padding:'15px', textAlign:'center',
          }}>
            <div style={{padding:"15px 20px",backgroundColor:'white', borderRadius:'50%'}}>
              <MdFactory style={{fontSize:'35px', color:'black'}}/>
            </div>
            <p style={{fontSize:'17px', fontWeight:500}}>
              Product quality is ensured by advanced production facilities 
              for processing and storing coffee cherries and green coffee beans.
            </p>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'13px',width:'20%',
            minWidth:'200px', flexGrow:1,alignItems:'center',backgroundColor:'rgba(185,130,12,1)',
            padding:'15px', textAlign:'center',
          }}>
            <div style={{padding:"15px 20px",backgroundColor:'white', borderRadius:'50%'}}>
              <RiCustomerService2Fill style={{fontSize:'35px', color:'black'}}/>
            </div>
            <p style={{fontSize:'17px', fontWeight:500}}>
              A well-organized firm administrative structure that 
              ensures exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Why Our Company */}
      {/* <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', padding:"15px",
      backgroundColor:'white',gap:'15px',width:"100%",
        justifyContent:'space-between'}}>
        <div style={{fontSize:'50px', fontWeight:600, width:"100%",
          textAlign:'center'
        }}>Why Our Company</div>
        <div style={{display:'flex', flexDirection:'column',fontSize:'16px',
           gap:"10px", width:'50%'}}>
          <span>
            •	Reduction of broken coffee and high retention rate through 
            the use of highly developed, high-capacity processing machines
          </span>
          <span>
            •	Maintaining professional services through hiring 
            skilled and experienced staff.
          </span>
          <span>
            •	Product quality is ensured by advanced production facilities 
            for processing and storing coffee cherries and green coffee beans.
          </span>
          <span>
            •	A well-organized firm administrative structure that 
            ensures exceptional customer service.
          </span>
        </div>
        <img src={OperationsPIC} alt='pic' style={{width:'40%',
          minWidth:'150px', height:'230px'}}/>
      </div> */}

    </div>
  )
 }