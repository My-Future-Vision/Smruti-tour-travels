import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';

const Testimonials: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-antigravity-deep">
            <div className="py-12 bg-antigravity-deep relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-antigravity-cyan/5 blur-3xl opacity-30"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-antigravity-violet/5 blur-3xl opacity-30"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-antigravity-white mb-6 animate-slide-up">
                        What Our Clients Say
                    </h1>
                    <p className="text-xl text-antigravity-dust max-w-3xl mx-auto font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Trusted by travelers for our premium service, reliability, and comfort.
                    </p>
                </div>
            </div>
            <TestimonialsSection />
        </div>
    );
};

export default Testimonials;
