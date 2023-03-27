import { useState } from 'react';
import { DisplayBox } from './components/DisplayBox';
import { MenuList } from './components/MenuList';
import './global.css';

function App() {
  return (
    <div className="container">
      <MenuList />
      <DisplayBox />
    </div>
  );
}

export default App;
