import './Header.css'
import LogoImage from '../assets/images/logo_header.svg';
import '../index.css'
import MainButton from './MainButton';
import { Link } from 'react-router-dom';
import { useCart } from './Cart/useCart';
import { useState } from 'react';

function Header() {
    const { cartItems } = useCart();
    const totalItems = cartItems.length; 
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={LogoImage} alt="Logo" className="logo-img" />
                <div className="logo-text">
                    <span className="logo-text-main">Icy</span>
                    <span className="logo-text-second">Tales</span>
                </div>
            </Link>

            {/* Бургер кнопка */}
            <button 
                className={`burger ${menuOpen ? 'active' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Навігація */}
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQ’s</Link>
            </nav>

            <div className="actions-header">
                <Link to='/cart'>
                    <button className="icon-button cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            role="img"
                        >
                            <path d="
                                M4.00488 16V4H2.00488V2H5.00488
                                C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433
                                L20.4433 7H8.00488V5H21.7241
                                C22.2764 5 22.7241 5.44772 22.7241 6
                                C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254
                                L20.1942 16.2425
                                C20.083 16.6877 19.683 17 19.2241 17H5.00488
                                C4.4526 17 4.00488 16.5523 4.00488 16Z
                                M6.00488 23
                                C4.90031 23 4.00488 22.1046 4.00488 21
                                C4.00488 19.8954 4.90031 19 6.00488 19
                                C7.10945 19 8.00488 19.8954 8.00488 21
                                C8.00488 22.1046 7.10945 23 6.00488 23Z
                                M18.0049 23
                                C16.9003 23 16.0049 22.1046 16.0049 21
                                C16.0049 19.8954 16.9003 19 18.0049 19
                                C19.1095 19 20.0049 19.8954 20.0049 21
                                C20.0049 22.1046 19.1095 23 18.0049 23Z" />
                        </svg>
                        {totalItems > 0 && (
                            <div className="badge">{totalItems}</div>
                        )}
                    </button>
                </Link>
                
                <Link to='/contacts'>
                    <MainButton text="Contact us →" color='pink' />
                </Link>
            </div>
        </header>
    )
}

export default Header;
