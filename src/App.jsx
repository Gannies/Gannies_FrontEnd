import GlobalStyles from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@/styles/theme';
import { router } from '@/routes/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
