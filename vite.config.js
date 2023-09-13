import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [
	  	vue(),
	  	AutoImport({
	  		imports:['vue','vue-router']
	  	}),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
	  	requireTransform({
	      fileRegex: /.js$|.vue$/
	    }),
	],
	resolve: {
	    // 配置路径别名
	    alias: {
	      '@': path.resolve(__dirname, './src'),
	    },
	},
  	server:{
		proxy:{
			'/api':'http://testapi.xuexiluxian.cn'
		}
	}
})