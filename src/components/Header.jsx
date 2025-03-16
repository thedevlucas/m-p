import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logoapp.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt="MP Logo" />
          </Link>
        </div>
        <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>CONTROL DE PLAGAS</Link></li>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>CONTACTO</Link></li>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>CUIDADO DE ANIMALES</Link></li>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>EQUIPAMIENTO</Link></li>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>OTROS</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="¿QUÉ ESTÁS BUSCANDO?" />
          <button type="submit"><i className='bx bx-search'></i></button>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;