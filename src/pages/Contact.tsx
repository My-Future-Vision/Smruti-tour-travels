import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="py-16 md:py-24 bg-transparent min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16 animate-fade-in">
                    <span className="text-antigravity-cyan font-semibold tracking-wider uppercase text-xs md:text-sm">Get in Touch</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-antigravity-white mt-2 mb-4">Contact Us</h1>
                    <p className="text-antigravity-dust max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Ready to plan your trip? We are here to help you with quotes, bookings, or any travel related queries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                    {/* Contact Info */}
                    <div className="bg-antigravity-nebula rounded-3xl shadow-lg p-5 md:p-8 h-full border border-white/5 animate-slide-up">
                        <h2 className="text-xl md:text-2xl font-bold text-antigravity-white mb-6 md:mb-8 flex items-center gap-3">
                            <span className="w-1 md:w-1.5 h-6 md:h-8 bg-antigravity-cyan rounded-full"></span>
                            Contact Information
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="bg-antigravity-deep p-2.5 md:p-3.5 rounded-2xl text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors duration-300">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antigravity-white mb-1">Phone Numbers</h3>
                                    <div className="space-y-1">
                                        <p>
                                            <a href="tel:+918596065789" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors font-medium">
                                                +91 85960 65789
                                            </a>
                                        </p>
                                        <p>
                                            <a href="tel:+918480847658" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors font-medium">
                                                +91 84808 47658
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="bg-antigravity-deep p-2.5 md:p-3.5 rounded-2xl text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors duration-300">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antigravity-white mb-1">Email Address</h3>
                                    <p>
                                        <a href="mailto:satyapatro779@gmail.com" className="text-antigravity-dust hover:text-antigravity-cyan transition-colors font-medium">
                                            satyapatro779@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="bg-antigravity-deep p-2.5 md:p-3.5 rounded-2xl text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors duration-300">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antigravity-white mb-1">Office Address</h3>
                                    <p className="text-antigravity-dust leading-relaxed">
                                        Berhampur, Aska Road,<br />
                                        Infront of Khaja Street,<br />
                                        Odisha, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="bg-antigravity-deep p-2.5 md:p-3.5 rounded-2xl text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-colors duration-300">
                                    <Clock size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antigravity-white mb-1">Business Hours</h3>
                                    <p className="text-antigravity-dust font-medium">Monday - Sunday: 24 Hours Open</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-antigravity-nebula rounded-3xl shadow-lg p-3 h-full border border-white/5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="w-full h-full rounded-2xl overflow-hidden relative group min-h-[300px] md:min-h-[400px]">
                            <iframe
                                src="https://maps.google.com/maps?q=19.31935,84.78381&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps"
                                className="w-full h-full grayscale-[50%] invert-[.9] contrast-[1.1] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 transition-all duration-500"
                            ></iframe>
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <div className="bg-antigravity-deep/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between pointer-events-auto border border-white/10">
                                    <div>
                                        <p className="text-antigravity-white font-bold text-sm">Visit our Office</p>
                                        <p className="text-antigravity-dust text-xs">Get directions on Google Maps</p>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=19.31935,84.78381"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-antigravity-cyan text-antigravity-deep p-2.5 rounded-lg hover:bg-antigravity-cyan/90 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                                    >
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
