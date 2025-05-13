import React from 'react';

interface FormFieldProps {
  type: string;
  name: string;
  placeholder: string;
  disabled: boolean;
}

/**
 * Reusable form field component that supports both input and textarea
 */
const FormField: React.FC<FormFieldProps> = ({ 
  type, 
  name, 
  placeholder, 
  disabled 
}) => (
  <div className="input-box">
    {type === "textarea" ? (
      <textarea 
        required 
        name={name} 
        className="input-field-message"
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
      />
    ) : (
      <input 
        required 
        type={type}
        name={name} 
        className="input-field" 
        placeholder={placeholder} 
        disabled={disabled}
        aria-label={placeholder}
      />
    )}
  </div>
);

// Memoize the component to prevent unnecessary re-renders
export default React.memo(FormField);
