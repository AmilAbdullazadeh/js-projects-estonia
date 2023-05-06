import axios from "axios";
import React from 'react';
import './App.scss';

import withErrorHandler from "./HOCs/withErrorHandler";
import { Button } from './components/Button';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useInput } from './hooks/useInput';

//! import { useLocalStorage } from './hooks/useLocalStorage'
//! token with user info use api

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const [ value, bind, reset ] = useInput('')

  return (
    <div className={`App App--${theme}`}>
      <h1>Hello World !</h1>
      <Button onClick={toggleTheme} size='large' >Toggle Theme</Button>
      <input type="text" {...bind} />
      <Button onClick={reset} size='small' >Reset</Button>
    </div>
  );
}

const AppWithErrorHandler = withErrorHandler(App, axios)

const WrappedApp = () => {
  return (
    <ThemeProvider>
      <AppWithErrorHandler />
    </ThemeProvider>
  )
}

export default WrappedApp 