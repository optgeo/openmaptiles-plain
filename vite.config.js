import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'docs',
        emptyOutDir: true, // docs フォルダを完全にクリア
        rollupOptions: {
            input: {
                main: 'index.html'
            },
            output: {
                // main.js と main.css を docs 直下に出力
                entryFileNames: 'main.js',
                assetFileNames: '[name].[ext]'
            }
        }
    },
    server: {
        host: '0.0.0.0',
        open: true,
        port: 3000
    },
    base: './',
    assetsInclude: ['**/*.json'],
    esbuild: {
        target: 'es2020',
        minifyIdentifiers: true,
        minifySyntax: true
    }
});
