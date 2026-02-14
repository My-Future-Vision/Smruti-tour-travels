import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Users, Fuel, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Cars: React.FC = () => {
    return (
        <div className="py-24 bg-transparent min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-antigravity-cyan font-semibold tracking-wider uppercase text-sm">Our Fleet</span>
                    <h1 className="text-4xl font-bold text-antigravity-white mt-2 mb-4">Premium Vehicles</h1>
                    <p className="text-antigravity-dust max-w-2xl mx-auto text-lg leading-relaxed">
                        Choose from our wide range of well-maintained vehicles for a comfortable and safe journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cars.map((car, index) => (
                        <Link
                            to={`/cars/${car.id}`}
                            key={car.id}
                            className="group block h-full animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-antigravity-nebula rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500 border border-white/5 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-antigravity-deep/80 to-transparent opacity-80 z-10" />
                                    <img
                                        src={car.coverImage}
                                        alt={car.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-antigravity-deep/80 backdrop-blur-md text-antigravity-cyan text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-antigravity-cyan/20">
                                            {car.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h2 className="text-2xl font-bold text-antigravity-white mb-2 group-hover:text-antigravity-cyan transition-colors">{car.name}</h2>

                                        <div className="flex items-center gap-4 text-antigravity-dust text-sm">
                                            <div className="flex items-center gap-1.5">
                                                <Users size={16} className="text-antigravity-violet" />
                                                <span>{car.features.find(f => f.includes('Seater')) || '4 Seater'}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Fuel size={16} className="text-antigravity-violet" />
                                                <span>AC</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center group/btn">
                                        <div>
                                            <span className="text-2xl font-bold text-antigravity-cyan">₹{car.pricePerKm}</span>
                                            <span className="text-antigravity-dust text-sm ml-1">/km</span>
                                        </div>
                                        <span className="flex items-center text-antigravity-dust font-semibold group-hover/btn:text-antigravity-cyan transition-colors">
                                            Details <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
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
