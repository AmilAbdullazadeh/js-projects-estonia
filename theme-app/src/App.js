import axios from "axios";
import React, { useEffect } from "react";
import "./App.scss";

import withErrorHandler from "./HOCs/withErrorHandler";
import { Button } from "./components/Button";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

import Layout from "./components/Layout";
import { useFetch } from "./hooks/useFetch";
import { useInput } from "./hooks/useInput";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, logIn, logOut } = useAuth();
  const [value, bind, reset] = useInput("");

  const handleLogIn = () => {
    localStorage.setItem("token", "test");
    logIn();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    logOut();
  };

  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  useEffect(() => {
    isLoggedIn
      ? console.log("User is logged in")
      : console.log("User is not logged in");
  }, [isLoggedIn]);

  return (
    <Layout>
      <div className={`App App--${theme}`}>
        <h1>Hello, world!</h1>
        <Button onClick={toggleTheme} size="large">
          Toggle theme
        </Button>
        <br />
        {!isLoggedIn ? (
          <Button onClick={handleLogIn} size="large">
            Log In
          </Button>
        ) : (
          <Button onClick={handleLogOut} size="large">
            Log Out
          </Button>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data && <p>Todo: {data.title}</p>
        )}
      </div>
    </Layout>
  );
};

const AppWithErrorHandler = withErrorHandler(App, axios);

const WrappedApp = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppWithErrorHandler />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default WrappedApp;
