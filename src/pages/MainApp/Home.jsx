import React, { useEffect, useState } from 'react';

import GreenCoffee from '../../assets/TanzCoffeeDeck.png';
import pic1 from '../../assets/quality_storageCroped3.jpeg';
import pic2 from '../../assets/profesionalism_IntergrityCroped.jpg';
import pic3 from '../../assets/natural_tanzanian_coffee.jpg';
import pic4 from '../../assets/natural_green_coffeeCroped.jpg';
import pic5 from '../../assets/product_handlingCroped.jpg';
// built
import ReductionBrokenCoffee from '../../assets/pic1.jpg';
import WellOrganizedFirm from '../../assets/pic2.jpg';
import ProperFacilities from '../../assets/pic3.jpg';
import ProfesionalServices from '../../assets/pic4.jpg';
import ProductQuality from '../../assets/pic5.jpg';
import SecureTransaction from '../../assets/pic6.jpg'
//slide2
import Slide2pic1 from '../../assets/Slide2pic1.jpg';
import Slide2pic2 from '../../assets/Slide2pic2.jpg';
import Slide2pic3 from '../../assets/Slide2pic3.jpg';
import Slide2pic4 from '../../assets/Slide2pic4.jpg';
import Slide2pic5 from '../../assets/Slide2pic5.jpg';
import Slide2pic6 from '../../assets/Slide2pic6.jpg';
import Slide2pic7 from '../../assets/Slide2pic7.jpg';

import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

export default function Home() {
  return (
    <div>
      <SlideShow />
      <MiniHome />
    </div>
  );
}

/* -----------------------------------------------------------
   SLIDESHOW 1 — BIG IMAGES
----------------------------------------------------------- */
function SlideShow() {
  const images = [pic2, pic1, pic3, pic4, pic5];

  // Text for each slide (same order as images)
  const texts = [
    "Professionalism & Integrity",
    "Quality Storage",
    "Natural Green Coffee",
    "Natural Tanzanian Coffee",
    "Product Handling Excellence"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
      className='slideShowHeight'
    >
      <img
        src={images[index]}
        alt="slide"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      />

      {/* CENTERED WHITE TEXT */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "45px",
          fontWeight: "700",
          textAlign: "center",
          width: "90%",
        }}
      >
        {texts[index]}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   SLIDESHOW 2 — CARDS
----------------------------------------------------------- */

function SlideShow2({ index, slides , backgroundColor, color}) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease",
      }}
    >
      {slides[index]}
    </div>
  );
}

/* -----------------------------------------------------------
   HOME PAGE CONTENT
----------------------------------------------------------- */

