import axios from 'axios';
import type { PersonaGenerationRequest, PersonaGenerationResponse } from '@/types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generatePersonas = async (
  data: PersonaGenerationRequest
): Promise<PersonaGenerationResponse> => {
  const response = await api.post<PersonaGenerationResponse>('/generate-personas', data);
  return response.data;
};

export default api;

