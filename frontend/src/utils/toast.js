import toast from 'not-a-toast';
import 'not-a-toast/style.css';

/**
 * Reusable wrapper for not-a-toast
 * Applies the application's global dark/orange theme by default.
 */
export const customToast = {
  success: (message) => {
    return toast({
      message,
      iconType: 'success',
      background: '#1f2937', // bg-dark-800
      color: '#f97316', // text-primary-500
      border: '1px solid #374151', // border-dark-700
      duration: 3500,
    });
  },

  error: (message) => {
    return toast({
      message,
      iconType: 'error',
      background: '#1f2937', // bg-dark-800
      color: '#f87171', // text-red-400
      border: '1px solid #374151', // border-dark-700
      duration: 4000,
    });
  },

  info: (message) => {
    return toast({
      message,
      iconType: 'info',
      background: '#1f2937', 
      color: '#60a5fa', // text-blue-400
      border: '1px solid #374151', 
      duration: 3500,
    });
  }
};
