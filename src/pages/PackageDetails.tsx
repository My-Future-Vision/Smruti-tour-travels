import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { Phone, MapPin, Calendar, Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

import ImageViewer from '../components/ImageViewer';

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
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold">Package not found</h2>
                <Link to="/packages" className="text-blue-600 hover:underline">Back to Packages</Link>
            </div>
        );
    }

    const displayImages = pkg.images ? pkg.images : [pkg.image];
    // Remove duplicates just in case
    const uniqueImages = [...new Set(displayImages)];

    const handleImageClick = () => {
        const index = uniqueImages.indexOf(selectedImage || pkg.image);
        setViewerIndex(index >= 0 ? index : 0);
        setIsViewerOpen(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/packages" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Packages
                </Link>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative">
                        <div
                            className="h-80 md:h-96 relative cursor-zoom-in group"
                            onClick={handleImageClick}
                        >
                            <img
                                src={selectedImage || pkg.image}
                                alt={pkg.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Click to View Gallery</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pointer-events-none">
                                <div className="p-8 text-white w-full">
                                    <h1 className="text-4xl font-bold mb-2">{pkg.name}</h1>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1"><Calendar size={18} /> {pkg.duration}</span>
                                        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">{pkg.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail Grid for Packages */}
                        {uniqueImages.length > 1 && (
                            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                {uniqueImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => { e.stopPropagation(); setSelectedImage(img); }}
                                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shadow-md ${selectedImage === img ? 'border-blue-600 ring-2 ring-blue-100 scale-110' : 'border-white/50 hover:border-white'}`}
                                    >
                                        <img src={img} alt={`${pkg.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {pkg.description}
                            </p>

                            <h3 className="text-xl font-bold mb-4 text-gray-900">Inclusions</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {pkg.inclusions.map((inc, idx) => (
                                    <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg text-blue-800">
                                        <Check size={20} className="mr-3 text-blue-600" />
                                        <span className="font-medium">{inc}</span>
                                    </div>
                                ))}
                            </div>

                            {pkg.itinerary && (
                                <div className="mt-8 border-t pt-8">
                                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Itinerary</h2>
                                    <div className="space-y-8">
                                        {pkg.itinerary.map((item, index) => (
                                            <div key={index} className="relative pl-8 sm:pl-32 py-2 group">
                                                {/* Timeline Line */}
                                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:mb-0">
                                                    <div className="flex-shrink-0 w-24 text-sm font-bold text-blue-600 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:top-2 sm:text-right sm:pr-8">
                                                        {item.day}
                                                    </div>

                                                    <div className="absolute left-2 sm:left-24 top-2 bottom-0 w-0.5 bg-gray-200 group-last:hidden"></div>
                                                    <div className="absolute left-[0.2rem] sm:left-[5.9rem] top-2.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10"></div>

                                                    <div className="flex-grow">
                                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                                        <ul className="space-y-1.5">
                                                            {item.places.map((place, pIndex) => (
                                                                <li key={pIndex} className="text-gray-600 flex items-start text-sm">
                                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
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

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-lg font-bold mb-4">Locations Covered</h3>
                                <ul className="space-y-3 mb-6">
                                    {pkg.locations.map((loc, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <MapPin size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                                            <span>{loc}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={getWhatsAppLink(`Hi, I am interested in the ${pkg.name} tour package. Please provide a quote and details.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    <MessageCircle size={20} /> Request on WhatsApp
                                </a>
                                <p className="text-xs text-center mt-3 text-gray-500">Call us to customize this package</p>
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
