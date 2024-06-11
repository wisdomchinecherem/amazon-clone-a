import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Create a vendor chunk for react and react-dom
          // Add more chunks as needed, for example:
          // 'lodash': ['lodash']
        },
      },
    },
  },
});
