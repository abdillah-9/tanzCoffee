import React, { useEffect, useState } from 'react'
import GreenCoffee from '../../assets/TanzCoffeeDeck.png';
import Marketing from '../../assets/IMG_20231214_210029_874.jpg';
import StockPic from '../../assets/IMG-20230301-WA0033.jpg';
import pic1 from '../../assets/IMG-20240215-WA0015.jpg';
import pic2 from '../../assets/TanzCoffee_Investor_Deck.png';
import pic3 from '../../assets/WhatsApp Image 2025-07-06 at 19.31.25_631247c4.jpg';
import ReductionBrokenCoffee from '../../assets/ReductionBrokenCoffee.jpg';
import WellOrganizedFirm from '../../assets/WellOrganizedFirm.jpg';
import ProperFacilities from '../../assets/ProperFacilities.jpg';
import ProfesionalServices from '../../assets/ProfesionalServices.jpg';
import ProductQuality from '../../assets/ProductQuality.jpg';
import { FaCogs } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa6';
import { MdFactory } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';

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

  function SlideShow2() {
    const slides = [
      <div style={{ display:'flex', flexDirection:'column', maxWidth:'350px' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
          height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'
        }}>
           <img src={ReductionBrokenCoffee} alt='reduction broken coffee' style={{width:'100%', height:'100%'}}/>
        </div>
        <div style={{padding:'10px', backgroundColor:'rgba(185,130,12,1)', color:'white', height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'}}>
          Reduction of broken coffee and high retention rate through the use of highly developed, high-capacity processing machines
        </div>
      </div>,

      <div style={{ display:'flex', flexDirection:'column', maxWidth:'350px' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
          height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'
        }}>
           <img src={WellOrganizedFirm} alt='organized firm' style={{width:'100%', height:'100%'}}/>
        </div>
        <div style={{padding:'10px', backgroundColor:'rgba(185,130,12,1)', color:'white', height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'}}>
          A well-organized firm administrative structure that ensures exceptional customer service
        </div>
      </div>,

      <div style={{ display:'flex', flexDirection:'column', maxWidth:'350px' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
          height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'
        }}>
           <img src={ProperFacilities} alt='proper facilities' style={{width:'100%', height:'100%'}}/>
        </div>
        <div style={{padding:'10px', backgroundColor:'rgba(185,130,12,1)', color:'white', height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'}}>
          Proper facilities and product handling for quality
        </div>
      </div>,

      <div style={{ display:'flex', flexDirection:'column', maxWidth:'350px' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
          height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'
        }}>
           <img src={ProfesionalServices} alt='prof serv' style={{width:'100%', height:'100%'}}/>
        </div>
        <div style={{padding:'10px', backgroundColor:'rgba(185,130,12,1)', color:'white', height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'}}>
          Maintaining professional services through hiring skilled and experienced staff.
        </div>
      </div>,

      <div style={{ display:'flex', flexDirection:'column', maxWidth:'350px' }}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
          height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'
        }}>
           <img src={ProductQuality} alt='product quality' style={{width:'100%', height:'100%'}}/>
        </div>
        <div style={{padding:'10px', backgroundColor:'rgba(185,130,12,1)', color:'white', height:'150px', maxWidth:'350px',fontSize:'17px', fontWeight:500, width:'100%'}}>
          Product quality is ensured by professional quality team and advanced production facilities
        </div>
      </div>,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{
        width: "100%",
        minHeight: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease"
      }}>
        {slides[index]}
      </div>
    );
  }


 function MiniHome(){
  return(
    <div style={{display:'flex', padding:"20px 0px 0px 0px",
    flexDirection:'column',}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column', alignItems:'center',
      padding:'50px 0px',gap:'20px'}}>
        <div style={{fontSize:'50px', fontWeight:700}}>Overview</div>
        <div className='opacityAnimation' 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'18px', fontWeight:600, textAlign:'center'}}>
          Founded in 2024 and registered under the registration number 177486825, TanzCoffee Trading Company Limited is a private limited company with its headquarters in Tanzania.
        </div>
      </div>

      {/* Operations */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', 
      padding:"20px 30px 50px 30px",
      backgroundColor:'rgba(185, 130, 12, 1)',gap:'10px',width:"100%",
        justifyContent:'center'}}>
        <div style={{fontSize:'50px', fontWeight:700, width:"100%", textAlign:'center',
         paddingBottom:"0px"}}>How We Operate</div>
        <div style={{width:'100%', maxWidth:'85vw', fontSize: '18px', paddingBottom:'30px', color:'white', textAlign:'center', fontWeight:600}}>
          Our factory processes premium Robusta green coffee products to suit international market requirements while simultaneously providing a ready market for the increasing coffee production across Kagera region
        </div>
        <img src={GreenCoffee} alt='pic' style={{width:'100%',maxWidth:'500px',
          minWidth:'200px',flexGrow:1,
          margin:'0px 20px'}}/>
      </div>

      {/* Why Our Company */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', padding:"15px 15px 60px 15px",
      backgroundColor:'white',gap:'15px',width:"100%",}}>
        <div style={{fontSize:'50px', fontWeight:700, width:"100%",paddingBottom:'20px',
          textAlign:'center'
        }}>Why Our Company</div>
        <div style={{display:'flex', fontSize:'16px',
          gap:"20px", width:'100%', color:'white', alignItems:'center', justifyContent:'center'}}>
          <div style={{ borderRadius:'50%', padding:'10px 13px', backgroundColor:'rgba(185,130,12,1)'}} onClick={()=>{setIndex(prev => (prev - 1) % slides.length)}}>
            <BiSolidChevronLeft style={{fontSize:'30px'}} />
          </div>
          <div style={{maxWidth:'350px'}}>
            <SlideShow2/>
          </div>  
          <div style={{ borderRadius:'50%', padding:'10px 13px', backgroundColor:'rgba(185,130,12,1)'}}
          onClick={()=>{setIndex(prev => (prev + 1) % slides.length)}}>
            <BiSolidChevronRight style={{fontSize:'30px'}} />
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