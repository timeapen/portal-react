import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', '@chakra-ui/react', '@chakra-ui/icons', '@emotion/react', '@emotion/styled', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chakra-ui/react': 'ChakraUI',
          '@chakra-ui/icons': 'ChakraIcons',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled',
          'framer-motion': 'FramerMotion'
        }
      }
    }
  }
}); 