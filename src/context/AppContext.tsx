import React, { createContext, useContext, useState, useCallback, useMemo, useEffect, ReactNode } from 'react';
import { CartItem, Product, Category, User, Order } from '../types';
import { api } from '../services/api';
import { products as staticProducts, categories as staticCategories } from '../data';

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (isOpen: boolean) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (isOpen: boolean) => void;
  isRobotVisible: boolean;
  robotMessage: string;
  triggerRobotConfirmation: (message?: string) => void;
  authModalType: 'signin' | 'signup' | null;
  setAuthModalType: (type: 'signin' | 'signup' | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  user: User | null;
  isAuthenticated: boolean;
  orders: Order[];

  // Dynamic products & categories
  products: Product[];
  categories: Category[];
  isLoadingProducts: boolean;
  isLoadingCategories: boolean;
  apiError: string | null;

  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (fields: Partial<User>) => void;
  addAddress: (address: import('../types').Address) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  fetchOrders: () => Promise<void>;
  placeOrder: (shippingDetails?: any) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isRobotVisible, setIsRobotVisible] = useState(false);
  const [robotMessage, setRobotMessage] = useState('');
  const [authModalType, setAuthModalType] = useState<'signin' | 'signup' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [orders, setOrders] = useState<Order[]>([]);

  // Products and Categories Dynamic States
  const [products, setProducts] = useState<Product[]>(staticProducts);
  const [categories, setCategories] = useState<Category[]>(staticCategories);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Fetch dynamic products and categories on mount
  useEffect(() => {
    const loadInitialData = async () => {
      setApiError(null);
      let hasError = false;

      setIsLoadingProducts(true);
      try {
        console.log('[AppContext] Starting fetch for products...');
        const fetchedProducts = await api.getProducts();
        console.log('[AppContext] Products fetch success:', fetchedProducts);
        if (fetchedProducts && fetchedProducts.length > 0) {
          setProducts(fetchedProducts);
        }
      } catch (err) {
        console.error('[AppContext] Failed to fetch products from API:', err);
        hasError = true;
      } finally {
        setIsLoadingProducts(false);
      }

      setIsLoadingCategories(true);
      try {
        console.log('[AppContext] Starting fetch for categories...');
        const fetchedCategories = await api.getCategories();
        console.log('[AppContext] Categories fetch success:', fetchedCategories);
        if (fetchedCategories && fetchedCategories.length > 0) {
          setCategories(fetchedCategories);
        }
      } catch (err) {
        console.error('[AppContext] Failed to fetch categories from API:', err);
        hasError = true;
      } finally {
        setIsLoadingCategories(false);
      }

      if (hasError) {
        setApiError('Unable to connect to the backend. Showing local data as fallback.');
      }
    };

    loadInitialData();
  }, []);

  // Sync cart in local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Load authenticated user cart and orders
  useEffect(() => {
    if (user && localStorage.getItem('token')) {
      const username = user.email || (user as any).username || '';
      
      api.getCart(username)
        .then(serverCart => {
          if (serverCart && serverCart.length > 0) {
            // Resolve full product details (e.g. description, rating, image) from products array
            const resolvedCart = serverCart.map(item => {
              const productDetail = products.find(p => p.id === item.id);
              if (productDetail) {
                return {
                  ...productDetail,
                  ...item,
                  image: item.image || productDetail.image // Fallback to details image if server cart is simple list
                };
              }
              return item;
            });
            setCart(resolvedCart);
          }
        })
        .catch(err => console.error('Error fetching cart on init:', err));

      api.getOrders(username, products)
        .then(setOrders)
        .catch(err => console.error('Error fetching orders on init:', err));
    } else {
      setOrders([]);
    }
  }, [user, products]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const isAuthenticated = useMemo(() => {
    return !!user && !!localStorage.getItem('token');
  }, [user]);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => setIsDarkMode(prev => !prev), []);

  const login = useCallback(async (userData: User, token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setAuthModalType(null);

    const username = userData.email || (userData as any).username || '';

    // Sync any local cart items to the server
    try {
      const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (localCart.length > 0) {
        for (const item of localCart) {
          await api.addToCart(username, item.id, item.quantity);
        }
      }
      const serverCart = await api.getCart(username);
      const resolvedCart = serverCart.map(item => {
        const productDetail = products.find(p => p.id === item.id);
        return productDetail ? { ...productDetail, ...item, image: item.image || productDetail.image } : item;
      });
      setCart(resolvedCart);
    } catch (err) {
      console.error('Error syncing cart upon login:', err);
    }

    // Load orders
    try {
      const serverOrders = await api.getOrders(username, products);
      setOrders(serverOrders);
    } catch (err) {
      console.error('Error loading orders upon login:', err);
    }
  }, [products]);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setOrders([]);
    setIsProfileOpen(false);
    setCart([]);
  }, []);

  const updateUser = useCallback((fields: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...fields };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const addAddress = useCallback((address: import('../types').Address) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = {
        ...prev,
        addresses: address.isDefault
          ? prev.addresses.map(a => ({ ...a, isDefault: false })).concat(address)
          : [...prev.addresses, address]
      };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeAddress = useCallback((id: string) => {
    setUser(prev => {
      if (!prev) return null;
      const remaining = prev.addresses.filter(a => a.id !== id);
      const updated = {
        ...prev,
        addresses: remaining.length > 0 && remaining.every(a => !a.isDefault)
          ? [{ ...remaining[0], isDefault: true }, ...remaining.slice(1)]
          : remaining
      };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const setDefaultAddress = useCallback((id: string) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = {
        ...prev,
        addresses: prev.addresses.map(a => ({ ...a, isDefault: a.id === id }))
      };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const fetchOrders = useCallback(async () => {
    if (user && localStorage.getItem('token')) {
      try {
        const username = user.email || (user as any).username || '';
        const serverOrders = await api.getOrders(username, products);
        setOrders(serverOrders);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    }
  }, [user, products]);

  const placeOrder = useCallback(async (shippingDetails?: any) => {
    const activeUser = user || JSON.parse(localStorage.getItem('user') || 'null');
    const token = localStorage.getItem('token');
    
    if (activeUser && token) {
      try {
        const payload = {
          items: cart.map(item => ({ product_id: item.id, quantity: item.quantity })),
          total_price: cartTotal,
          shipping_details: shippingDetails || {
            name: activeUser.name,
            phone: activeUser.phone,
            address: activeUser.addresses?.find((a: any) => a.isDefault)?.street || 'Default Address'
          }
        };
        const username = activeUser.email || activeUser.username || '';
        await api.checkout(username, payload);
        await fetchOrders();
        return;
      } catch (err) {
        console.warn('Failed to place order on backend API, performing local fallback simulation:', err);
      }
    }

    // Local checkout fallback simulation
    if (!activeUser) return;
    const newOrder: Order = {
      id: `ORD${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'processing',
      total: cartTotal,
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      trackingId: `TRK${Math.floor(100000000 + Math.random() * 900000000)}`
    };
    setOrders(prev => {
      const updated = [newOrder, ...prev];
      localStorage.setItem(`orders_${activeUser.email}`, JSON.stringify(updated));
      return updated;
    });
  }, [user, cart, cartTotal, fetchOrders]);

  const triggerRobotConfirmation = useCallback((message: string = 'Added to Cart!') => {
    setRobotMessage(message);
    setIsRobotVisible(true);
    setTimeout(() => setIsRobotVisible(false), 2500);
  }, []);

  const addToCart = useCallback((product: Product) => {
    if (!user) {
      setAuthModalType('signin');
      return;
    }

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      let updated;
      if (existing) {
        updated = prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        updated = [...prev, { ...product, quantity: 1 }];
      }

      if (user && localStorage.getItem('token')) {
        const targetQty = existing ? existing.quantity + 1 : 1;
        const username = user.email || (user as any).username || '';
        api.addToCart(username, product.id, targetQty).catch(err => console.error('Error adding to server cart:', err));
      }

      return updated;
    });
    triggerRobotConfirmation(`${product.name} Added!`);
  }, [triggerRobotConfirmation, user]);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => {
      const updated = prev.filter(item => item.id !== productId);
      if (user && localStorage.getItem('token')) {
        api.removeFromCart(productId).catch(err => console.error('Error removing from server cart:', err));
      }
      return updated;
    });
  }, [user]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => {
      const updated = prev.map(item => item.id === productId ? { ...item, quantity } : item);
      if (user && localStorage.getItem('token')) {
        const username = user.email || (user as any).username || '';
        api.addToCart(username, productId, quantity).catch(err => console.error('Error updating server cart quantity:', err));
      }
      return updated;
    });
  }, [user]);

  const clearCart = useCallback(() => setCart([]), []);

  const contextValue = useMemo(() => ({
    cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount,
    isCartOpen, setIsCartOpen,
    isSearchOpen, setIsSearchOpen,
    isCheckoutOpen, setIsCheckoutOpen,
    isProfileOpen, setIsProfileOpen,
    isRobotVisible, robotMessage, triggerRobotConfirmation,
    authModalType, setAuthModalType,
    selectedCategory, setSelectedCategory,
    isDarkMode, toggleDarkMode,
    user, isAuthenticated, orders,
    products, categories, isLoadingProducts, isLoadingCategories, apiError,
    login, logout, updateUser,
    addAddress, removeAddress, setDefaultAddress,
    fetchOrders, placeOrder
  }), [
    cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount,
    isCartOpen, setIsCartOpen,
    isSearchOpen, setIsSearchOpen,
    isCheckoutOpen, setIsCheckoutOpen,
    isProfileOpen, setIsProfileOpen,
    isRobotVisible, robotMessage, triggerRobotConfirmation,
    authModalType, setAuthModalType,
    selectedCategory, setSelectedCategory,
    isDarkMode, toggleDarkMode,
    user, isAuthenticated, orders,
    products, categories, isLoadingProducts, isLoadingCategories, apiError,
    login, logout, updateUser,
    addAddress, removeAddress, setDefaultAddress,
    fetchOrders, placeOrder
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
