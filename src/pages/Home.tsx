import React from 'react';
import { ChevronRight, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { packages } from '../data/packages';
import { getWhatsAppLink } from '../utils/whatsapp';
import Button from '../components/Button';

const Home: React.FC = () => {
    return (
        <div className="bg-transparent font-sans">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")' }}
                >
                    <div className="absolute inset-0 bg-antigravity-deep/90 backdrop-blur-[1px]" />
                    {/* Radial gradient overlay for depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center animate-fade-in">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-antigravity-cyan/10 backdrop-blur-md border border-antigravity-cyan/20 text-antigravity-cyan text-sm font-bold tracking-widest uppercase mb-8 animate-slide-up shadow-glow">
                        Premium Travel Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-antigravity-white tracking-tight leading-[1.1] animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
                        Your Ride, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-antigravity-cyan via-blue-500 to-antigravity-violet animate-pulse-slow">Zero Gravity</span>
                    </h1>
                    <p className="text-lg md:text-2xl mb-12 text-antigravity-dust max-w-2xl mx-auto leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
                        Experience the future of travel with our premium fleet and curated tour packages.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <Button
                            href={getWhatsAppLink('Hi, I would like to explore car booking options.')}
                            variant="primary"
                            size="lg"
                            className="group px-10 py-4 text-lg"
                        >
                            Book a Ride <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            to="/packages"
                            variant="secondary"
                            size="lg"
                            className="px-10 py-4 text-lg"
                        >
                            View Packages
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-antigravity-cyan/50">
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-current rounded-full" />
                    </div>
                </div>
            </div>

            {/* Featured Cars Section */}
            <div className="py-32 bg-antigravity-deep relative">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-antigravity-cyan font-bold tracking-widest uppercase text-sm">Our Fleet</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-antigravity-white mt-4 mb-6">Premium Vehicles</h2>
                        <p className="text-antigravity-dust max-w-2xl mx-auto text-xl font-light">
                            Select your perfect ride from our exclusive collection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cars.slice(0, 3).map((car) => (
                            <Link key={car.id} to={`/cars/${car.id}`} className="group block h-full">
                                <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,212,255,0.1)] hover:border-antigravity-cyan/30">
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-antigravity-deep via-transparent to-transparent opacity-60 z-10" />
                                        <img
                                            src={car.coverImage}
                                            alt={car.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-antigravity-deep/80 backdrop-blur-md text-antigravity-cyan text-xs font-bold px-3 py-1.5 rounded-full border border-antigravity-cyan/20 uppercase tracking-wide">
                                                Premium
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col justify-between relative">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-antigravity-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-100" />

                                        <div>
                                            <h3 className="text-2xl font-heading font-bold mb-3 text-antigravity-white group-hover:text-antigravity-cyan transition-colors">{car.name}</h3>
                                            <p className="text-antigravity-dust mb-6 line-clamp-2 leading-relaxed">{car.description}</p>
                                        </div>
                                        <div className="flex items-center text-antigravity-cyan font-semibold mt-auto group/btn">
                                            <span className="border-b border-transparent group-hover/btn:border-antigravity-cyan transition-all">View Details</span>
                                            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button to="/cars" variant="outline" size="lg" className="group">
                            View All Cars <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Popular Packages Section */}
            <div className="py-32 bg-antigravity-deep relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-antigravity-violet font-bold tracking-widest uppercase text-xs px-2">Destinations</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-antigravity-white mb-6">Popular Tour Packages</h2>
                        <p className="text-antigravity-dust max-w-2xl mx-auto text-xl font-light">
                            Explore our handpicked tour packages for an unforgettable journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {packages.slice(0, 3).map((pkg) => (
                            <Link key={pkg.id} to={`/packages/${pkg.id}`} className="group block h-full">
                                <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)] hover:border-antigravity-violet/30">
                                    <div className="h-80 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-antigravity-deep via-transparent to-transparent z-10" />
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute bottom-6 left-6 z-20 text-white w-full pr-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="bg-antigravity-violet text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1 shadow-lg border border-antigravity-violet/20">
                                                    <Calendar size={12} /> {pkg.duration}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-heading font-bold mb-1 leading-tight text-white drop-shadow-md">{pkg.name}</h3>
                                            <p className="text-antigravity-cyan font-bold text-lg drop-shadow-sm">{pkg.price}</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col justify-between">
                                        <div>
                                            <p className="text-antigravity-dust mb-6 line-clamp-3 leading-relaxed">{pkg.description}</p>
                                        </div>
                                        <div className="flex items-center text-antigravity-violet font-semibold mt-auto pt-6 border-t border-white/5 group/btn">
                                            <span className="border-b border-transparent group-hover/btn:border-antigravity-violet transition-all">View Itinerary</span>
                                            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button to="/packages" variant="outline" size="lg" className="group">
                            View All Packages <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-32 bg-antigravity-deep relative border-t border-antigravity-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-antigravity-cyan font-bold tracking-widest uppercase text-sm">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-antigravity-white mt-4 mb-6">Why Choose Smruti Travels</h2>
                        <p className="text-antigravity-dust max-w-2xl mx-auto text-xl font-light">
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
                                className="glass-card p-10 hover:border-antigravity-cyan/30 hover:-translate-y-2 group transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-antigravity-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-100" />

                                <div className="w-16 h-16 bg-antigravity-cyan/10 rounded-2xl flex items-center justify-center mb-8 text-antigravity-cyan group-hover:bg-antigravity-cyan group-hover:text-antigravity-deep transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 text-antigravity-white">{feature.title}</h3>
                                <p className="text-antigravity-dust leading-relaxed text-lg font-light">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
