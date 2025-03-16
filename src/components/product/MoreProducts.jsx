import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/images/product.png';

function MoreProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const productsGridRef = useRef(null);

  const products = [
    { id: 1, name: 'TERMIDOR SC TERMITICIDE/INSECTICIDE', image: productImg },
    { id: 2, name: 'TERMIDOR SC TERMITICIDE/INSECTICIDE', image: productImg },
    { id: 3, name: 'TERMIDOR SC TERMITICIDE/INSECTICIDE', image: productImg },
    { id: 4, name: 'TERMIDOR SC TERMITICIDE/INSECTICIDE', image: productImg },
    { id: 5, name: 'TERMIDOR SC TERMITICIDE/INSECTICIDE', image: productImg }
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width > 1200) setVisibleCards(5);
      else if (width > 992) setVisibleCards(4);
      else if (width > 768) setVisibleCards(3);
      else if (width > 576) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    const maxSlide = products.length - visibleCards;
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="more-products">
      <h2>MÁS PRODUCTOS</h2>

      <div className="products-slider">
        {visibleCards < products.length && (
          <button className="slider-arrow prev" onClick={handlePrev} disabled={currentSlide === 0}>
            <i className='bx bx-chevron-left'></i>
          </button>
        )}
        <div className="products-container">
          <div 
            className="products-grid"
            ref={productsGridRef}
            style={{
              display: 'flex',
              gap: '10px',
              transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            {products.map(product => (
              <div className="product-card" key={product.id} style={{ flex: `0 0 calc(${100 / visibleCards}% - 10px)` }}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <Link to={`/product/`} className="more-info-btn">MÁS INFORMACIÓN</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {visibleCards < products.length && (
          <button className="slider-arrow next" onClick={handleNext} disabled={currentSlide >= products.length - visibleCards}>
            <i className='bx bx-chevron-right'></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default MoreProducts;