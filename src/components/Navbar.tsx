import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Cars', path: '/cars' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const headerClass = isHome && !isOpen
        ? 'bg-black/40 backdrop-blur-md border-b border-white/10 text-white'
        : 'bg-white/90 backdrop-blur-md shadow-md text-gray-900';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <img src="/images/logo.png" alt="SMRUTI TOUR & TRAVELS" className="h-14 w-auto object-contain bg-white rounded-lg p-1 shadow-lg transition-transform group-hover:scale-105" />
                        <span className={`text-2xl font-bold tracking-tight ${isHome && !isOpen ? 'text-white' : 'text-blue-600'} hidden lg:block`}>
                            SMRUTI TOUR & TRAVELS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative font-medium transition-colors ${location.pathname === link.path
                                    ? (isHome && !isOpen ? 'text-blue-400' : 'text-blue-600')
                                    : (isHome && !isOpen ? 'text-gray-100 hover:text-white' : 'text-gray-600 hover:text-blue-600')
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${isHome && !isOpen ? 'bg-blue-400' : 'bg-blue-600'
                                    } ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full hover:w-full'}`}></span>
                            </Link>
                        ))}
                        <a
                            href={getWhatsAppLink('Hi, I would like to book a car.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <MessageCircle size={18} />
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isHome && !isOpen ? 'text-white' : 'text-gray-700'} hover:text-blue-600 focus:outline-none p-2 transition-colors`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.path
                                    ? 'text-blue-600 bg-blue-50/80 pl-6'
                                    : 'text-gray-700 hover:bg-gray-50 hover:pl-6'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={getWhatsAppLink('Hi, I need assistance with booking.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-green-600 text-white px-4 py-3.5 rounded-xl font-medium shadow-lg shadow-green-500/20 active:scale-95 transition-all mt-4 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
