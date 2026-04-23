import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <NavLink 
          to="/" 
          className="nav-logo" 
          onClick={() => {
            setIsSpinning(true);
            setTimeout(() => setIsSpinning(false), 700);
          }}
        >
          <div className={`hm-logo-icon ${isSpinning ? 'spin-click' : ''}`}>HM</div>
        </NavLink>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/theme" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsOpen(false)}>Theme</NavLink>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
