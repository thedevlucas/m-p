import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage1 from '../../assets/images/bg.png';
import bgImage2 from '../../assets/images/bg.png';
import bgImage3 from '../../assets/images/bg.png';

const slides = [
  {
    id: 0,
    image: bgImage1,
    title: '¿TIENES PROBLEMAS DE PLAGAS?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: 'APRENDER MÁS',
    link: '/'
  },
  {
    id: 1,
    image: bgImage2,
    title: 'PROTEGE TU HOGAR',
    description: 'Descubre soluciones efectivas para mantener tu hogar libre de plagas con nuestros productos de alta calidad.',
    buttonText: 'VER PRODUCTOS',
    link: '/productos'
  },
  {
    id: 2,
    image: bgImage3,
    title: 'SOLUCIONES PROFESIONALES',
    description: 'Trabajamos con expertos en control de plagas para ofrecerte los mejores tratamientos personalizados.',
    buttonText: 'CONTACTAR',
    link: '/contacto'
  }
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const changeSlide = (direction) => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);

    setActiveSlide((prev) => {
      if (direction === 'next') return (prev + 1) % slides.length;
      if (direction === 'prev') return (prev - 1 + slides.length) % slides.length;
    });
  };

  return (
    <section className="hero">
      <div 
        className="hero-slider"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${activeSlide * 100}%)`,
          width: `${slides.length * 100}%`
        }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="hero-slide" 
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPositionX: '0px',
              backgroundSize: '34%',
              
            }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link to={slide.link} className="primary-btn">{slide.buttonText}</Link>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={() => changeSlide('prev')}>
      <i className='bx bx-chevron-left'></i>
      </button>
      <button className="arrow right" onClick={() => changeSlide('next')}>
      <i className='bx bx-chevron-right'></i>
      </button>

      <div className="hero-slider-controls">
        {slides.map((slide, index) => (
          <span 
            key={slide.id}
            className={`dot ${activeSlide === index ? 'active' : ''}`}
            onClick={() => {
              setActiveSlide(index);
              setAutoPlay(false);
              setTimeout(() => setAutoPlay(true), 5000);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
