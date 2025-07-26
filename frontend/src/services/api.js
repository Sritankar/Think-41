import axios from 'axios';

// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Chatbot API calls
export const chatbotAPI = {
  // Send query to chatbot
  sendQuery: async (message) => {
    try {
      const response = await api.post('/chatbot/query', { message });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to send message');
    }
  },

  // Get help information
  getHelp: async () => {
    try {
      const response = await api.get('/chatbot/help');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get help');
    }
  },

  // Get query suggestions
  getSuggestions: async () => {
    try {
      const response = await api.get('/chatbot/suggestions');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get suggestions');
    }
  },
};

// Products API calls
export const productsAPI = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },

  // Get top selling products
  getTopProducts: async (limit = 5) => {
    try {
      const response = await api.get(`/products/top/${limit}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch top products');
    }
  },

  // Search products
  searchProducts: async (query) => {
    try {
      const response = await api.get(`/products/search/${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search products');
    }
  },

  // Check product stock
  checkStock: async (productName) => {
    try {
      const response = await api.get(`/products/stock/${encodeURIComponent(productName)}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to check stock');
    }
  },
};

// Orders API calls
export const ordersAPI = {
  // Get all orders
  getAllOrders: async () => {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch orders');
    }
  },

  // Get order by ID
  getOrderById: async (id) => {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch order');
    }
  },

  // Get tracking information
  getTrackingInfo: async (id) => {
    try {
      const response = await api.get(`/orders/${id}/track`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get tracking info');
    }
  },
};

// Health check
export const healthAPI = {
  checkHealth: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      throw new Error('API is not available');
    }
  },
};

export default api;