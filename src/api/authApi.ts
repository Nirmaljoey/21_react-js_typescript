import axios from 'axios';
import { LoginCredentials, AuthTokens, BaseApiResponse } from './types';
import { handleApiError } from './apiUtils';

// Use relative path for Vite proxy
const API_BASE_URL = '/api';

// Login API
export const loginUser = async (credentials: LoginCredentials) => {
  try {
    const requestUrl = `${API_BASE_URL}/auth/users/tokens`;
    console.log('🚀 Sending login request to:', requestUrl);

    const response = await axios.post<BaseApiResponse & { data: AuthTokens | null }>(
      requestUrl,
      credentials,
      { withCredentials: true }  // Ensure server supports credentials
    );

    if (response.data.success && response.data.data?.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token);
      console.log('🔑 Access token stored successfully.');
    }

    return response.data;
  } catch (error) {
    console.error('❌ Login error:', error);
    throw handleApiError(error, 'Login failed');
  }
};

// Logout API
export const logoutUser = () => {
  console.log('🔓 Logging out user and removing access token.');
  localStorage.removeItem('access_token');
};
