import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

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
            <div className="min-h-screen pt-32 text-center bg-gray-50/50">
                <div className="max-w-md mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Car not found</h2>
                    <Link to="/cars">
                        <Button variant="primary">Back to Fleet</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const displayImages = car.images ? [car.image, ...car.images] : [car.image];
    const uniqueImages = [...new Set(displayImages)];

    const handleImageClick = () => {
        const index = uniqueImages.indexOf(selectedImage || car.image);
        setViewerIndex(index >= 0 ? index : 0);
        setIsViewerOpen(true);
    };

    return (
        <div className="bg-transparent min-h-screen py-24 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/cars" className="inline-flex items-center text-antigravity-dust hover:text-antigravity-cyan mb-8 transition-colors font-medium">
                    <ArrowLeft size={20} className="mr-2" /> Back to Fleet
                </Link>

                <div className="bg-antigravity-nebula rounded-3xl shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white/5 animate-slide-up transition-all duration-500">
                    <div className="p-6 lg:p-8 space-y-4">
                        <div
                            className="h-64 md:h-96 overflow-hidden rounded-2xl cursor-zoom-in group relative shadow-md border border-white/5"
                            onClick={handleImageClick}
                        >
                            <img
                                src={selectedImage || car.image}
                                alt={car.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                <span className="text-antigravity-cyan bg-antigravity-deep/80 backdrop-blur-md border border-antigravity-cyan/30 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Gallery</span>
                            </div>
                        </div>
                        {uniqueImages.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {uniqueImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`h-20 lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === img ? 'border-antigravity-cyan ring-2 ring-antigravity-cyan/20 scale-95' : 'border-transparent hover:border-white/20'}`}
                                    >
                                        <img src={img} alt={`${car.name} view ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-6 lg:p-10 flex flex-col justify-center bg-antigravity-nebula">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-4xl font-bold text-antigravity-white mb-2">{car.name}</h1>
                                <span className="inline-block bg-antigravity-deep text-antigravity-cyan px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase border border-antigravity-cyan/20">
                                    {car.type}
                                </span>
                            </div>
                            <div className="text-right">
                                <p className="text-4xl font-bold text-antigravity-cyan">₹{car.pricePerKm}</p>
                                <p className="text-sm text-antigravity-dust font-medium mt-1">per/km</p>
                            </div>
                        </div>

                        <p className="text-antigravity-dust mb-8 text-lg leading-relaxed">{car.description}</p>

                        <div className="mb-10 bg-antigravity-deep/50 rounded-2xl p-6 border border-white/5">
                            <h3 className="font-bold text-antigravity-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-antigravity-cyan rounded-full"></span>
                                Key Features
                            </h3>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                                {car.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-antigravity-dust font-medium">
                                        <CheckCircle size={18} className="text-antigravity-violet mr-2.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto space-y-4">
                            <Button
                                href={getWhatsAppLink(`Hi, I am interested in booking the ${car.name}. Please provide availability and details.`)}
                                variant="primary"
                                className="w-full justify-center text-lg py-4 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                            >
                                <MessageCircle size={24} className="mr-2" /> Book via WhatsApp
                            </Button>
                            <p className="text-xs text-center text-antigravity-dust/60">
                                * Minimum km/day limits may apply. Contact for final quote.
                            </p>
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

export default CarDetails;
