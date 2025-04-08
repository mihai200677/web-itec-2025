import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import '../styles/NavBar.css';
import logoImage from '../images/logo.png'; 

function Navbar() {
  const { cartCount } = useCart();
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="brand-section">
            <Link to="/" className="brand-link">
              {/* Replace Music icon with img tag */}
              <img 
                src={logoImage} 
                alt="Culture Drop Logo" 
                className="brand-image" 
              />
              <span className="brand-title">Culture Drop</span>
            </Link>
          </div>

          <div className="nav-links">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className='nav-link'>Login</Link>
            
            <button onClick={toggleTheme} className="theme-toggle">
              {isDark ? <Sun className="sun-icon" /> : <Moon className="moon-icon" />}
            </button>

            <div className="cart-container">
              <ShoppingBag className="cart-icon" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="cart-badge"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
