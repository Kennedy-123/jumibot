import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    react(),
    tailwindcss(),
    compress({
      verbose: true,
      disable: false,
      threshold: 1024, // Only compress files larger than 1KB
      algorithm: "gzip", // You can also use 'brotliCompress'
      ext: ".gz", // File extension for compressed files
    }),
  ],
});
