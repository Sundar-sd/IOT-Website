import React, { useEffect, useState } from 'react';

export const FloatingShapes: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div
        className="animate-float1 absolute top-20 left-10 w-64 h-64 bg-blue-300/10 dark:bg-blue-800/20 rounded-full blur-2xl"
      />
      <div
        className="animate-float2 absolute bottom-20 right-10 w-80 h-80 bg-cyan-300/10 dark:bg-cyan-900/20 rounded-full blur-2xl"
      />
      <div
        className="animate-pulse-scale absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/20 rounded-full blur-[100px]"
      />
    </div>
  );
};
