import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import { useTheme } from '../context/ThemeContext';

import Button from './Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Cars', path: '/cars' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const headerClass = isHome && !scrolled && !isOpen
        ? 'bg-transparent text-antigravity-white py-4'
        : 'bg-antigravity-deep/80 backdrop-blur-md shadow-lg border-b border-antigravity-white/10 text-antigravity-white py-2';

    const linkClass = (path: string) => {
        const isActive = location.pathname === path;
        const base = "relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300";

        if (isHome && !scrolled && !isOpen) {
            return isActive
                ? `${base} bg-antigravity-cyan/10 text-antigravity-cyan border border-antigravity-cyan/20`
                : `${base} text-antigravity-white/80 hover:bg-antigravity-white/5 hover:text-antigravity-white`;
        }

        return isActive
            ? `${base} bg-antigravity-cyan/10 text-antigravity-cyan border border-antigravity-cyan/20`
            : `${base} text-antigravity-white/70 hover:text-antigravity-cyan hover:bg-antigravity-cyan/5`;
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isHome && !scrolled && !isOpen ? 'text-antigravity-white' : 'text-antigravity-cyan'}`}>
                            SMRUTI TOUR & TRAVELS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={linkClass(link.path)}
                            >
                                {link.name}
                            </Link>
                        ))}



                        <div className="ml-4">
                            <Button
                                href={getWhatsAppLink('Hi, I would like to book a car.')}
                                variant={isHome && !scrolled && !isOpen ? "glass" : "primary"}
                                size="sm"
                                className="gap-2"
                            >
                                <MessageCircle size={16} />
                                Book Now
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">


                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${isHome && !scrolled && !isOpen ? 'text-antigravity-white hover:bg-white/10' : 'text-antigravity-dust hover:bg-antigravity-cyan/10 hover:text-antigravity-cyan'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-antigravity-deep/95 backdrop-blur-xl border-t border-white/10 shadow-xl absolute w-full left-0 animate-slide-up h-screen">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.path
                                    ? 'text-antigravity-cyan bg-antigravity-cyan/10 pl-6 border-l-2 border-antigravity-cyan'
                                    : 'text-antigravity-white/80 hover:bg-white/5 hover:text-antigravity-white hover:pl-6'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/5 mt-2">
                            <Button
                                href={getWhatsAppLink('Hi, I need assistance with booking.')}
                                variant="primary"
                                className="w-full gap-2 justify-center"
                            >
                                <MessageCircle size={18} /> Chat on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
