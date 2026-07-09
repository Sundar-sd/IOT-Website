import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Spline from '@splinetool/react-spline';
import { useAppContext } from '../context/AppContext';
export const RobotAnimation: React.FC = () => {
  const { authModalType } = useAppContext();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for buttery smooth interpolation
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Advanced Multi-Layer Parallax for the environment
  const bgTranslateX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const bgTranslateY = useTransform(smoothY, [-1, 1], [-10, 10]);
  
  const midTranslateX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const midTranslateY = useTransform(smoothY, [-1, 1], [-15, 15]);
  
  const fgTranslateX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const fgTranslateY = useTransform(smoothY, [-1, 1], [-25, 25]);
  
  // Exaggerated transform for the glowing eyes
  const eyeX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const eyeY = useTransform(smoothY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col items-center justify-center select-none overflow-visible perspective-1000">

      {/* 1. Deep Background - Pulsating Nebulas */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 90, 180] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.2, 0.5], rotate: [180, 90, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)', filter: 'blur(50px)' }}
        />
      </motion.div>

      {/* 2. Middle Layer - Holographic 3D Gyroscope Rings */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY, transformStyle: 'preserve-3d' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <motion.div
          animate={{ rotateZ: 360, rotateX: [60, 75, 60] }}
          transition={{ rotateZ: { repeat: Infinity, duration: 15, ease: 'linear' }, rotateX: { repeat: Infinity, duration: 5, ease: 'easeInOut', repeatType: 'reverse' } }}
          className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/30"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Ring Orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.9)]" />
        </motion.div>

        <motion.div
          animate={{ rotateZ: -360, rotateY: [40, 80, 40] }}
          transition={{ rotateZ: { repeat: Infinity, duration: 20, ease: 'linear' }, rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut', repeatType: 'reverse' } }}
          className="absolute w-[460px] h-[460px] rounded-full border border-blue-400/20 dashed-border"
          style={{ transformStyle: 'preserve-3d', borderStyle: 'dashed' }}
        >
          <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
        </motion.div>
      </motion.div>

      {/* 3. High-Tech Floating HUD Cards (Glassmorphism) */}
      <motion.div style={{ x: fgTranslateX, y: fgTranslateY }} className="absolute inset-0 z-30 pointer-events-none">
        {/* Left HUD Component */}
        <motion.div 
          animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[5%] lg:left-[10%] bg-slate-900/70 backdrop-blur-md border border-purple-500/40 p-3 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.2)] flex flex-col gap-1.5"
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
            <span className="text-xs font-bold text-white tracking-widest">AI CORE</span>
          </div>
          <div className="text-[10px] text-purple-200 font-mono">Processing: 99.8%</div>
          <div className="h-1.5 w-28 bg-slate-800 rounded-full mt-1 overflow-hidden">
            <motion.div animate={{ x: ['-100%', '0%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="w-full h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>
        </motion.div>

        {/* Right HUD Component */}
        <motion.div 
          animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute bottom-[25%] right-[5%] lg:right-[10%] bg-slate-900/70 backdrop-blur-md border border-blue-500/40 p-3 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.2)] flex flex-col gap-1.5"
        >
          <div className="text-xs font-bold text-blue-300 tracking-wider">NEURAL LINK</div>
          <div className="flex items-end gap-1.5 mt-1 h-6">
            {[1,2,3,4,5].map(i => (
              <motion.div key={i} animate={{ height: [4, Math.random() * 20 + 4, 4] }} transition={{ repeat: Infinity, duration: Math.random() * 0.5 + 0.5 }} className="w-1.5 bg-blue-400 rounded-t-sm shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Rising Cyber Particles (Starfield) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [100, -350],
            x: [Math.sin(i) * 20, Math.cos(i) * 40],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
            ease: 'linear',
          }}
          className="absolute z-10 w-1 h-1 rounded-full pointer-events-none"
          style={{
            bottom: '10%',
            left: `calc(50% + ${(Math.random() - 0.5) * 500}px)`,
            background: i % 3 === 0 ? '#c084fc' : i % 3 === 1 ? '#60a5fa' : '#38bdf8',
            boxShadow: `0 0 10px 2px ${i % 3 === 0 ? 'rgba(192,132,252,0.8)' : 'rgba(96,165,250,0.8)'}`,
          }}
        />
      ))}

      {/* 5. Main 3D Spline Robot Canvas */}
      <motion.div
        style={{ x: midTranslateX, y: midTranslateY }}
        className="relative z-20 flex flex-col items-center justify-center w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
      >
        <motion.div
          animate={{ y: [-15, 15] }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Dynamic Floor Shadow */}
          <motion.div
            animate={{ scaleX: [1, 0.6, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -bottom-8 w-[50%] h-6 left-1/2 -translate-x-1/2 rounded-[100%] blur-[12px] z-0 pointer-events-none"
            style={{ background: 'rgba(0,0,0,0.8)' }}
          />

          {/* Holographic Energy Pulse emitting from behind the Robot */}
          <motion.div
            animate={{ scale: [0.8, 1.4], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
            className="absolute w-[60%] h-[60%] bg-blue-500/30 rounded-full blur-3xl z-0 pointer-events-none"
          />

          <div className="relative z-10 w-full h-full group pointer-events-auto">
            {authModalType === 'signin' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/images/demo.png"
                  alt="Security Guardian"
                  className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] relative z-20 scale-[1.15]"
                />
                {/* Glowing Eyes that track cursor */}
                <motion.div 
                  style={{ x: eyeX, y: eyeY }}
                  className="absolute top-[38%] left-1/2 -translate-x-1/2 w-12 md:w-16 h-4 z-30 flex justify-between pointer-events-none"
                >
                  <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.9)] animate-pulse" />
                  <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.9)] animate-pulse" />
                </motion.div>
              </div>
            ) : (
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-[-10%] w-[120%] h-[120%] pointer-events-none">
                  <Spline 
                    scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                    className="w-full h-full object-contain mix-blend-lighten pointer-events-auto"
                  />
                </div>
              </div>
            )}
            {/* Sci-Fi Scanline Sweep passing over the 3D model */}
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              className="absolute left-0 right-0 h-1.5 bg-cyan-400/20 blur-[2px] z-20 mix-blend-screen shadow-[0_0_15px_rgba(34,211,238,0.5)] pointer-events-none"
            />

            {/* Glowing Bouncing Text for Auth Pages */}
            {(authModalType === 'signup' || authModalType === 'signin') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [-10, -30, -10] 
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ 
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="absolute inset-x-0 -top-12 md:-top-16 flex justify-center z-50 pointer-events-none px-4"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] text-center animate-pulse whitespace-nowrap">
                  HARICHANDRA ELECTRONICS
                </h2>
              </motion.div>
            )}
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};
