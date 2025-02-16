import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    assetsDir: "assets",

    minify: "terser",
    terserOptions: {
      ecma: 2020, // 👈 Keep ESNext syntax
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    compress({
      algorithm: "brotliCompress", // You can also use 'brotliCompress'
      ext: ".br", // File extension for compressed files
    }),
  ],
});
