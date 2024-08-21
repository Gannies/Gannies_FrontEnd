import GlobalStyles from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@/styles/theme';
import { router } from '@/routes/router';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Home />
    </ThemeProvider>
  );
}

export default App;