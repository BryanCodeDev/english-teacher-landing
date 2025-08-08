import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  gradient = false,
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : '';
  
  const backgroundClasses = glass 
    ? 'glass-effect' 
    : gradient 
    ? 'bg-gradient-to-br from-white to-gray-50' 
    : 'bg-white';
    
  const shadowClasses = 'shadow-lg';
  
  return (
    <div
      className={`${baseClasses} ${backgroundClasses} ${shadowClasses} ${hoverClasses} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;