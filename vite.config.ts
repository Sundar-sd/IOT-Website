import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'https://guidance-glorifier-mango.ngrok-free.dev',
          changeOrigin: true,
          secure: false,
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
          configure: (proxy, _options) => {
            proxy.on('proxyReq', (proxyReq, _req, _res) => {
              proxyReq.setHeader('Origin', 'https://guidance-glorifier-mango.ngrok-free.dev');
              proxyReq.setHeader('Referer', 'https://guidance-glorifier-mango.ngrok-free.dev/');
            });
          },
        },
        '/media': {
          target: 'https://guidance-glorifier-mango.ngrok-free.dev',
          changeOrigin: true,
          secure: false,
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
          configure: (proxy, _options) => {
            proxy.on('proxyReq', (proxyReq, _req, _res) => {
              proxyReq.setHeader('Origin', 'https://guidance-glorifier-mango.ngrok-free.dev');
              proxyReq.setHeader('Referer', 'https://guidance-glorifier-mango.ngrok-free.dev/');
            });
          },
        },
      },
    },
  };
});
