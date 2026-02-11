import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ready to plan your trip? Get in touch with us for quotes, bookings, or any queries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+918596065789" className="hover:text-blue-600 transition-colors">8596065789</a>
                                    </p>
                                    <p className="text-gray-600">
                                        <a href="tel:+918480847658" className="hover:text-blue-600 transition-colors">8480847658</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:satyapatro779@gmail.com" className="hover:text-blue-600 transition-colors">satyapatro779@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                                    <p className="text-gray-600">
                                        Berhampur, Aska Road,<br />
                                        Infront of Khaja Street
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Sunday: 24 Hours Open</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map / Contact Form Placeholder */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Locate Us</h2>
                        <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden mb-6 relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=19.31935,84.78381&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=19.31935,84.78381"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 opacity-90 hover:opacity-100"
                            >
                                <MapPin size={16} /> Open in Maps
                            </a>
                        </div>
                        <p className="text-center text-gray-500 text-sm">
                            Visit our office for detailed package discussions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
