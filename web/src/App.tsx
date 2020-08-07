import React from 'react';

import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import Routes from './routes';

import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import GlobalStyle from './assets/styles/global';
// import './assets/styles/global.css';
import SwitchButton from './components/SwitchButton';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <SwitchButton toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
