import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';

dotenv.config();

const execAsync = promisify(exec);

// Plugin to verify .well-known configuration during build
function verifyWellKnownPlugin() {
  return {
    name: 'verify-well-known',
    async closeBundle() {
      console.log('\n🔍 Running IC domain verification checks...');
      try {
        const { stdout, stderr } = await execAsync('node scripts/verify-well-known.mjs');
        console.log(stdout);
        if (stderr) console.error(stderr);
      } catch (error) {
        console.error('\n❌ IC domain verification failed:');
        console.error(error.stdout || error.message);
        throw new Error('Build verification failed - IC domain configuration is incorrect');
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    verifyWellKnownPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@tanstack/react-router', '@tanstack/react-query'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: 'public',
});
