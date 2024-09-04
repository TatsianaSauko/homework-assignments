import { mockFetch } from '../mocks/mockFetch';
import { AuthData } from '../types/types';

export const authenticateUser = async (data: AuthData): Promise<{ ok: boolean }> => {
  const response = await mockFetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};
