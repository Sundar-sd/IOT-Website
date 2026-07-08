import { Product, Category, CartItem, Order, User } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE || '';

// Helper to construct endpoint URLs
const getUrl = (endpoint: string) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return API_BASE ? `${API_BASE}/${cleanEndpoint}` : `/${cleanEndpoint}`;
};

// Helper for fetch requests with authorization token injected
const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const headers = new Headers(options.headers || {});

  headers.set('ngrok-skip-browser-warning', '69420');

  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(getUrl(endpoint), {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = 'An error occurred';
    try {
      const errData = await response.json();
      errorMsg = errData.message || errData.error || JSON.stringify(errData);
    } catch {
      errorMsg = `HTTP Error ${response.status}: ${response.statusText}`;
    }
    throw new Error(errorMsg);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

// Map backend product data to Frontend Product interface
const mapProduct = (p: any): Product => {
  let imgUrl = p.image || '';
  if (imgUrl) {
    imgUrl = imgUrl.startsWith('http') ? imgUrl : `${API_BASE}${imgUrl}`;
  }

  return {
    id: String(p.id),
    name: p.name,
    description: p.description || 'Premium quality electronic component.',
    price: Number(p.price || 0),
    oldPrice: p.oldPrice ? Number(p.oldPrice) : (p.discount ? Number(p.price) + Number(p.discount) : undefined),
    badge: p.stock_type === 'new' ? 'New' : (p.discount && Number(p.discount) > 0 ? 'Sale' : undefined),
    rating: Number(p.rating || 4.5),
    category: p.category_name || p.category || '',
    image: imgUrl || 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80',
  };
};

// Map backend category data to Frontend Category interface
const mapCategory = (c: any): Category => {
  let imgUrl = c.image || '';
  if (imgUrl) {
    imgUrl = imgUrl.startsWith('http') ? imgUrl : `${API_BASE}${imgUrl}`;
  } else {
    // Fallback to local category images based on name keywords
    const name = (c.name || '').toLowerCase();
    if (name.includes('arduino')) {
      imgUrl = '/images/arduino.png';
    } else if (name.includes('sensor')) {
      imgUrl = '/images/display.png';
    } else if (name.includes('motor')) {
      imgUrl = '/images/motor.png';
    } else if (name.includes('display') || name.includes('lcd')) {
      imgUrl = '/images/display.png';
    } else if (name.includes('power') || name.includes('battery')) {
      imgUrl = '/images/power-supply.png';
    } else if (name.includes('robot') || name.includes('kit') || name.includes('drone')) {
      imgUrl = '/images/robotics-kit.png';
    } else if (name.includes('pi') || name.includes('raspberry')) {
      imgUrl = '/images/raspberry-pi.png';
    } else {
      imgUrl = `https://placehold.co/500x500/1e293b/ffffff?text=${encodeURIComponent(c.name)}`;
    }
  }

  return {
    id: String(c.id),
    name: c.name,
    image: imgUrl,
  };
};


export const api = {
  // Authentication
  async login(payload: any): Promise<{ token: string; user: User }> {
    const data = await apiFetch('api/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: payload.username || payload.email,
        password: payload.password,
      }),
    });

    const token = data.token || data.key || data.token_key || payload.email;
    const userObj = data.user || data.profile || {
      id: payload.email,
      name: payload.name || payload.email.split('@')[0],
      email: payload.email,
      phone: payload.phone || '',
      memberSince: new Date().toISOString(),
      addresses: [],
    };

    return { token, user: userObj };
  },

  async register(payload: any): Promise<{ token: string; user: User }> {
    const data = await apiFetch('api/register/', {
      method: 'POST',
      body: JSON.stringify({
        username: payload.email,
        email: payload.email,
        name: payload.name,
        phone: payload.phone,
        password: payload.password,
      }),
    });

    const token = data.token || data.key || payload.email;
    const userObj = data.user || data.profile || {
      id: payload.email,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      memberSince: new Date().toISOString(),
      addresses: [],
    };

    return { token, user: userObj };
  },

  async forgotPassword(payload: { phone?: string; email?: string }): Promise<any> {
    return apiFetch('api/forgot-password/', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async verifyOtp(payload: { otp: string; phone?: string; email?: string }): Promise<any> {
    return apiFetch('api/verify-otp/', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async resetPassword(payload: { password?: string; new_password?: string; otp: string }): Promise<any> {
    return apiFetch('api/reset-password/', {
      method: 'POST',
      body: JSON.stringify({
        password: payload.password || payload.new_password,
        otp: payload.otp,
      }),
    });
  },

  // Products
  async getProducts(): Promise<Product[]> {
    const data = await apiFetch('api/products/');
    const productsList = Array.isArray(data) ? data : data.results || [];
    return productsList.map(mapProduct);
  },

  async getNewProducts(): Promise<Product[]> {
    const data = await apiFetch('api/products/new/');
    const productsList = Array.isArray(data) ? data : data.results || [];
    return productsList.map(mapProduct);
  },

  async getOldProducts(): Promise<Product[]> {
    const data = await apiFetch('api/products/old/');
    const productsList = Array.isArray(data) ? data : data.results || [];
    return productsList.map(mapProduct);
  },

  async getOfferProducts(): Promise<Product[]> {
    const data = await apiFetch('api/products/offers/');
    const productsList = Array.isArray(data) ? data : data.results || [];
    return productsList.map(mapProduct);
  },

  // Categories
  async getCategories(): Promise<Category[]> {
    const data = await apiFetch('api/categories/');
    const categoriesList = Array.isArray(data) ? data : data.results || [];
    return categoriesList.map(mapCategory);
  },

  // Cart
  async getCart(username: string): Promise<CartItem[]> {
    const data = await apiFetch('api/cart/view/', {
      method: 'POST',
      body: JSON.stringify({ username })
    });
    
    let items = [];
    if (Array.isArray(data)) {
      items = data;
    } else if (data && Array.isArray(data.items)) {
      items = data.items;
    } else if (data && Array.isArray(data.cart_items)) {
      items = data.cart_items;
    } else if (data && typeof data === 'object') {
      items = data.cart || [];
    }

    return items.map((item: any) => {
      const product = item.product || item;
      return {
        id: String(product.id || product.product_id || item.product_id || item.id),
        name: product.name,
        description: product.description || '',
        price: Number(product.price || product.base_price || 0),
        oldPrice: product.oldPrice ? Number(product.oldPrice) : undefined,
        badge: product.badge,
        rating: Number(product.rating || 5.0),
        category: product.category || product.category_name || '',
        image: product.image 
          ? (product.image.startsWith('http') ? product.image : `${API_BASE}${product.image}`) 
          : '',
        quantity: Number(item.quantity || 1),
      };
    });
  },

  async addToCart(username: string, productId: string, quantity: number): Promise<any> {
    return apiFetch('api/cart/add/', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        product_id: productId,
        quantity: quantity,
      }),
    });
  },

  async removeFromCart(productId: string): Promise<any> {
    return apiFetch(`api/cart/remove/${productId}/`, {
      method: 'DELETE',
    });
  },

  // Checkout & Orders
  async checkout(username: string, payload: any): Promise<any> {
    return apiFetch('api/checkout/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        ...payload
      }),
    });
  },

  async getOrders(username: string, products: Product[] = []): Promise<Order[]> {
    const data = await apiFetch('api/orders/', {
      method: 'POST',
      body: JSON.stringify({ username })
    });
    const ordersList = (data && Array.isArray(data.orders)) 
      ? data.orders 
      : (Array.isArray(data) ? data : data.results || []);

    return ordersList.map((order: any) => ({
      id: String(order.id || order.order_id || `ORD${Math.floor(100000 + Math.random() * 900000)}`),
      date: order.date || order.created_at || new Date().toLocaleDateString('en-IN'),
      total: Number(order.total || order.total_price || order.final_amount || 0),
      status: order.status || 'processing',
      items: (order.items || order.order_items || []).map((item: any) => {
        const pName = item.name || item.product_name || (item.product && item.product.name) || '';
        const matchingProduct = products.find(p => p.name.toLowerCase() === pName.toLowerCase());
        return {
          name: pName,
          quantity: Number(item.quantity || 1),
          price: Number(item.price || item.price_paid || (item.product && item.product.price) || 0),
          image: item.image || (item.product && item.product.image) || matchingProduct?.image || 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80',
        };
      }),
      trackingId: order.trackingId || order.tracking_number || `TRK${Math.floor(100000000 + Math.random() * 900000000)}`,
    }));
  },
};
