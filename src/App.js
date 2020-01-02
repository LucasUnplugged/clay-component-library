import React from 'react';
import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
} from '@chakra-ui/core';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

const toggleColorMode = () => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  localStorage.setItem('darkMode', !isDark);
};

function App() {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <Button onClick={toggleColorMode}>I just consumed some <span role='img' aria-label='Shazam!'>⚡️</span> Chakra!</Button>
          </header>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
