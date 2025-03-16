import { Link } from 'react-router-dom';
import dogImg from '../../assets/images/dog.png';
import grassImg from '../../assets/images/grass.png';

function InfoSections() {
  return (
    <section className="info-sections">
      <div className="animal-care">
        <div className="info-image">
          <img src={dogImg} alt="Cuidado de Animales" />
        </div>
        <div className="info-content">
          <h2>CUIDADO DE ANIMALES</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Link to="/" className="secondary-btn">APRENDER MÁS</Link>
        </div>
      </div>
      
      <div className="garden-care">
        <div className="info-content">
          <h2>CÉSPED Y JARDÍN</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Link to="/" className="secondary-btn">APRENDER MÁS</Link>
        </div>
        <div className="info-image">
          <img src={grassImg} alt="Césped y Jardín" />
        </div>
      </div>
    </section>
  );
}

export default InfoSections;