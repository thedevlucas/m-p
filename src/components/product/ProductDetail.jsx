import { useState } from 'react';
import productImg from '../../assets/images/product.png';

function ProductDetail() {
  const [activeImage, setActiveImage] = useState(productImg);
  const [activeAccordion, setActiveAccordion] = useState(null); // Se inicializa en null para que ningún acordeón esté abierto al inicio

  const thumbnails = [
    { id: 1, image: productImg },
    { id: 2, image: productImg },
    { id: 3, image: productImg }
  ];
  
  const [activeThumbnail, setActiveThumbnail] = useState(thumbnails[0].id);

  const accordionItems = [
    {
      id: 1,
      title: 'Descripción',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Características Del Producto',
      content: (
        <ul className="feature-list">
          <li><i className='bx bxs-circle'></i> Control All Major Termite Species</li>
          <li><i className='bx bxs-circle'></i> Control All Major Termite Species</li>
          <li><i className='bx bxs-circle'></i> Control All Major Termite Species</li>
          <li><i className='bx bxs-circle'></i> Control All Major Termite Species</li>
        </ul>
      )
    }
  ];

  const handleThumbnailClick = (thumbnail) => {
    setActiveImage(thumbnail.image);
    setActiveThumbnail(thumbnail.id);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index); // Alterna entre abrir/cerrar el acordeón
  };

  return (
    <section className="product-detail">
      <div className="product-gallery">
        <div className="thumbnail-gallery">
          {thumbnails.map((thumbnail) => (
            <div 
              key={thumbnail.id}
              className={`thumbnail ${activeThumbnail === thumbnail.id ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(thumbnail)}
            >
              <img src={thumbnail.image} alt={`Termidor SC vista ${thumbnail.id}`} />
            </div>
          ))}
        </div>
        <div className="main-image">
          <img src={activeImage} alt="Termidor SC" />
        </div>
      </div>
      <div className="product-info">
        <div className="product-header">
          <h5>Características Del Producto</h5>
          <h1>TERMIDOR SC TERMITICIDE/INSECTICIDE</h1>
        </div>
        
        <div className="product-accordion">
          {accordionItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
            >
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <h3>{item.title}</h3>
                <i className={`bx ${activeAccordion === index ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
              </div>
              {activeAccordion === index && ( // Solo renderiza el contenido si el acordeón está abierto
                <div className="accordion-content">
                  {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
