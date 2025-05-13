import { useState, useRef } from 'react';
import { emailService } from './emailService';

export interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: boolean;
  message: string;
}

/**
 * Custom hook to handle contact form state and submission
 */
export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const resetForm = () => {
    setFormStatus(prev => ({ ...prev, submitted: false }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!formRef.current) return;
    
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: 'Sending message...'
    });

    try {
      // Send email using our service
      await emailService.sendEmail(formRef.current);
      
      const successMessage = import.meta.env.VITE_CONTACT_SUCCESS_MESSAGE || 
                             'Message sent successfully! I\'ll get back to you soon.';
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: successMessage
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      
      const errorMessage = import.meta.env.VITE_CONTACT_ERROR_MESSAGE || 
                           'Failed to send message. Please try again.';
      
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: errorMessage
      });
    }
  };

  return {
    formRef,
    formStatus,
    handleSubmit,
    resetForm
  };
};
