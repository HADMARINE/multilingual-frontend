import client from './client';

export const login = async (params: {
  userid: string;
  password: string;
}): Promise<{
  result: boolean;
  reason?: string;
}> => {
  const result = await client.post('/auth/login', params);
  if (result.result) {
    return { result: true };
  } else {
    return { result: false, reason: result.code };
  }
};

export const register = async (params: {
  userid: string;
  password: string;
  email: string;
  preferredLanguage: string[];
}): Promise<{ result: boolean; reason?: string }> => {
  const result = await client.post('/user', params);
  if (result.result) {
    return { result: true };
  } else {
    return { result: false, reason: result.code };
  }
};
