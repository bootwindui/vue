import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
	  plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/'),
      }
    },
    build: {
        lib: {
          name: 'bootwind',
          fileName: 'index',
          entry: resolve(__dirname, 'src/index.js'),
        },
        rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
              assetFileNames: (chunkInfo) => {
                if (chunkInfo.name === 'style.css'){
                  return 'index.css'
                }
                return chunkInfo.name
              },
            },
        }
      }
  }
  })