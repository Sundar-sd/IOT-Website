import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Wifi, Zap, Thermometer, ShieldAlert, Clock } from 'lucide-react';

const specs = [
  {
    icon: <Cpu size={24} />,
    title: 'High-Performance Microcontrollers',
    description: 'We stock the latest 32-bit ARM and RISC-V processors for intensive IoT Edge computing and AI applications.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Wifi size={24} />,
    title: 'Wireless Connectivity Hub',
    description: 'Find LoRaWAN, NB-IoT, ESP32, and Wi-Fi 6 modules for low-latency, long-range communication.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: <Zap size={24} />,
    title: 'Smart Power Management',
    description: 'Li-Po chargers, solar management ICs, and ultra-low power boards designed for battery-operated remote nodes.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <Thermometer size={24} />,
    title: 'Precision Sensor Arrays',
    description: 'Industrial-grade temperature, humidity, gas, and IMU sensors for accurate environmental and motion tracking.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: <ShieldAlert size={24} />,
    title: 'Secure IoT Modules',
    description: 'Components with built-in crypto-authentication chips to ensure end-to-end encryption for your IoT networks.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Clock size={24} />,
    title: 'Real-Time Edge Processing',
    description: 'Fast prototyping kits with RTOS support, allowing predictable response times for critical robotics tasks.',
    color: 'from-purple-500 to-fuchsia-500'
  }
];

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-3xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-400/20 blur-3xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Prototyping Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">IoT & Robotics</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Build your next big idea with our industry-standard components. From smart home automation to autonomous drones, we provide the hardware you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700/50 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${spec.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {spec.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
