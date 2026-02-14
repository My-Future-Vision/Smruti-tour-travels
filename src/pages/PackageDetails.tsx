import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { MapPin, Calendar, Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PackageDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const pkg = packages.find((p) => p.id === id);

    const [selectedImage, setSelectedImage] = React.useState<string>('');
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [viewerIndex, setViewerIndex] = React.useState(0);

    React.useEffect(() => {
        if (pkg) {
            setSelectedImage(pkg.image);
        }
    }, [pkg]);

    if (!pkg) {
        return (
            <div className="min-h-screen pt-32 text-center bg-gray-50/50">
                <div className="max-w-md mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Package not found</h2>
                    <Link to="/packages">
                        <Button variant="primary">Back to Packages</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const displayImages = pkg.images ? pkg.images : [pkg.image];
    const uniqueImages = [...new Set(displayImages)];

    const handleImageClick = () => {
        const index = uniqueImages.indexOf(selectedImage || pkg.image);
        setViewerIndex(index >= 0 ? index : 0);
        setIsViewerOpen(true);
    };

    return (
        <div className="bg-transparent min-h-screen py-24 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/packages" className="inline-flex items-center text-antigravity-dust hover:text-antigravity-cyan mb-8 transition-colors font-medium">
                    <ArrowLeft size={20} className="mr-2" /> Back to Packages
                </Link>

                <div className="bg-antigravity-nebula rounded-3xl shadow-lg border border-white/5 overflow-hidden animate-slide-up">
                    <div className="relative">
                        <div
                            className="h-80 md:h-[500px] relative cursor-zoom-in group"
                            onClick={handleImageClick}
                        >
                            <img
                                src={selectedImage || pkg.image}
                                alt={pkg.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 z-10">
                                <span className="text-antigravity-cyan bg-antigravity-deep/80 backdrop-blur-md border border-antigravity-cyan/30 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Gallery</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-antigravity-deep via-antigravity-deep/60 to-transparent flex items-end pointer-events-none">
                                <div className="p-8 md:p-12 text-white w-full">
                                    <div className="flex flex-wrap items-center gap-4 mb-3">
                                        <span className="flex items-center gap-2 bg-antigravity-violet/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-white/10 shadow-md"><Calendar size={16} /> {pkg.duration}</span>
                                        <span className="bg-antigravity-cyan text-antigravity-deep px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">{pkg.price}</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">{pkg.name}</h1>
                                </div>
                            </div>
                        </div>

                        {uniqueImages.length > 1 && (
                            <div className="absolute bottom-8 right-8 z-20 flex gap-3">
                                {uniqueImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => { e.stopPropagation(); setSelectedImage(img); }}
                                        className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-lg ${selectedImage === img ? 'border-antigravity-cyan ring-2 ring-antigravity-cyan/40 scale-110' : 'border-white/20 hover:border-white/50'}`}
                                    >
                                        <img src={img} alt={`${pkg.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
                        <div className="md:col-span-2 space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-antigravity-white flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-antigravity-cyan rounded-full"></span>Overview
                                </h2>
                                <p className="text-antigravity-dust text-lg leading-relaxed">{pkg.description}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-antigravity-white">Inclusions</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {pkg.inclusions.map((inc, idx) => (
                                        <div key={idx} className="flex items-center p-4 bg-antigravity-deep rounded-xl border border-white/5 hover:border-antigravity-cyan/20 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-antigravity-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                                                <Check size={16} className="text-antigravity-green" />
                                            </div>
                                            <span className="font-medium text-antigravity-white/90">{inc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {pkg.itinerary && (
                                <div className="border-t border-white/5 pt-10">
                                    <h2 className="text-2xl font-bold mb-8 text-antigravity-white flex items-center gap-3">
                                        <span className="w-1.5 h-8 bg-antigravity-cyan rounded-full"></span>Itinerary
                                    </h2>
                                    <div className="space-y-0">
                                        {pkg.itinerary.map((item, index) => (
                                            <div key={index} className="relative pl-8 sm:pl-32 py-4 group">
                                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:mb-0">
                                                    <div className="flex-shrink-0 w-24 text-sm font-bold text-antigravity-cyan mb-1 sm:mb-0 sm:absolute sm:left-0 sm:top-5 sm:text-right sm:pr-8">
                                                        {item.day}
                                                    </div>

                                                    <div className="absolute left-3.5 sm:left-[6.5rem] top-0 bottom-0 w-0.5 bg-white/5 group-last:hidden"></div>
                                                    <div className="absolute left-[0.45rem] sm:left-[6.1rem] top-5 w-6 h-6 rounded-full border-4 border-antigravity-deep bg-antigravity-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 transition-transform group-hover:scale-110"></div>

                                                    <div className="flex-grow bg-antigravity-deep rounded-2xl p-6 border border-white/5 hover:border-antigravity-cyan/20 hover:shadow-lg transition-all">
                                                        <h3 className="text-lg font-bold text-antigravity-white mb-3">{item.title}</h3>
                                                        <ul className="space-y-2">
                                                            {item.places.map((place, pIndex) => (
                                                                <li key={pIndex} className="text-antigravity-dust flex items-start text-sm">
                                                                    <span className="w-1.5 h-1.5 bg-antigravity-violet rounded-full mt-2 mr-2.5 flex-shrink-0"></span>
                                                                    {place}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-antigravity-deep p-8 rounded-3xl border border-white/5 shadow-lg sticky top-24">
                                <h3 className="text-lg font-bold mb-6 text-antigravity-white">Locations Covered</h3>
                                <ul className="space-y-4 mb-8">
                                    {pkg.locations.map((loc, idx) => (
                                        <li key={idx} className="flex items-start text-antigravity-dust">
                                            <MapPin size={20} className="text-antigravity-cyan mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="font-medium">{loc}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href={getWhatsAppLink(`Hi, I am interested in the ${pkg.name} tour package. Please provide a quote and details.`)}
                                    variant="primary"
                                    className="w-full justify-center py-4 text-base shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                                >
                                    <MessageCircle size={20} className="mr-2" /> Request Quote
                                </Button>
                                <p className="text-xs text-center mt-4 text-antigravity-dust/60">Call us to customize this package</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageViewer
                images={uniqueImages}
                initialIndex={viewerIndex}
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
            />
        </div>
    );
};

export default PackageDetails;
