import { defineConfig } from "vite"

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  base: "/contact-api-demo/",
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
