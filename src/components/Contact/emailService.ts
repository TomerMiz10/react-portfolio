import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/**
 * Email service that handles sending emails through EmailJS
 * This adds a layer of abstraction for better testing and maintainability
 */
class EmailService {
  // Initialize EmailJS with environment variables
  private init() {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!publicKey) {
      throw new Error("Missing EmailJS configuration");
    }
    
    emailjs.init(publicKey);
  }

  /**
   * Send an email using EmailJS
   * @param form - Form element containing the data to send
   * @returns Promise with the result from EmailJS
   */
  public async sendEmail(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    try {
      this.init();
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId) {
        throw new Error("Missing EmailJS configuration");
      }
      
      // Add current time to the form data
      const formData = new FormData(form);
      const currentTime = new Date().toLocaleString();
      formData.append('time', currentTime);
      
      // Convert FormData to object for EmailJS
      const templateParams = Object.fromEntries(formData);
      
      return await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
    } catch (error) {
      console.error('Email service error:', error);
      throw error;
    }
  }
}

// Exporting as singleton instance
export const emailService = new EmailService();
