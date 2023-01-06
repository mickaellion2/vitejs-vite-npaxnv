import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: {
        '@': fileURLToPath(new URL("./src", import.meta.url)),
        '#':'http://212.47.248.186/Sauvegarde/Front/sauvegarde_front_04012023/front-anafe/src/assets'
      }
  }
})