function MiniHome() {

  /* ----- SLIDES FOR SLIDESHOW 2 ----- */
  const slides = [
    <Card 
      img={ReductionBrokenCoffee} 
      text="Reduction of broken coffee and high retention rate through the use of highly developed, high-capacity processing machines"
    />,
    <Card 
      img={WellOrganizedFirm} 
      text="A well-organized firm administrative structure that ensures exceptional customer service"
    />,
    <Card 
      img={ProperFacilities} 
      text="Proper facilities and product handling for quality"
    />,
    <Card 
      img={ProfesionalServices} 
      text="Maintaining professional services through hiring skilled and experienced staff."
    />,
    <Card 
      img={ProductQuality} 
      text="Product quality is ensured by professional quality team and advanced production facilities"
    />,
    <Card 
      img={SecureTransaction} 
      text="The company accepts all secured legal payment terms for international clients such as Letter of Credit and Cash Against Documents."
    />,
  ];

  const slides2 = [
    <Card2 
      img={Slide2pic6} 
      text="We buy fresh Tanzanian coffee cherries every season"
    />,
    <Card2 
      img={Slide2pic1} 
      text="We process the products in our own facilities for quality"
    />,
    <Card2 
      img={Slide2pic3} 
      text="Our coffee products are less broken with high retention due to use of advanced machines"
    />,
    <Card2 
      img={Slide2pic2} 
      text="We export products on basis of FOB or CIF depending on established agreements"
    />,
    <Card2 
      img={Slide2pic7} 
      text="The products are then transported to Dar es Salaam port by using food grade containers"
    />,
    <Card2 
      img={Slide2pic4} 
      text="Q-grader ensures our product quality before delivery"
    />,
  ];

  /* ----- STATE FOR SLIDESHOW 2 ----- */
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex(prev => (prev + 1) % slides.length);

  const prev = () =>
    setIndex(prev => (prev - 1 + slides.length) % slides.length);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', padding: "20px 0px 0px 0px", flexDirection: 'column' }}>

      {/* Overview Section */}
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          padding: '130px 0px 70px 0px',
          gap: '20px',
        }}
      >
        <div style={{ fontSize: '50px', fontWeight: 700 }}>Overview</div>
        <div
          style={{
            color: 'rgba(185, 130, 12, 1)',
            width: "85vw",
            maxWidth: "700px",
            fontSize: '18px',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Founded in 2024 and registered under the registration number 177486825,
          TanzCoffee Trading Company Limited is a private limited company with
          its headquarters in Tanzania.
        </div>
      </div>

      {/* OPERATIONS */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '5px',
          padding: "20px 30px 50px 30px",
          backgroundColor: 'rgba(185, 130, 12, 1)',
          gap: '10px',
          width: "100%",
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '50px',
            fontWeight: 700,
            width: "100%",
            textAlign: 'center',
          }}
        >
          How We Operate
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '85vw',
            fontSize: '18px',
            paddingBottom: '30px',
            color: 'white',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          The company trades both high quality Arabica and Robusta coffee products. Our factory processes only premium Robusta green coffee products that suit international market requirements while simultaneously providing a ready market for the increasing coffee production across Kagera region.
        </div>

        {/* Slider Controls & View */}
        <div
          style={{
            display: 'flex',
            fontSize: '16px',
            width: '100%',
            alignItems: 'center',
            justifyContent:'space-around',
            gap:'10px'
          }}
        >
          {/* LEFT BUTTON */}
          <div
            style={{
              borderRadius: '50%',
              padding: '10px 13px',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
            onClick={prev}
          >
            <CgChevronLeft style={{ fontSize: '25px', color: 'rgba(185,130,12,1)' }} />
          </div>

          {/* SLIDES */}
          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index} slides={slides2} backgroundColor="rgba(185,130,12,1)" color="white"/>
          </div>

          {/* RIGHT BUTTON */}
          <div
            style={{
              borderRadius: '50%',
              padding: '10px 13px',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
            onClick={next}
          >
            <CgChevronRight style={{ fontSize: '25px', color: 'rgba(185,130,12,1)' }} />
          </div>

        </div>
      </div>

      {/* WHY OUR COMPANY */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '5px',
          padding: "15px 15px 60px 15px",
          backgroundColor: 'white',
          gap: '15px',
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: '50px',
            fontWeight: 700,
            width: "100%",
            paddingBottom: '20px',
            textAlign: 'center',
          }}
        >
          Why Our Company
        </div>

        {/* Slider Controls & View */}
        <div
          style={{
            display: 'flex',
            fontSize: '16px',
            width: '100%',
            alignItems: 'center',
            justifyContent:'space-around',
            gap:'10px'
          }}
        >
          {/* LEFT BUTTON */}
          <div
            style={{
              borderRadius: '50%',
              padding: '10px 13px',
              backgroundColor: 'rgba(185,130,12,1)',
              cursor: 'pointer',
            }}
            onClick={prev}
          >
            <CgChevronLeft style={{ fontSize: '25px', color: 'white' }} />
          </div>

          {/* SLIDES */}
          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index} slides={slides} backgroundColor="rgba(185,130,12,1)" color="white"/>
          </div>

          {/* RIGHT BUTTON */}
          <div
            style={{
              borderRadius: '50%',
              padding: '10px 13px',
              backgroundColor: 'rgba(185,130,12,1)',
              cursor: 'pointer',
            }}
            onClick={next}
          >
            <CgChevronRight style={{ fontSize: '25px', color: 'white' }} />
          </div>

        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   REUSABLE CARD COMPONENT
----------------------------------------------------------- */
function Card({ img, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '150px',
          maxWidth: '350px',
          width: '100%',
        }}
        className='homePicSlide2'
      >
        <img src={img} alt="slide" style={{ width: '100%', height: '100%' }} />
      </div>

      <div
        style={{
          padding: '10px',
          backgroundColor: 'rgba(185,130,12,1)',
          color: 'white',
          // height: '200px',
          fontSize: '17px',
          fontWeight: 500,
        }}
        className='homeDescSlide2'
      >
        {text}
      </div>
    </div>
  );
}

function Card2({ img, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '150px',
          maxWidth: '350px',
          width: '100%',
        }}
        className='homePicSlide2'
      >
        <img src={img} alt="slide" style={{ width: '100%', height: '100%' }} />
      </div>

      <div
        style={{
          padding: '10px',
          backgroundColor: 'white',
          color: 'rgba(185,130,12,1)',
          // height: '200px',
          fontSize: '17px',
          fontWeight: 500,
        }}
        className='homeDescSlide2'
      >
        {text}
      </div>
    </div>
  );
}