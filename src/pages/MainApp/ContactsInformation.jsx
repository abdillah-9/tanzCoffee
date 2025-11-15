import React, { useRef } from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

export default function ContactsInformation() {

  const sendMessageRef = useRef(null);

  const scrollToForm = ()=>{
     sendMessageRef.current?.scrollIntoView({behavior:'smooth'});
  }

  async function handleSubmit(e){

    e.preventDefault();

    try{
      await emailjs.sendForm(
        "service_t2gikr8",    // your service ID
        "template_ygfeq67",   // your template ID
        e.target,             // the form element
        "JoCJ-HuexSy-UxwDq"   // your public key
      )
      alert('Message is successful sent to TanzaCoffee L.T.D ');
      e.target.reset();
    }
    catch(e){
      alert('Something went wrong, please try again');
    }
  }
  return (
<div style={{display:'flex', gap:'30px', padding:"20px 0px 0px 0px",
    flexDirection:'column', alignItems:'center'}}>

      {/* Pragraph for intro*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'200px',
         alignItems:'center', justifyContent:'center', gap:'5px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', 
          fontWeight:700, textAlign:'center'}}>
            Contact Us
        </div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'19px',textAlign:'center',paddingBottom:'20px'}}>
          "Get in touch with us for Inquiries, Business Services and Feedback"
        </div>
        <div style={{display:'flex', gap:'30px', flexWrap:'wrap',justifyContent:'center',
          padding:'0px 10px 25px 10px',
        }}>
          <div style={{backgroundColor:'rgba(185, 130, 12, 1)', padding:'15px 30px' 
            ,borderRadius:'20px', color:'white', fontWeight:500, fontSize:'17px'}}
            onClick={scrollToForm}>
            Send Message
          </div>
          <a href='tel:+255788491086' style={{backgroundColor:'white', padding:'15px 30px' 
            ,borderRadius:'20px', color:'rgba(185,130,12,1)',
            border:'2px solid rgba(185, 130, 12,1)',fontSize:'17px'}}>
            Call Us Now
          </a>
        </div>
      </div>

      {/* Contacts links */}
      <div style={{width:'100%', display:'flex', flexWrap:'wrap', gap:'50px',
          backgroundColor:'rgba(185, 130, 12 ,1)',padding:'40px 15px',
          justifyContent:'center',
      }}>
        {/* Contact details */}
        <div style={{display:'flex', flexDirection:'column', gap:'40px',
          maxWidth:'420px', flexGrow:1,
        }}>
          <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
            borderRadius:'10px', padding:'10px',backgroundColor:'white',
            borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
            maxHeight:'170px',
            }}>
              <div style={{padding:'10px'}}>
                <div style={{borderRadius:'50%', padding:'9px 12px', boxShadow:'1px 1px 5px black'}}>
                  <IoLocationOutline style={{fontSize:'25px'}}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <span style={{fontWeight:600, fontSize:'18px'}}>Physical address:</span>
                <p style={{fontSize:'16px'}}>Rugarama Street, Kyerwa Road, (Omurushaka) 
                  Bugene, Karagwe District.</p>
                <p style={{fontSize:'16px'}}>P. O. Box 265 Kagera Tanzania.</p>
              </div>
          </div>

          <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
            borderRadius:'10px', padding:'10px',backgroundColor:'white',
            borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
            maxHeight:'100px',
            }}>
              <div style={{padding:'10px'}}>
                <div style={{borderRadius:'50%', padding:'9px 12px', boxShadow:'1px 1px 5px black'}}>
                  <IoCallOutline style={{fontSize:'25px'}}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <span style={{fontWeight:600, fontSize:'18px'}}>Phone number:</span>
                <p style={{fontSize:'16px'}}>+255 788-491-086</p>
              </div>
          </div>

          <div style={{boxShadow:'1px 0.5px 12px black', display:'flex',gap:'12px',
            borderRadius:'10px', padding:'10px',backgroundColor:'white',
            borderLeft:'10px solid rgba(185, 130, 12 ,1)', flexGrow:1,
            maxHeight:'100px',
            }}>
              <div style={{padding:'10px'}}>
                <div style={{borderRadius:'50%', padding:'9px 12px', boxShadow:'1px 1px 5px black'}}>
                  <MdOutlineEmail style={{fontSize:'25px'}}/>
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <span style={{fontWeight:600, fontSize:'18px'}}>Email:</span>
                <p style={{fontSize:'16px'}}>info@tanzcoffee.co.tz</p>
              </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} ref={sendMessageRef}
        style={{flexGrow:1, display:'flex',maxWidth:'550px',
          flexDirection:'column', gap:'35px',padding:'60px', borderRadius:'10px',
          boxShadow:'1px 0.5px 12px black',
          backgroundColor:'white',
        }}>
          <div style={{display:'flex',flexDirection:'column',gap:'15px',}} >
            <label style={{fontWeight:600, fontSize:'15px'}}>Your Name</label>
            <input type='text' name='name' placeholder='Enter your full name' style={{
              boxShadow:'1px 1px 17px rgba(20,20,20,0.7)',padding:'14px',
              fontSize:'15px', fontWeight:400,border:'2px solid rgba(130,130,130,0.7)',
              borderRadius:'5px',backgroundColor:'rgba(220,220,220,0.7)',
              color:'black'
            }}/>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'15px',}}>
            <label style={{fontWeight:600, fontSize:'15px'}}>Your Email</label>
            <input type='email' name='email' placeholder='Enter your email address' style={{
              boxShadow:'1px 1px 17px rgba(20,20,20,0.7)',padding:'14px',
              fontSize:'15px', fontWeight:400,border:'2px solid rgba(130,130,130,0.7)',
              borderRadius:'5px',backgroundColor:'rgba(220,220,220,0.7)',
              color:'black'
            }}/>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'15px',}}>
            <label style={{fontWeight:600, fontSize:'15px'}}>Your Subject</label>
            <input type='text' name='subject' placeholder='Enter message subject' style={{
              boxShadow:'1px 1px 17px rgba(20,20,20,0.7)',padding:'14px',
              fontSize:'15px', fontWeight:400,border:'2px solid rgba(130,130,130,0.7)',
              borderRadius:'5px',backgroundColor:'rgba(220,220,220,0.7)',
              color:'black'
            }}/>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'15px',}}>
            <label style={{fontWeight:600, fontSize:'15px'}}>Your Message</label>
            <textarea name='message' placeholder='Enter your message here...' style={{
              boxShadow:'1px 1px 17px rgba(20,20,20,0.7)',padding:'14px',
              fontSize:'15px', fontWeight:400,border:'2px solid rgba(130,130,130,0.7)',
              borderRadius:'5px',backgroundColor:'rgba(220,220,220,0.7)',
              color:'black'
            }} rows={10}/>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'15px',}}>
            <input type='submit' name='submit' style={{
              boxShadow:'1px 1px 17px rgba(20,20,20,0.7)',padding:'14px',
              fontSize:'16px', fontWeight:600,border:'1px solid rgba(20,20,20,0)',
              borderRadius:'5px',backgroundColor:'rgba(185,130,12,1)',color:'white',
            }} value={'SEND MESSAGE'}/>
          </div>

        </form>
      </div>

     {/* Pragraph for Find Us*/}
      <div style={{display:"flex",flexDirection:'column',marginTop:'70px',
         alignItems:'center', justifyContent:'center', gap:'8px'}}
          className='opacityAnimation'
         >
        <div style={{fontSize:'50px', 
          fontWeight:700, textAlign:'center'}}>
            Find Us
        </div>
        <div 
        style={{color:'rgba(185, 130, 12, 1)',width:"85vw", maxWidth:"700px",
        fontSize:'19px',textAlign:'center'}}>
          Visit our processing facilities in Bugene, Karagwe Kagera, Tanzania
        </div>
        <div style={{width:"100%", maxWidth:"800px", borderRadius:'10px',
          border:'1px solid black', minWidth:'80vw',height:'70vh',marginTop:'20px',
        }}>
            <iframe
            title="tanzcoffee-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.3239107755364!2d31.139272884502027!3d-1.59086576906741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19daf7d68a1a54a5%3A0x428ddd25a929aaf6!2sTanzCoffee%20Trading%20Company%20Ltd!5e0!3m2!1sen!2stz!4v1763143525049!5m2!1sen!2stz"
            width="100%" 
            height="100%"
            style={{ border: 0, borderRadius:'10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Open hours */}
        <div style={{width:'100%', borderRadius:'5px',boxShadow:'1px 0.5px 12px black',
          display:'flex',flexWrap:'wrap',gap:'20px',alignItems:'center',minWidth:'80vw',
          justifyContent:'space-between',padding:'25px',marginTop:'50px',
        }}>

          <div style={{display:'flex',flexDirection:'column', gap:'3px', maxWidth:'500px',
            flexGrow:1
          }}>
            <div style={{fontSize:'18px', fontWeight:500,
              paddingBottom:'10px',
            }}>Office Hours</div>
            <div style={{fontSize:'16px', fontWeight:400, color:'rgba(150,150,150,1)',
            }}>Monday - Friday: Open</div>
            <div style={{fontSize:'16px', fontWeight:400, color:'rgba(150,150,150,1)',
            }}>Saturday - Sunday: Closed</div>
          </div>

          <div style={{display:'flex',flexDirection:'column', gap:'3px', maxWidth:'500px',
            flexGrow:1
          }}>
            <div style={{fontSize:'18px', fontWeight:500,
              paddingBottom:'10px'
            }}>Getting Here</div>
            <div style={{fontSize:'16px', fontWeight:400, color:'rgba(150,150,150,1)',
            }}>
              Located on Bugene Road in Kayanga, Karagwe District.
              Easily accessible by public transport or private vehicle.
            </div>
          </div>

          <div style={{
            backgroundColor:'rgba(185,130,12,1)', color:'white', fontSize:'15px',
            padding:'15px 18px',alignItems:'center', justifyContent:'center',
            display:'flex',gap:'4px',borderRadius:'10px'
          }}> <IoLocationOutline style={{fontSize:'22px', color:'white'}}  className='whiteColor' /> 
              <span className='whiteColor'>Get Directions</span> 
            </div>
        </div>

      </div>

      {/*Paragraph for contacts footer */}
      <div style={{minHeight:'100px', width:'100vw', backgroundColor:'rgba(28, 28, 59, 1)'}}></div>
</div>
  )
}
