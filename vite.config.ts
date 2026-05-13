import { defineConfig } from "vite"

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  base: "https://contact-api-demo.vercel.app/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: "esbuild",
    rollupOptions: {
      input: {
        main: "src/index.html",
        resendDemo: "src/resend-demo.html",
        nodemailerDemo: "src/nodemailer-demo.html"
      }
    }
  }
});
