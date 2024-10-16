import { defineConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { checker } from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://moldvaer23.github.io/logo-test',
	plugins: [
		react(),
		checker({
			overlay: true,
			typescript: {
				tsconfigPath: './tsconfig.app.json',
			},
		}),
		svgr(),
	],
	server: {
		port: 3000,
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly', // Для преобразования button-active в buttonActive
		},
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // Исправляет The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
			},
		},
	},
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src/app'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@app-types': path.resolve(__dirname, 'src/types'),
			'@app-config': path.resolve(__dirname, 'src/config'),
		},
	},
})
