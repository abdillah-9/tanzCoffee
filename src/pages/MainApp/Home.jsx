import React, { useEffect, useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

// import GreenCoffee from '../../assets/TanzCoffeeDeck.webp';
import pic1 from '../../assets/profesionalism_IntergrityCroped.webp';
import pic2 from '../../assets/quality_storageCroped.webp';
import pic3 from '../../assets/natural_tanzanian_coffee.webp';
import pic4 from '../../assets/natural_green_coffeeCroped.webp';
import pic5 from '../../assets/product_handlingCroped.webp';

// built
import ReductionBrokenCoffee from '../../assets/pic1.webp';
import WellOrganizedFirm from '../../assets/pic2.webp';
import ProperFacilities from '../../assets/pic3.webp';
import ProfesionalServices from '../../assets/pic4.webp';
import ProductQuality from '../../assets/pic5.webp';
import SecureTransaction from '../../assets/pic6.webp';

// slide2
import Slide2pic1 from '../../assets/Slide2pic1NewCroped.webp';
import Slide2pic2 from '../../assets/Slide2pic2.webp';
import Slide2pic3 from '../../assets/Slide2pic3.webp';
import Slide2pic4 from '../../assets/Slide2pic4.webp';
import Slide2pic5 from '../../assets/Slide2pic5New.webp';
import Slide2pic6 from '../../assets/Slide2pic6.webp';
import Slide2pic7 from '../../assets/Slide2pic7.webp';

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
  const [loadedImages, setLoadedImages] = useState([]);
  const [allLoaded, setAllLoaded] = useState(false);

  const images = [pic1, pic2, pic3, pic4, pic5];
  const texts = [
    "Professionalism & Integrity",
    "Quality Storage",
    "Natural Green Coffee",
    "Natural Tanzanian Coffee",
    "Product Handling Excellence"
  ];

  // Preload all images
useEffect(() => {
  const temp = new Array(images.length);
  let loadedCount = 0;

  images.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      temp[index] = img;     // ✔️ always keep original order
      loadedCount++;
      if (loadedCount === images.length) {
        setLoadedImages(temp);
        setAllLoaded(true);
      }
    };
  });
}, []);


  // Auto-slide only after images loaded
  useEffect(() => {
    if (!allLoaded) return;
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % loadedImages.length);
        setAnimate(true);
      }, 20);
    }, 7000);
    return () => clearInterval(timer);
  }, [allLoaded]);

  const next = () => {
    if (!allLoaded) return;
    setAnimate(false);
    setTimeout(() => {
      setIndex(prev => (prev + 1) % loadedImages.length);
      setAnimate(true);
    }, 20);
  };

  const prev = () => {
    if (!allLoaded) return;
    setAnimate(false);
    setTimeout(() => {
      setIndex(prev => (prev - 1 + loadedImages.length) % loadedImages.length);
      setAnimate(true);
    }, 20);
  };

  if (!allLoaded) {
    // Placeholder while images load
    return <div style={{ height: "400px", width: "100%", backgroundColor: "#eee" }} />;
  }

  return (
    <div className={`slideShowHeight ${animate ? 'slideScale' : ''}`} style={{ width: "100vw", position: "relative", overflow: "hidden" }}>
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', minHeight:'400px' }}>
        <img
          src={loadedImages[index].src}
          alt="slide"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

{/* Reverse Circular Darkening Overlay */}
<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",

    background: `
      radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.20) 35%,
        rgba(0, 0, 0, 0.40) 60%,
        rgba(0, 0, 0, 0.60) 80%,
        rgba(0, 0, 0, 0.75) 100%
      )
    `
  }}
