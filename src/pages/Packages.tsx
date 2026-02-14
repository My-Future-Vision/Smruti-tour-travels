import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Packages: React.FC = () => {
    return (
        <div className="py-24 bg-transparent min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-antigravity-violet font-semibold tracking-wider uppercase text-sm">Destinations</span>
                    <h1 className="text-4xl font-bold text-antigravity-white mt-2 mb-4">Curated Tour Packages</h1>
                    <p className="text-antigravity-dust max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover the beauty of Odisha with our handpicked tour packages designed for your memorable vacation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {packages.map((pkg, index) => (
                        <Link
                            to={`/packages/${pkg.id}`}
                            key={pkg.id}
                            className="group block h-full animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="bg-antigravity-nebula rounded-3xl shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-500 border border-white/5 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-antigravity-deep/80 via-black/20 to-transparent z-10" />
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20 text-white w-full pr-6">
                                        <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                                            <span className="bg-antigravity-violet/90 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1 shadow-sm">
                                                <Calendar size={12} /> {pkg.duration}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold leading-tight text-antigravity-white">{pkg.name}</h2>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {pkg.locations.slice(0, 3).map((loc, idx) => (
                                            <span key={idx} className="bg-antigravity-deep text-antigravity-cyan text-xs font-medium px-2.5 py-1 rounded-lg flex items-center border border-antigravity-cyan/20">
                                                <MapPin size={10} className="mr-1 text-antigravity-cyan" /> {loc}
                                            </span>
                                        ))}
                                        {pkg.locations.length > 3 && (
                                            <span className="bg-antigravity-deep text-antigravity-cyan text-xs font-medium px-2.5 py-1 rounded-lg border border-antigravity-cyan/20">
                                                +{pkg.locations.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-antigravity-dust text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{pkg.description}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center group/btn">
                                        <span className="text-xl font-bold text-antigravity-cyan">{pkg.price}</span>
                                        <span className="flex items-center text-antigravity-dust font-semibold group-hover/btn:text-antigravity-cyan transition-colors">
                                            View Details <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

export default Packages;
