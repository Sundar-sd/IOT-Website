import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Wrench, Lightbulb, Clock } from 'lucide-react';

const projects = [
  {
    title: 'Smart Home Automation Node',
    description: 'Control appliances securely via Wi-Fi using an ESP32 and solid-state relays. Includes Web Server dashboard.',
    difficulty: 'Beginner',
    time: '2 Hours',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    tags: ['ESP32', 'Relays', 'IoT']
  },
  {
    title: 'Autonomous Line Follower Bot',
    description: 'Build a high-speed robot that follows complex tracks using PID control, IR sensors, and Arduino.',
    difficulty: 'Intermediate',
    time: '4 Hours',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    tags: ['Robotics', 'Arduino', 'Sensors']
  },
  {
    title: 'Weather Station Dashboard',
    description: 'Track temperature, humidity, and atmospheric pressure. Log data to cloud using Raspberry Pi.',
    difficulty: 'Intermediate',
    time: '3 Hours',
    image: 'https://images.unsplash.com/photo-1561553543-e4c7b608b98d?auto=format&fit=crop&w=800&q=80',
    tags: ['Raspberry Pi', 'Cloud', 'Sensors']
  }
];

export const ProjectIdeas: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 font-semibold uppercase tracking-wider text-sm">
              <Lightbulb size={18} />
              <span>Project Hub</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Build With HariChandra
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Explore our curated list of open-source projects. Get the bill of materials, source code, and step-by-step guides.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 transition-colors group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Wrench size={16} className="text-orange-500"/> {project.difficulty}</span>
                    <span className="flex items-center gap-1"><Clock size={16} className="text-blue-500"/> {project.time}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Code size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
