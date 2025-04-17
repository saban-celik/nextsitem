//C:\nextjs\nextsitem\frontend\src\api\backendApi.ts
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const fullUrl = `${BASE_URL}${endpoint}`;
  console.log('API isteği gönderilen URL:', fullUrl); // URL'yi konsola yazdır
  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await (response.ok ? response.json() : response.text());
    if (!response.ok) {
      const errorMessage = typeof data === 'string' ? data : data.error || `İstek başarısız (Durum: ${response.status})`;
      console.error(`Hata (${endpoint}): Durum Kodu: ${response.status}, Mesaj: ${errorMessage}`);
      throw new Error(errorMessage);
    }
    return data;
  } catch (error: any) {
    console.error(`Hata (${endpoint}):`, error.message);
    throw error;
  }
};

export const testBackendConnection = () => {
  return apiFetch('/test', { method: 'GET' });
};

export const signup = (username: string, email: string, password: string, full_name?: string) => {
  return apiFetch('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ username, email, password, full_name }),
  });
};

export const login = (username: string, password: string) => {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
};
