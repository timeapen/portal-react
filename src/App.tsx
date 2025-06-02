import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Accounts from './pages/Accounts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="accounts" element={<Accounts />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
