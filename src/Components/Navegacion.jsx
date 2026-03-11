import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navegacion = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'is-transparent' : ''}`}
      style={
        isHome && !scrolled
          ? { backgroundColor: 'transparent', backdropFilter: 'none', borderBottom: 'none' }
          : { backgroundColor: 'var(--bg-color)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }
      }
    >
      <div className="navbar-brand-custom">
        <Link to="/">CASA ROBLE</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link-custom" to="/">INICIO</Link>
        <Link className="nav-link-custom" to="/nosotros">HISTORIA</Link>
        <Link className="nav-link-custom" to="/servicios">MENÚ</Link>
        <Link className="nav-link-custom" to="/login">LOGIN</Link>
        <Link className="btn-reservar-nav" to="/reserva">RESERVAR AHORA</Link>
      </div>
    </nav>
  );
};

export default Navegacion;