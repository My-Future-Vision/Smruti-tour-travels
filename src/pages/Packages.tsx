import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Packages: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Curated Tour Packages</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover the beauty of Odisha with our handpicked tour packages designed for your memorable vacation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <Link
                            to={`/packages/${pkg.id}`}
                            key={pkg.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group block"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h2 className="text-xl font-bold text-white mb-1">{pkg.name}</h2>
                                    <div className="flex items-center text-gray-200 text-sm">
                                        <Calendar size={14} className="mr-1" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pkg.locations.slice(0, 3).map((loc, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md flex items-center">
                                            <MapPin size={10} className="mr-1" /> {loc}
                                        </span>
                                    ))}
                                    {pkg.locations.length > 3 && (
                                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                                            +{pkg.locations.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{pkg.description}</p>

                                <div className="flex justify-between items-center border-t pt-4">
                                    <span className="text-blue-600 font-bold">{pkg.price}</span>
                                    <span
                                        className="flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                                    >
                                        View Details <ArrowRight size={18} className="ml-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
