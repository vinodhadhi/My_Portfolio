import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Keep build assets relative so GitHub Pages works even if the repo path changes.
  base: command === "build" ? "./" : "/",
}));
