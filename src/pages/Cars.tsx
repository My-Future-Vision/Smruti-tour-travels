import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Users, Fuel, ArrowRight } from 'lucide-react';

const Cars: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained vehicles for a comfortable and safe journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car, index) => (
                        <Link
                            to={`/cars/${car.id}`}
                            key={car.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group block"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={car.coverImage}
                                    alt={car.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold text-gray-900">{car.name}</h2>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">{car.type}</span>
                                </div>

                                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                                    <div className="flex items-center gap-1">
                                        <Users size={16} />
                                        <span>{car.features.find(f => f.includes('Seater')) || '4 Seater'}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Fuel size={16} />
                                        <span>AC</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end border-t pt-4">
                                    <div>
                                        <span className="text-2xl font-bold text-blue-600">₹{car.pricePerKm}</span>
                                        <span className="text-gray-500 text-sm">/km</span>
                                    </div>
                                    <span
                                        className="flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                                    >
                                        Details <ArrowRight size={18} className="ml-1" />
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

export default Cars;
