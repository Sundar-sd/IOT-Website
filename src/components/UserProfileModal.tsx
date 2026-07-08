import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Package, Truck, CheckCircle, User, LogOut, Settings, Clock,
  Mail, Phone, MapPin, Plus, Edit3, Trash2, Star, Heart, Shield,
  Bell, Moon, Sun, Lock, ChevronRight, Camera, Award, MapPinPlus,
  CreditCard, Gift
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { Order, Address } from '../types';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300, mass: 0.8 }
  },
  exit: { opacity: 0, scale: 0.96, y: 30, transition: { duration: 0.2 } }
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 }
  }
};

const tabLabels = ['Orders', 'Profile', 'Addresses', 'Wishlist', 'Settings'] as const;
type Tab = typeof tabLabels[number];

/* ─── Orders Tab ─── */

const getStatusStep = (status: string) => {
  switch (status) {
    case 'processing': return 1;
    case 'shipping': return 2;
    case 'delivered': return 3;
    default: return 0;
  }
};

const OrderTimeline = React.memo(({ status }: { status: string }) => {
  const step = getStatusStep(status);
  return (
    <div className="relative mt-4 mb-1">
      <div className="order-progress-line bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
          style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
        />
      </div>
      <div className="relative z-10 flex justify-between">
        {[
          { icon: Package, label: 'Processing', step: 1 },
          { icon: Truck, label: 'Shipping', step: 2 },
          { icon: CheckCircle, label: 'Delivered', step: 3 }
        ].map(({ icon: Icon, label, step: s }) => (
          <div key={label} className="flex flex-col items-center">
            <div className={`order-step-dot ${step >= s ? 'bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
              <Icon size={15} />
            </div>
            <span className={`text-[10px] font-bold mt-2 ${step >= s ? 'text-slate-800 dark:text-white' : 'text-slate-400'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

const OrderCard = React.memo(({ order }: { order: Order }) => (
  <motion.div
    variants={fadeSlideUp}
    className="gpu-layer bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          {order.id}
          {order.trackingId && (
            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              Track: {order.trackingId}
            </span>
          )}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{order.date}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-blue-600 dark:text-blue-400">₹{order.total.toLocaleString()}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-3">
      {order.items.map((item, i) => (
        <span key={i} className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg">
          {item.quantity}× {item.name}
        </span>
      ))}
    </div>

    <OrderTimeline status={order.status} />
  </motion.div>
));

const OrdersTab = React.memo(({ orders }: { orders: Order[] }) => {
  const sortedOrders = useMemo(() => [...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [orders]);

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Package size={48} className="text-slate-300 dark:text-slate-700 mb-4" />
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">No orders yet</p>
        <p className="text-sm text-slate-400">Your order history will appear here.</p>
      </div>
    );
  }

  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-slate-400 font-medium">{orders.length} total order{orders.length > 1 ? 's' : ''}</p>
      </div>
      {sortedOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </motion.div>
  );
});

/* ─── Profile Tab ─── */

const ProfileTab = React.memo(() => {
  const { user, updateUser } = useAppContext();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '', bio: '' });

  const handleSave = () => {
    updateUser({ name: form.name, email: form.email, phone: form.phone });
    setEditing(false);
  };

  if (!user) return null;

  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h4>
        <button
          onClick={() => editing ? handleSave() : setEditing(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
        >
          {editing ? <CheckCircle size={16} /> : <Edit3 size={16} />}
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Full Name', value: form.name, key: 'name', icon: User },
          { label: 'Email', value: form.email, key: 'email', icon: Mail },
          { label: 'Phone', value: form.phone, key: 'phone', icon: Phone },
          { label: 'Member Since', value: new Date(user.memberSince).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), key: 'member', icon: Clock }
        ].map(({ label, value, key, icon: Icon }) => (
          <motion.div key={key} variants={fadeSlideUp} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-medium text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Icon size={12} /> {label}
            </p>
            {editing && key !== 'member' ? (
              <input
                value={form[key as 'name' | 'email' | 'phone']}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

/* ─── Addresses Tab ─── */

const AddressCard = React.memo(({ address, onRemove, onSetDefault }: {
  address: Address;
  onRemove: (id: string) => void;
  onSetDefault: (id: string) => void;
}) => (
  <motion.div variants={fadeSlideUp} className="gpu-layer relative p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
    {address.isDefault && (
      <span className="absolute top-3 right-3 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
        Default
      </span>
    )}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
        <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-slate-900 dark:text-white">{address.label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{address.street}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{address.city}, {address.state} {address.zip}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
      {!address.isDefault && (
        <button onClick={() => onSetDefault(address.id)} className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          Set as default
        </button>
      )}
      <button onClick={() => onRemove(address.id)} className="text-xs font-semibold text-red-500 hover:underline ml-auto">
        Remove
      </button>
    </div>
  </motion.div>
));

const AddressesTab = React.memo(() => {
  const { user, addAddress, removeAddress, setDefaultAddress } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ label: '', street: '', city: '', state: '', zip: '' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.label || !form.street || !form.city || !form.state || !form.zip) return;
    const newAddr: Address = {
      id: `addr_${Date.now()}`,
      label: form.label,
      street: form.street,
      city: form.city,
      state: form.state,
      zip: form.zip,
      isDefault: !user?.addresses?.length
    };
    addAddress(newAddr);
    setForm({ label: '', street: '', city: '', state: '', zip: '' });
    setShowForm(false);
  };

  if (!user) return null;
  const addresses = user.addresses || [];

  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-400 font-medium">{addresses.length} saved address{addresses.length !== 1 ? 'es' : ''}</p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
        >
          <MapPinPlus size={16} /> Add
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAdd}
            className="overflow-hidden"
          >
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
              <input
                placeholder="Label (Home, Work...)"
                value={form.label}
                onChange={e => setForm({ ...form, label: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                placeholder="Street address"
                value={form.street}
                onChange={e => setForm({ ...form, street: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  placeholder="City"
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="col-span-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  placeholder="State"
                  value={form.state}
                  onChange={e => setForm({ ...form, state: e.target.value })}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  placeholder="ZIP"
                  value={form.zip}
                  onChange={e => setForm({ ...form, zip: e.target.value })}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors">
                Save Address
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {addresses.length === 0 && !showForm && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <MapPin size={40} className="text-slate-300 dark:text-slate-700 mb-3" />
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">No saved addresses</p>
        </div>
      )}

      <div className="space-y-3">
        {addresses.map(addr => (
          <AddressCard key={addr.id} address={addr} onRemove={removeAddress} onSetDefault={setDefaultAddress} />
        ))}
      </div>
    </motion.div>
  );
});

/* ─── Wishlist Tab ─── */

const WishlistTab = React.memo(() => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('wishlist') || '[]');
    } catch { return []; }
  });

  const removeFromWishlist = (id: string) => {
    const updated = wishlist.filter(w => w !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Heart size={48} className="text-slate-300 dark:text-slate-700 mb-4" />
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">Wishlist is empty</p>
        <p className="text-sm text-slate-400">Products you save will appear here.</p>
      </div>
    );
  }

  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-slate-400 font-medium">{wishlist.length} saved item{wishlist.length !== 1 ? 's' : ''}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {wishlist.map((id, i) => (
          <motion.div
            key={id}
            variants={fadeSlideUp}
            className="gpu-layer p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-center group relative"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center mx-auto mb-2">
              <Gift size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">Product #{id.slice(0, 8)}</p>
            <button
              onClick={() => removeFromWishlist(id)}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={12} className="text-red-500" />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

/* ─── Settings Tab ─── */

const SettingsTab = React.memo(() => {
  const { isDarkMode, toggleDarkMode, logout, user } = useAppContext();
  const [notifications, setNotifications] = useState(() => localStorage.getItem('notif_orders') !== 'false');
  const [notifPromo, setNotifPromo] = useState(() => localStorage.getItem('notif_promo') !== 'false');

  const toggleNotif = (key: string, val: boolean, setter: (v: boolean) => void) => {
    setter(val);
    localStorage.setItem(key, String(val));
  };

  return (
    <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="space-y-5">
      {[
        {
          icon: Moon, label: 'Dark Mode', description: 'Toggle dark theme',
          action: (
            <button
              onClick={toggleDarkMode}
              className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${isDarkMode ? 'translate-x-5.5' : 'translate-x-0.5'}`}>
                {isDarkMode ? <Moon size={10} className="text-blue-600" /> : <Sun size={10} className="text-slate-500" />}
              </div>
            </button>
          )
        },
        {
          icon: Bell, label: 'Order Updates', description: 'Email notifications for orders',
          action: (
            <button
              onClick={() => toggleNotif('notif_orders', !notifications, setNotifications)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${notifications ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${notifications ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
            </button>
          )
        },
        {
          icon: Gift, label: 'Promotions', description: 'Deals and offers',
          action: (
            <button
              onClick={() => toggleNotif('notif_promo', !notifPromo, setNotifPromo)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${notifPromo ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${notifPromo ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
            </button>
          )
        },
        {
          icon: Lock, label: 'Change Password', description: 'Update your password',
          action: (
            <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Update
            </button>
          )
        },
        {
          icon: Shield, label: 'Privacy', description: 'Manage your data',
          action: <ChevronRight size={16} className="text-slate-400" />
        }
      ].map(({ icon: Icon, label, description, action }, i) => (
        <motion.div key={label} variants={fadeSlideUp} className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Icon size={18} className="text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{label}</p>
              <p className="text-xs text-slate-400">{description}</p>
            </div>
          </div>
          {action}
        </motion.div>
      ))}

      <motion.div variants={fadeSlideUp} className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={logout}
          className="w-full py-3.5 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 font-bold text-sm hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </motion.div>
    </motion.div>
  );
});

/* ─── Main Modal ─── */

export const UserProfileModal: React.FC = () => {
  const { isProfileOpen, setIsProfileOpen, user, isAuthenticated, orders } = useAppContext();
  const [activeTab, setActiveTab] = useState<Tab>('Orders');

  const handleClose = useCallback(() => {
    setIsProfileOpen(false);
  }, [setIsProfileOpen]);

  const tabs = useMemo(() => [
    { key: 'Orders' as Tab, icon: Package, label: 'Orders', count: orders.length },
    { key: 'Profile' as Tab, icon: User, label: 'Profile' },
    { key: 'Addresses' as Tab, icon: MapPin, label: 'Addresses', count: user?.addresses?.length },
    { key: 'Wishlist' as Tab, icon: Heart, label: 'Wishlist' },
    { key: 'Settings' as Tab, icon: Settings, label: 'Settings' }
  ], [orders.length, user?.addresses?.length]);

  return (
    <AnimatePresence>
      {isProfileOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-6 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-slate-50 dark:bg-slate-950 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800 flex flex-col will-change-transform"
          >
            {/* ─── Cover + Profile Header ─── */}
            <div className="relative shrink-0">
              <div className="h-36 sm:h-44 profile-cover-gradient" />
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="absolute -bottom-12 left-6 sm:left-8 z-10 flex items-end gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 ring-4 ring-white dark:ring-slate-950">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="" className="w-full h-full rounded-2xl object-cover" />
                  ) : (
                    <span className="text-3xl sm:text-4xl font-bold">{user?.name?.charAt(0)?.toUpperCase() || '?'}</span>
                  )}
                </div>
                <div className="pb-1 hidden sm:flex items-center gap-2">
                  <button className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors" title="Change photo">
                    <Camera size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* ─── User Info Summary ─── */}
            <div className="pt-14 sm:pt-16 px-6 sm:px-8 pb-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {user?.name || 'User'}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {user?.email && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Mail size={12} /> {user.email}
                      </span>
                    )}
                    {user?.phone && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Phone size={12} /> {user.phone}
                      </span>
                    )}
                    {user?.memberSince && (
                      <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Award size={11} /> Member since {new Date(user.memberSince).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                    )}
                  </div>
                </div>
                {!isAuthenticated && (
                  <p className="text-xs text-slate-400 italic">Sign in to manage your profile</p>
                )}
              </div>
            </div>

            {/* ─── Tab Navigation ─── */}
            <div className="flex overflow-x-auto no-scrollbar border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-2 sm:px-4 shrink-0">
              {tabs.map(({ key, icon: Icon, label, count }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === key
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                      : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                  {count !== undefined && count > 0 && (
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ─── Tab Content ─── */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 no-scrollbar">
              {activeTab === 'Orders' && <OrdersTab orders={orders} />}
              {activeTab === 'Profile' && <ProfileTab />}
              {activeTab === 'Addresses' && <AddressesTab />}
              {activeTab === 'Wishlist' && <WishlistTab />}
              {activeTab === 'Settings' && <SettingsTab />}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
