import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-antigravity-deep border-t border-antigravity-white/10 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-antigravity-cyan">SMRUTI TOUR & TRAVELS</h3>
                        <p className="text-antigravity-dust mb-6 leading-relaxed">
                            Your trusted partner for memorable journeys. We provide premium car rentals and curated tour packages for the best travel experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-antigravity-cyan hover:bg-antigravity-cyan hover:text-antigravity-deep transition-all duration-300 transform hover:-translate-y-1"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-antigravity-cyan hover:bg-antigravity-cyan hover:text-antigravity-deep transition-all duration-300 transform hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-antigravity-cyan hover:bg-antigravity-cyan hover:text-antigravity-deep transition-all duration-300 transform hover:-translate-y-1"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-antigravity-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-antigravity-cyan transition-colors"></span>Home</Link></li>
                            <li><Link to="/cars" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-antigravity-cyan transition-colors"></span>Car Rentals</Link></li>
                            <li><Link to="/packages" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-antigravity-cyan transition-colors"></span>Tour Packages</Link></li>
                            <li><Link to="/testimonials" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-antigravity-cyan transition-colors"></span>Testimonials</Link></li>
                            <li><Link to="/contact" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-antigravity-cyan transition-colors"></span>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-antigravity-white">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <p className="text-antigravity-dust">Berhampur, Aska Road, Infront of Khaja Street</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <a href="tel:+918596065789" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors">8596065789</a>
                                    <a href="tel:+918480847658" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors">8480847658</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:satyapatro779@gmail.com" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors">satyapatro779@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-antigravity-dust text-sm">
                    <p>&copy; {new Date().getFullYear()} Smruti Tour & Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
