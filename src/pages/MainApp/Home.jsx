import React, { useEffect, useState } from 'react';

// import GreenCoffee from '../../assets/TanzCoffeeDeck.avif';
import pic1 from '../../assets/quality_storageCroped.avif';
import pic2 from '../../assets/profesionalism_IntergrityCroped.avif';
import pic3 from '../../assets/natural_tanzanian_coffee.avif';
import pic4 from '../../assets/natural_green_coffeeCroped.avif';
import pic5 from '../../assets/product_handlingCroped.avif';
// built
import ReductionBrokenCoffee from '../../assets/pic1.avif';
import WellOrganizedFirm from '../../assets/pic2.avif';
import ProperFacilities from '../../assets/pic3.avif';
import ProfesionalServices from '../../assets/pic4.avif';
import ProductQuality from '../../assets/pic5.avif';
import SecureTransaction from '../../assets/pic6.avif';
// slide2
import Slide2pic1 from '../../assets/Slide2pic1NewCroped.avif';
import Slide2pic2 from '../../assets/Slide2pic2.avif';
import Slide2pic3 from '../../assets/Slide2pic3.avif';
import Slide2pic4 from '../../assets/Slide2pic4.avif';
import Slide2pic5 from '../../assets/Slide2pic5New.avif';
import Slide2pic6 from '../../assets/Slide2pic6.avif';
import Slide2pic7 from '../../assets/Slide2pic7.avif';

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
  const [animate, setAnimate] = useState(true);
  const [index, setIndex] = useState(0);

  const images = [pic2, pic1, pic3, pic4, pic5];

  const texts = [
    "Professionalism & Integrity",
    "Quality Storage",
    "Natural Green Coffee",
    "Natural Tanzanian Coffee",
    "Product Handling Excellence"
  ];

  // Preload images
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide with animation trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % images.length);
        setAnimate(true);
      }, 20);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`slideShowHeight ${animate ? 'slideScale' : ''}`}
      style={{
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <img
          src={images[index]}
          alt="slide"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

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

      <div className={`${animate ? 'slideTop' : ''}`}
        style={{
          position: "absolute",
          top: "40%",
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
function SlideShow2({ index, slides, animeClass }) {
  return (
    <div className={animeClass}
      style={{
        width: "100%",
        minHeight: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
  /* ----- SLIDES FOR WHY OUR COMPANY ----- */
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

  /* ----- SLIDES FOR HOW WE OPERATE ----- */
  const slides2 = [
    <Card2 img={Slide2pic6} text="We buy fresh Tanzanian coffee cherries every season" />,
    <Card2 img={Slide2pic1} text="We process the products in our own facilities for quality" />,
    <Card2 img={Slide2pic3} text="Our coffee products are less broken with high retention due to use of advanced machines" />,
    <Card2 img={Slide2pic2} text="Q-grader ensures our product quality before delivery" />,
    <Card2 img={Slide2pic7} text="The products are then packed in Standard food grade jute-bags for quality" />,
    <Card2 img={Slide2pic5} text="High-quality storage during transport ensures product safety" />,
    <Card2 img={Slide2pic4} text="We export products on basis of FOB or CIF depending on established agreements " />,
  ];

  /* ----- PRELOAD IMAGES ----- */
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.props.img;
    });
    slides2.forEach(slide => {
      const img = new Image();
      img.src = slide.props.img;
    });
  }, []);

  /* ----- STATE ----- */
  const [index1, setIndex1] = useState(0);
  const [animate1, setAnimate1] = useState(true);

  const [index2, setIndex2] = useState(0);
  const [animate2, setAnimate2] = useState(true);

  /* ----- SLIDE HANDLERS WITH ANIMATION ----- */
  const next1 = () => {
    setAnimate1(false);
    setTimeout(() => {
      setIndex1(prev => (prev + 1) % slides.length);
      setAnimate1(true);
    }, 20);
  };

  const prev1 = () => {
    setAnimate1(false);
    setTimeout(() => {
      setIndex1(prev => (prev - 1 + slides.length) % slides.length);
      setAnimate1(true);
    }, 20);
  };

  const next2 = () => {
    setAnimate2(false);
    setTimeout(() => {
      setIndex2(prev => (prev + 1) % slides2.length);
      setAnimate2(true);
    }, 20);
  };

  const prev2 = () => {
    setAnimate2(false);
    setTimeout(() => {
      setIndex2(prev => (prev - 1 + slides2.length) % slides2.length);
      setAnimate2(true);
    }, 20);
  };

  /* ----- AUTO SLIDES WITH ANIMATION ----- */
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate1(false);
      setTimeout(() => {
        next1();
        setAnimate1(true);
      }, 20);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate2(false);
      setTimeout(() => {
        next2();
        setAnimate2(true);
      }, 20);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
      {/* Overview */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '130px 0px 70px 0px', gap: '20px' }}>
        <div style={{ fontSize: '50px', fontWeight: 700 }}>Overview</div>
        <div style={{ color: 'rgba(185, 130, 12, 1)', width: "85vw", maxWidth: "700px", fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
          Founded in 2024 and registered under registration number 177486825...
        </div>
      </div>

      {/* HOW WE OPERATE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '5px', padding: "20px 30px 50px 30px", backgroundColor: 'rgba(185,130,12,1)', gap: '10px', width: "100%", justifyContent: 'center' }}>
        <div style={{ fontSize: '50px', fontWeight: 700, width: "100%", textAlign: 'center' }}>How We Operate</div>
        <div style={{ width: '100%', maxWidth: '85vw', fontSize: '18px', paddingBottom: '30px', color: 'white', textAlign: 'center', fontWeight: 600 }}>
          The company trades both high-quality Arabica and Robusta coffee products...
        </div>

        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', gap: '10px' }}>
          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'white', cursor: 'pointer' }} onClick={prev2}>
            <CgChevronLeft style={{ fontSize: '25px', color: 'rgba(185,130,12,1)' }} />
          </div>

          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index2} slides={slides2} animeClass={animate2 ? 'slideLeft' : ''} />
          </div>

          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'white', cursor: 'pointer' }} onClick={next2}>
            <CgChevronRight style={{ fontSize: '25px', color: 'rgba(185,130,12,1)' }} />
          </div>
        </div>
      </div>

      {/* WHY OUR COMPANY */}
      <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '5px', padding: "15px 15px 60px 15px", backgroundColor: 'white', gap: '15px', width: "100%" }}>
        <div style={{ fontSize: '50px', fontWeight: 700, width: "100%", paddingBottom: '20px', textAlign: 'center' }}>Why Our Company</div>

        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', gap: '10px' }}>
          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'rgba(185,130,12,1)', cursor: 'pointer' }} onClick={prev1}>
            <CgChevronLeft style={{ fontSize: '25px', color: 'white' }} />
          </div>

          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index1} slides={slides} animeClass={animate1 ? 'slideRight' : ''} />
          </div>

          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'rgba(185,130,12,1)', cursor: 'pointer' }} onClick={next1}>
            <CgChevronRight style={{ fontSize: '25px', color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   REUSABLE CARD COMPONENTS
----------------------------------------------------------- */
function Card({ img, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', width: '100%' }}>
      <div className='homePicSlide2' style={{ position: 'relative', width: '100%', paddingTop: '75%', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
        <img
          src={img}
          alt="slide"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className='homeDescSlide2 slidesHeight' style={{ padding: '10px', backgroundColor: 'rgba(185,130,12,1)', color: 'white', fontSize: '16px', fontWeight: 400, borderRadius: '0 0 10px 10px' }}>
        {text}
      </div>
    </div>
  );
}

function Card2({ img, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', width: '100%' }}>
      <div className='homePicSlide2' style={{ position: 'relative', width: '100%', paddingTop: '75%', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
        <img
          src={img}
          alt="slide"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className='homeDescSlide2 slidesHeight2' style={{ padding: '10px', backgroundColor: 'white', color: 'rgba(185,130,12,1)', fontSize: '16px', fontWeight: 400, borderRadius: '0 0 10px 10px' }}>
        {text}
      </div>
    </div>
  );
}
