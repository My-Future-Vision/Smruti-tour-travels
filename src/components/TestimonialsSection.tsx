import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';
import Button from './Button';

const testimonials = [
    { id: '80YwyvdRbZc', title: 'Customer Review 1' },
    { id: 'Li142azKRFQ', title: 'Customer Review 2' },
    { id: 'ggwE7dxknB4', title: 'Customer Review 3' },
    { id: '6yxVPw9xF3Y', title: 'Customer Review 4' },
    { id: 'j3vFEuObB-0', title: 'Customer Review 5' },
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className="py-24 bg-antigravity-deep relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-antigravity-deep via-antigravity-deep to-black opacity-80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-antigravity-cyan font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-antigravity-white mt-4 mb-6">Happy Clients</h2>
                    <p className="text-antigravity-dust max-w-2xl mx-auto text-xl font-light">
                        Hear from our satisfied customers about their travel experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((video) => (
                        <div key={video.id} className="glass-card overflow-hidden group hover:border-antigravity-cyan/30 transition-all duration-300">
                            <div className="relative pt-[56.25%] bg-black/50">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                    {/* Call to action card for more videos */}
                    <div className="glass-card p-8 flex flex-col items-center justify-center text-center group hover:border-antigravity-cyan/30 transition-all duration-300 min-h-[300px]">
                        <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                            <Youtube size={32} className="text-red-500" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-antigravity-white mb-2">Watch More</h3>
                        <p className="text-antigravity-dust mb-6">Visit our YouTube channel for more travel stories and updates.</p>
                        <Button
                            href="https://www.youtube.com/@SatyaPatro-e9l/videos"
                            variant="outline"
                            className="group/btn"
                        >
                            Visit Channel <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
