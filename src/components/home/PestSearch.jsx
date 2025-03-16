import { useState } from 'react';
import ratImg from '../../assets/images/rat.png';

function PestSearch() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const pests = [
    { id: 1, name: 'HORMIGAS', image: ratImg },
    { id: 2, name: 'CUCARACHAS', image: ratImg },
    { id: 3, name: 'TERMITAS', image: ratImg },
    { id: 4, name: 'MOSCAS', image: ratImg },
    { id: 5, name: 'MOSQUITOS', image: ratImg },
    { id: 6, name: 'ARAÑAS', image: ratImg },
    { id: 7, name: 'ESCORPIONES', image: ratImg },
    { id: 8, name: 'CHINCHES', image: ratImg },
    { id: 9, name: 'ESCARABAJOS', image: ratImg },
    { id: 10, name: 'PULGAS', image: ratImg },
    { id: 11, name: 'GARRAPATAS', image: ratImg },
    { id: 12, name: 'ABEJAS', image: ratImg },
    { id: 13, name: 'AVISPAS', image: ratImg },
    { id: 14, name: 'RATAS', image: ratImg },
    { id: 15, name: 'RATONES', image: ratImg },
    { id: 16, name: 'GUSANOS', image: ratImg },
    { id: 17, name: 'CARAJOS', image: ratImg },
    { id: 18, name: 'TÁBANOS', image: ratImg },
    { id: 19, name: 'LOMOS', image: ratImg },
    { id: 20, name: 'ESCORPIONES', image: ratImg },
    { id: 21, name: 'CHINCHES', image: ratImg },
    { id: 22, name: 'ESCARABAJOS', image: ratImg },
    { id: 23, name: 'PULGAS', image: ratImg },
    { id: 24, name: 'GARRAPATAS', image: ratImg }
  ];

  const totalPages = Math.ceil(pests.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedPests = pests.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="pest-search">
      <h2 className="section-title">BUSCAR POR PLAGA</h2>
      <div className="pest-slider">
        <button className="slider-arrow prev" onClick={handlePrev} disabled={currentPage === 0}>
          <i className='bx bx-chevron-left'></i>
        </button>
        <div className="pest-grid">
          {paginatedPests.map(pest => (
            <div className="pest-card" key={pest.id}>
              <img src={pest.image} alt={pest.name} />
              <p>{pest.name}</p>
            </div>
          ))}
        </div>
        <button className="slider-arrow next" onClick={handleNext} disabled={currentPage === totalPages - 1}>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </section>
  );
}

export default PestSearch;
