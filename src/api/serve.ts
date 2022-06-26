import client from './client';

export const langcode = {
  version: async (): Promise<{ result: boolean; data: string }> => {
    const result = await client.get('/serve/langcode/v');
    if (result.result) {
      return { result: true, data: result.data };
    } else {
      return { result: false, data: '' };
    }
  },
  data: async (): Promise<{ result: boolean; data: Record<string, any> }> => {
    const result = await client.get('/serve/langcode/v');
    if (result.result) {
      return { result: true, data: result.data };
    } else {
      return { result: false, data: {} };
    }
  },
};
