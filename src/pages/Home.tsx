import React from 'react';
import { ChevronRight, Star, MapPin, Calendar } from 'lucide-react';

import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { packages } from '../data/packages';
import { getWhatsAppLink } from '../utils/whatsapp';

const Home: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")' }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Explore the World with SMRUTI TOUR & TRAVELS
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Premium car rentals and curated tour packages for your perfect getaway.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={getWhatsAppLink('Hi, I would like to explore car booking options.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
                            >
                                Book a Car <ChevronRight size={20} />
                            </a>
                            <Link to="/packages" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all">
                                View Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Cars Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience comfort and luxury with our top-rated vehicles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cars.slice(0, 3).map((car) => (
                            <Link key={car.id} to={`/cars/${car.id}`} className="group block h-full">
                                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden h-full flex flex-col">
                                    <div className="h-56 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                        <img
                                            src={car.coverImage}
                                            alt={car.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{car.name}</h3>
                                            <p className="text-gray-500 mb-4 line-clamp-2">{car.description}</p>
                                        </div>
                                        <div className="flex items-center text-blue-600 font-semibold mt-auto">
                                            View Details <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/cars" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                            View All Cars <ChevronRight className="ml-2" size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Popular Packages Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tour Packages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our handpicked tour packages for an unforgettable journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.slice(0, 3).map((pkg) => (
                            <Link key={pkg.id} to={`/packages/${pkg.id}`} className="group block h-full">
                                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden h-full flex flex-col hover:-translate-y-1 duration-300">
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20 text-white">
                                            <div className="flex items-center gap-2 mb-1 text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
                                                <Calendar size={14} /> {pkg.duration}
                                            </div>
                                            <p className="font-bold text-lg">{pkg.price}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{pkg.name}</h3>
                                            <p className="text-gray-500 mb-4 line-clamp-3">{pkg.description}</p>
                                        </div>
                                        <div className="flex items-center text-blue-600 font-semibold mt-auto pt-4 border-t border-gray-50">
                                            View Itinerary <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/packages" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                            View All Packages <ChevronRight className="ml-2" size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide the best travel experience with well-maintained cars and professional drivers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Premium Fleet', desc: 'Wide range of luxury and comfort vehicles.', icon: Star },
                        { title: 'Expert Drivers', desc: 'Experienced and professional chauffeurs.', icon: Star },
                        { title: 'Custom Tours', desc: 'Tailored packages for your specific needs.', icon: MapPin },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1 transform duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
