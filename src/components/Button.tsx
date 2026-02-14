import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    to?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    to,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-antigravity-cyan to-antigravity-violet text-white font-bold shadow-glow hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] border-0 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95",
        secondary: "bg-transparent text-antigravity-cyan border border-antigravity-cyan/50 hover:border-antigravity-cyan hover:bg-antigravity-cyan/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
        outline: "border-2 border-antigravity-cyan text-antigravity-cyan hover:bg-antigravity-cyan/10",
        ghost: "text-antigravity-dust hover:text-antigravity-cyan hover:bg-antigravity-cyan/5",
        glass: "backdrop-blur-xl bg-antigravity-white/10 border border-antigravity-white/10 text-antigravity-white hover:bg-antigravity-white/20 shadow-lg"
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
