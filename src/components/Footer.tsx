import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">SMRUTI TOUR & TRAVELS</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for memorable journeys. We provide premium car rentals and curated tour packages for the best travel experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/cars" className="text-gray-400 hover:text-blue-400 transition-colors">Car Rentals</Link></li>
                            <li><Link to="/packages" className="text-gray-400 hover:text-blue-400 transition-colors">Tour Packages</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                                <p className="text-gray-400">Berhampur, Aska Road, Infront of Khaja Street</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <a href="tel:+918596065789" className="text-gray-400 hover:text-white transition-colors">8596065789</a>
                                    <a href="tel:+918480847658" className="text-gray-400 hover:text-white transition-colors">8480847658</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                                <a href="mailto:satyapatro779@gmail.com" className="text-gray-400 hover:text-white transition-colors">satyapatro779@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Smruti Tour & Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
