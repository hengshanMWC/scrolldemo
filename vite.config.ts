import { URL, fileURLToPath } from 'node:url'
import type { ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import viteCompression from 'vite-plugin-compression'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
const target = 'es2020'
export default defineConfig((env: ConfigEnv) => {
  const production = env.mode === 'production'
  return {
    base: './',
    build: {
      target,
      rollupOptions: {
        output: {
          // 禁用 eval
          intro: 'self',
        },
      },
    },
    plugins: [
      svgLoader(),
      vue(),
      UnoCSS(),
      VueI18nPlugin({
        include: [
          fileURLToPath(new URL('./src/locales/lang/**.json', import.meta.url)),
        ],
        runtimeOnly: false,
        jitCompilation: true,
      }),
      ...(production
        ? [
            viteCompression({
              algorithm: 'gzip', // 压缩文件为 br 类型
              threshold: 1024 * 10, // 对大于 10Kb 的文件进行压缩
            }),
          ]
        : []),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/item.scss";`,
        },
      },
    },
    optimizeDeps: {
      exclude: ['vue', 'axios', 'vue-router'],
      esbuildOptions: {
        target,
      },
    },
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
        components: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      extensions: ['.js', '.vue'],
    },
  }
})
