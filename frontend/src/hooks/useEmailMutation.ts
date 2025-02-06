import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  body: string;
}

export const useEmailMutation = () => {
  return useMutation({
    mutationFn: async (data: EmailFormData) => {
      const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/send-email`, data);
      return response.data;
    },
  });
};
