import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
const path = require('path');

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()).VITE_APP_BASE_API);
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    base: './',
    server: {
      proxy: {
        '/api': loadEnv(mode, process.cwd()).VITE_APP_BASE_API
      }
    }
  })
}
