import React from 'react'
import SospeterPic from '../../assets/20251016_235737.png';
import EvodiusPic from '../../assets/Evodius.png';
import OmaryPic from '../../assets/Omary.png';

export default function AboutUs() {
  return (
    <div style={{display:'flex', gap:'50px', padding:"20px 0px",
    flexDirection:'column', alignItems:'center'}}>
      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>About Us</div>
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
          Contact Us
        </div>
      </div>

      {/* Paragraph for Vision , Mission and Core value */}
      <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', padding:"0px 15px"}}>
        {/* Mission */}
        <div style={{display:'flex', flexDirection:'column', gap:'15px', minWidth:"200px", width:'29%'}}>
          <div style={{fontSize:'20px', fontWeight:500}}>Vision</div>
          <div>
            Dedicated to be the leading world-class green coffee 
            processing and supplying company.
          </div>
        </div>
        {/* Vision */}
        <div style={{display:'flex', flexDirection:'column', gap:'15px', minWidth:"200px", width:'29%'}}>
          <div style={{fontSize:'20px', fontWeight:500}}>Mission</div>
          <div>
            Sustainable processing of high quality and quantity coffee 
            beans by utilizing sophisticated machines and maintaining 
            positive business relationship with clients and regional farmers.
          </div>
        </div>
        {/* Core-value */}
        <div style={{display:'flex', flexDirection:'column', gap:'15px', minWidth:"200px", width:'29%'}}>
          <div style={{fontSize:'20px', fontWeight:500}}>Core-value</div>
          <div>
            <div>•	Social Responsibility.</div>
            <div>•	We value collaboration and partnership for growth.</div>
            <div>•	Environment Sustainability. </div>
            <div>•	Professionalism.</div>
            <div>•	Diversity in the workforce.</div>
            <div>•	We embrace new technologies for improvement.</div>
          </div>
        </div>
      </div>

      {/* Founders */}
      <div style={{display:'flex', backgroundColor:'rgba(185, 130, 12, 1)',width:'100%',
        justifyContent:'space-between', flexWrap:'wrap', padding:"15px"}}>
        {/* Sospeter Gunga Owuor */}
        <div style={{display:'flex', flexDirection:'column', padding:'20px',
          gap:'15px', minWidth:"200px", width:'29%', borderRadius:'5px',
          backgroundColor:"white",alignItems:'center'
          }}>
          <img src={SospeterPic} alt='Sospeter Gunga Owuor' 
          style={{borderRadius:'50%', width:'150px', height:'130px',
                 boxShadow:'1px 2px 20px black'
          }}/>
          <div style={{fontSize:'20px', fontWeight:500}}>Sospeter Gunga Owuor</div>
          <div>
            He holds a bachelor’s degree in Business Administration 
            (Entrepreneurship Development) from Mzumbe University.
             He has attended several business courses from 
             Philanthropy University. He co-founded Brice 
             Agribusiness Ltd and worked with as company 
             operation director for 03 years, and has worked 
             with Room to Read for five years as a Research, 
             Monitoring and Evaluation Associate. 
             He has extensive network with coffee 
             industrial-based government institutions and 
             he is much experienced with coffee exportation. 
             He handles all administration activities.
          </div>
        </div>

        {/* Evodius */}
        <div style={{display:'flex', flexDirection:'column', padding:'20px',
          gap:'15px', minWidth:"200px", width:'29%', borderRadius:'5px',
          backgroundColor:"white",alignItems:'center'
          }}>
          <img src={EvodiusPic} alt='Sospeter Gunga Owuor' 
          style={{borderRadius:'50%', width:'150px', height:'130px',
                 boxShadow:'1px 2px 20px black'}}/>
          <div style={{fontSize:'20px', fontWeight:500}}>Evodius Vedastos Tihibika</div>
          <div>
            He and his family have been active coffee producers for 
            many years in the Karagwe District of Kagera, the country's 
            heartland of Robusta coffee. He has over 30 years of substantial 
            experience in the coffee sector and a wide network of local coffee 
            stakeholders. He is well acquainted with the product of coffee. 
            He is the technical director of the company. and manages the 
            procurement and processing aspects.
          </div>
        </div>

        {/* Omary */}
        <div style={{display:'flex', flexDirection:'column', padding:'20px',
          gap:'15px', minWidth:"200px", width:'29%', borderRadius:'5px',
          backgroundColor:"white",alignItems:'center'
          }}>
          <img src={OmaryPic} alt='Sospeter Gunga Owuor' 
          style={{borderRadius:'50%', width:'150px', height:'130px',
                 boxShadow:'1px 2px 20px black'}}/>
          <div style={{fontSize:'20px', fontWeight:500}}>Omary Khalfani Mkandawile</div>
          <div>
            He holds a bachelor’s degree in Business Administration 
            (Entrepreneurship Development) from Mzumbe University. 
            He has a deep coffee marketing expertise of more than 
            03 years’ experience. He worked with Salute Finance 
            for two years an assistant accountant before joining 
            Brice Agribusiness Ltd as a marketing and sales 
            director for 03 years. He is knowledgably with 
            coffee products and very familiar with both local 
            and international coffee clients. He handles Marketing, Sales and Exportation.

          </div>
        </div>

      </div> 

      {/* Ending paragraph*/}
      <div style={{display:"flex",flexDirection:'column',
         alignItems:'center', justifyContent:'center', gap:'20px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', fontWeight:600}}>Sustainability Commitment</div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'16px',}}>
          We use electrically powered machines and modern 
          waste disposal facilities to minimize environmental impact.
          We are continuously exploring new ways to improve our 
          sustainability efforts across our supply chain.
        </div>
      </div>

    </div>
  )
}
