import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6F5E6',
      100: '#C2E5C2',
      200: '#9DD49D',
      300: '#78C378',
      400: '#54B254',
      500: '#008A00', // DT Bank primary green
      600: '#007000',
      700: '#005600',
      800: '#003C00',
      900: '#002200',
    },
    secondary: {
      50: '#F5F7FA',
      100: '#E4E7EB',
      200: '#CBD2D9',
      300: '#9AA5B1',
      400: '#7B8794',
      500: '#616E7C', // DT Bank secondary gray
      600: '#52606D',
      700: '#3E4C59',
      800: '#323F4B',
      900: '#1F2933',
    },
  },
  fonts: {
    heading: '"DT Graphik", system-ui, sans-serif',
    body: '"DT Graphik", system-ui, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
        color: 'secondary.800',
      },
    },
    Text: {
      baseStyle: {
        color: 'secondary.700',
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.500',
        _hover: {
          color: 'brand.600',
          textDecoration: 'none',
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'light' ? 'white' : 'secondary.900',
      },
    }),
  },
  config,
});

export default theme; 