/>


      {/* Text */}
      <div className={`${animate ? 'slideTop' : ''}`} style={{ ...topSlideshowTexts, color: 'white' }}>
        {texts[index]}
      </div>

      {/* NEXT/PREV BUTTONS */}
      <div style={{ position: "absolute", top: "50%", left: '2%', transform: "translateY(-50%)", zIndex: 10, borderRadius: '50%', padding: '10px 13px', backgroundColor: '#dd9d6dff', cursor: 'pointer' }} onClick={prev}>
        <CgChevronLeft style={{ fontSize: '35px', color: 'white' }} />
      </div>

      <div style={{ position: "absolute", top: "50%", right: '2%', transform: "translateY(-50%)", zIndex: 10, borderRadius: '50%', padding: '10px 13px', backgroundColor: '#dd9d6dff', cursor: 'pointer' }} onClick={next}>
        <CgChevronRight style={{ fontSize: '35px', color: 'white' }} />
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   SLIDESHOW 2 — CARDS
----------------------------------------------------------- */
function SlideShow2({ index, slides, animeClass }) {
  const [loadedSlides, setLoadedSlides] = useState([]);
  const [allLoaded, setAllLoaded] = useState(false);

  // Preload slide images
useEffect(() => {
  let temp = new Array(slides.length);
  let loadedCount = 0;

  slides.forEach((slide, index) => {
    const img = new Image();
    img.src = slide.props.img;
    img.onload = () => {
      temp[index] = slide;   // ✔️ keep correct slide order
      loadedCount++;
      if (loadedCount === slides.length) {
        setLoadedSlides(temp);
        setAllLoaded(true);
      }
    };
  });
}, [slides]);


  if (!allLoaded) {
    return <div style={{ height: "200px", width: "100%", backgroundColor: "#eee" }} />;
  }

  return (
    <div key={index} className={animeClass} style={{ width: "100%", minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {loadedSlides[index]}
    </div>
  );
}

/* -----------------------------------------------------------
   HOME PAGE CONTENT
----------------------------------------------------------- */
function MiniHome() {
  /* ----- SLIDES FOR WHY OUR COMPANY ----- */
  const slides = [
    <Card key={'c1'} img={ReductionBrokenCoffee} text="Reduction of broken coffee and high retention rate through the use of highly developed, high-capacity processing machines" />,
    <Card key={'c2'} img={WellOrganizedFirm} text="A well-organized firm administrative structure that ensures exceptional customer service" />,
    <Card key={'c3'} img={ProperFacilities} text="Proper facilities and product handling for quality" />,
    <Card key={'c4'} img={ProfesionalServices} text="Maintaining professional services through hiring skilled and experienced staff." />,
    <Card key={'c5'} img={ProductQuality} text="Product quality is ensured by professional quality team and advanced production facilities" />,
    <Card key={'c6'} img={SecureTransaction} text="The company accepts all secured legal payment terms for international clients such as Letter of Credit and Cash Against Documents." />,
  ];

  /* ----- SLIDES FOR HOW WE OPERATE ----- */
  const slides2 = [
    <Card2 key={'d1'} img={Slide2pic6} text="We buy fresh Tanzanian coffee cherries every season" />,
    <Card2 key={'d2'} img={Slide2pic1} text="We process the products in our own facilities for quality" />,
    <Card2 key={'d3'} img={Slide2pic3} text="Our coffee products are less broken with high retention due to use of advanced machines" />,
    <Card2 key={'d4'} img={Slide2pic2} text="Q-grader ensures our product quality before delivery" />,
    <Card2 key={'d5'} img={Slide2pic7} text="The products are then packed in Standard food grade jute-bags for quality" />,
    <Card2 key={'d6'} img={Slide2pic5} text="High-quality storage during transport ensures product safety" />,
    <Card2 key={'d7'} img={Slide2pic4} text="We export products on basis of FOB or CIF depending on established agreements " />,
  ];

  /* ----- STATE ----- */
  const [index1, setIndex1] = useState(0);
  const [animate1, setAnimate1] = useState(true);

  const [index2, setIndex2] = useState(0);
  const [animate2, setAnimate2] = useState(true);

  /* ----- SLIDE HANDLERS ----- */
  const next1 = () => { setAnimate1(false); setTimeout(() => { setIndex1(prev => (prev + 1) % slides.length); setAnimate1(true); }, 20); };
  const prev1 = () => { setAnimate1(false); setTimeout(() => { setIndex1(prev => (prev - 1 + slides.length) % slides.length); setAnimate1(true); }, 20); };
  const next2 = () => { setAnimate2(false); setTimeout(() => { setIndex2(prev => (prev + 1) % slides2.length); setAnimate2(true); }, 20); };
  const prev2 = () => { setAnimate2(false); setTimeout(() => { setIndex2(prev => (prev - 1 + slides2.length) % slides2.length); setAnimate2(true); }, 20); };

  /* ----- AUTO SLIDES ----- */
  useEffect(() => {
    const timer = setInterval(() => next1(), 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => next2(), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
      {/* Overview */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '130px 0px 70px 0px', gap: '20px' }}>
        <div style={{ fontSize: '50px', fontWeight: 700 }}>Overview</div>
        <div style={{ color: 'rgba(185, 130, 12, 1)', width: "85vw", maxWidth: "700px", fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
          Founded in 2024 and registered under the registration number 177486825, TanzCoffee Trading Company Limited is a private limited company with its headquarters in Tanzania.
        </div>
      </div>

      {/* HOW WE OPERATE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '5px', padding: "20px 30px 50px 30px", backgroundColor: '#dd9d6dff', gap: '10px', width: "100%", justifyContent: 'center' }}>
        <div style={{ fontSize: '50px', fontWeight: 700, width: "100%", textAlign: 'center' }}>How We Operate</div>
        <div style={{ width: '100%', maxWidth: '85vw', fontSize: '18px', paddingBottom: '30px', color: 'white', textAlign: 'center', fontWeight: 600 }}>
          The company supplies both Arabica and Robusta coffee products. Our factory processes premium Robusta green coffee products to suit international market requirements while simultaneously providing a ready market for the increasing coffee production in Tanzania.
        </div>

        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', gap: '10px' }}>
          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'white', cursor: 'pointer' }} onClick={prev2}>
            <CgChevronLeft style={{ fontSize: '25px', color: '#dd9d6dff' }} />
          </div>

          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index2} slides={slides2} animeClass={animate2 ? 'slideLeft' : ''} />
          </div>

          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: 'white', cursor: 'pointer' }} onClick={next2}>
            <CgChevronRight style={{ fontSize: '25px', color: '#dd9d6dff' }} />
          </div>
        </div>
      </div>

      {/* WHY OUR COMPANY */}
      <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '5px', padding: "15px 15px 60px 15px", backgroundColor: 'white', gap: '15px', width: "100%" }}>
        <div style={{ fontSize: '50px', fontWeight: 700, width: "100%", paddingBottom: '20px', textAlign: 'center' }}>Why Our Company</div>

        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', gap: '10px' }}>
          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: '#dd9d6dff', cursor: 'pointer' }} onClick={prev1}>
            <CgChevronLeft style={{ fontSize: '25px', color: 'white' }} />
          </div>

          <div style={{ maxWidth: '350px' }}>
            <SlideShow2 index={index1} slides={slides} animeClass={animate1 ? 'slideRight' : ''} />
          </div>

          <div style={{ borderRadius: '50%', padding: '10px 13px', backgroundColor: '#dd9d6dff', cursor: 'pointer' }} onClick={next1}>
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
        <img src={img} alt="slide" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className='homeDescSlide2 slidesHeight' style={{ padding: '10px', backgroundColor: '#dd9d6dff', color: 'white', fontSize: '16px', fontWeight: 400, borderRadius: '0 0 10px 10px' }}>
        {text}
      </div>
    </div>
  );
}

function Card2({ img, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', width: '100%' }}>
      <div className='homePicSlide2' style={{ position: 'relative', width: '100%', paddingTop: '75%', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
        <img src={img} alt="slide" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className='homeDescSlide2 slidesHeight2' style={{ padding: '10px', backgroundColor: 'white', color: '#dd9d6dff', fontSize: '16px', fontWeight: 400, borderRadius: '0 0 10px 10px' }}>
        {text}
      </div>
    </div>
  );
}

const topSlideshowTexts = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "45px",
  fontWeight: "700",
  textAlign: "center",
  width: "90%",
}
