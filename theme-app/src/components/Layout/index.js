import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./Layout.scss";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`Layout Layout--${theme}`}>
      <header className={`Layout--${theme}__header`}>
        <h1>My App</h1>
      </header>
      <main className="Layout__main">{children}</main>
      <footer className={`Layout--${theme}__footer`}>
        <p>© {new Date().getFullYear()} - My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
