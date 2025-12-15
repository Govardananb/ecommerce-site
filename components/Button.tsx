import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
        secondary: "border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} aria-disabled={disabled} tabIndex={disabled ? -1 : undefined}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
