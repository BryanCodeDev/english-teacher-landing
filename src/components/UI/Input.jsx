import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder,
  value,
  onChange,
  className = '',
  error,
  required = false,
  icon: Icon,
  ...props 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-4 py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            transition-all duration-200 outline-none
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

const TextArea = ({ 
  label, 
  placeholder,
  value,
  onChange,
  className = '',
  error,
  required = false,
  rows = 4,
  ...props 
}) => {
  const inputId = `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <textarea
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg border border-gray-300 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-200 outline-none resize-none
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export { Input as default, TextArea };