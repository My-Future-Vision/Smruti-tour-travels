import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Phone, CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';


import ImageViewer from '../components/ImageViewer';

const CarDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const car = cars.find((c) => c.id === id);

    const [selectedImage, setSelectedImage] = React.useState<string>('');
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [viewerIndex, setViewerIndex] = React.useState(0);

    React.useEffect(() => {
        if (car) {
            setSelectedImage(car.image);
        }
    }, [car]);

    if (!car) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold">Car not found</h2>
                <Link to="/cars" className="text-blue-600 hover:underline">Back to Fleet</Link>
            </div>
        );
    }

    const displayImages = car.images ? [car.image, ...car.images] : [car.image];
    // Remove duplicates just in case
    const uniqueImages = [...new Set(displayImages)];

    const handleImageClick = () => {
        // Find index of currently selected image
        const index = uniqueImages.indexOf(selectedImage || car.image);
        setViewerIndex(index >= 0 ? index : 0);
        setIsViewerOpen(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/cars" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Fleet
                </Link>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4">
                        <div
                            className="h-64 md:h-80 overflow-hidden rounded-xl mb-4 cursor-zoom-in group relative"
                            onClick={handleImageClick}
                        >
                            <img
                                src={selectedImage || car.image}
                                alt={car.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">Click to View</span>
                            </div>
                        </div>
                        {uniqueImages.length > 1 && (
                            <div className="grid grid-cols-4 gap-2">
                                {uniqueImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent hover:border-gray-300'}`}
                                    >
                                        <img src={img} alt={`${car.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-8">
                        {/* ... Existing Content ... */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
                                <p className="text-gray-500">{car.type}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-blue-600">₹{car.pricePerKm}</p>
                                <p className="text-sm text-gray-500">per km</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 text-lg">{car.description}</p>

                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                            <ul className="grid grid-cols-2 gap-3">
                                {car.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={getWhatsAppLink(`Hi, I am interested in booking the ${car.name}. Please provide availability and details.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle size={20} /> Book on WhatsApp
                            </a>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            * Minimum km/day limits may apply. Contact for final quote.
                        </p>
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

export default CarDetails;
