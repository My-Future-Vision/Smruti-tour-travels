import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerProps {
    images: string[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, initialIndex, isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
    }, [isOpen, onClose, handleNext, handlePrev]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            >
                <X size={32} />
            </button>

            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="absolute left-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <ChevronRight size={48} />
                    </button>
                </>
            )}

            <div className="max-w-[90vw] max-h-[90vh] relative">
                <img
                    src={images[currentIndex]}
                    alt={`View ${currentIndex + 1}`}
                    className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;
