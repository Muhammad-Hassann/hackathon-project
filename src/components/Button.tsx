import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ children, bgColor, className }) => {
  return (
    <div
      className={`px-7 py-3 text-sm rounded-full bg-primary-yellow w-max text-white ${bgColor || ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Button;