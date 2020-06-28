import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
