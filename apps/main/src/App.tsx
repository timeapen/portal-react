import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load the Accounts component
const Accounts = lazy(() => import('./pages/Accounts'));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="accounts"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Accounts />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
