import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
const path = require("path");

export default defineConfig({
  server: {
    port: 9527
  },
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    // cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["./index.js"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "es",
          preserveModulesRoot: "src",
        },
        // {
        //   format: "cjs",
        //   entryFileNames: "[name].js",
        //   //让打包目录和我们目录对应
        //   preserveModules: true,
        //   //配置打包根目录
        //   dir: "lib",
        //   preserveModulesRoot: "src",
        // },
      ],
    },
    lib: {
      entry: "./index.js",
      formats: ["es", "cjs"],
    },
  },
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
});
