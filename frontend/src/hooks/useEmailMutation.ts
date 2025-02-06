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
      const response = await axios.post('/api/send-email', data);
      return response.data;
    },
  });
};
