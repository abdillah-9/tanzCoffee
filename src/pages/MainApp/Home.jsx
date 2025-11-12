import React from 'react'
import OperationsPIC from "../../assets/IMG-20220720-WA0027.jpg";

export default function Home() {
  
  return (
    <div>
        <SlideShow/>
        <MiniHome/>
    </div>
  )
}

function SlideShow(){
    return(
      <div style={{border:"5px solid black", height:"100vh", width:'100vw'}}>
                
      </div>
    )
}
 function MiniHome(){
  return(
    <div style={{display:'flex', gap:'50px', padding:"20px 0px",
    flexDirection:'column', alignItems:'center'}}>
      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column', alignItems:'center'}}>
        <div style={{fontSize:'50px', fontWeight:600}}>Overview</div>
        <div className='opacityAnimation' 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px'}}>
          TanzCoffee Trading Company Limited is a Tanzanian coffee
          processing and exporting company. We have our processing 
          facilities located in Karagwe District, Kagera, Tanzania and
          we are planning to establish our administration office in Dar es Salaam, Tanzania.
        </div>
      </div>

      {/* Operations */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', padding:"15px",
      backgroundColor:'rgba(185, 130, 12, 1)',gap:'15px',width:"100^",
         maxWidth:'700px', justifyContent:'space-between'}}>
        <div style={{fontSize:'50px', fontWeight:600, width:"100%", textAlign:'center',
         paddingBottom:"15px"}}>Operations</div>
        <div style={{width:'50%', minWidth:'250px', fontSize: '16px'}}>
          The company was established with the aim of processing premium 
          Robusta green coffee products to suit international market 
          requirements while simultaneously providing a ready market 
          for the increasing coffee production across Kagera region 
          and to provide efficient customer service throughout our business operations.
        </div>
        <img src={OperationsPIC} alt='pic' style={{width:'40%',maxHeight:'200px',
          minWidth:'150px',}}/>
      </div>

      {/* Why Our Company */}
      <div style={{display:'flex', flexWrap:'wrap', borderRadius:'5px', padding:"15px",
      backgroundColor:'rgba(220,220,220,1)',gap:'15px',width:"100^",
         maxWidth:'700px', justifyContent:'space-between'}}>
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
      </div>
    </div>
  )
 }