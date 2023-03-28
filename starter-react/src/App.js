import { useState } from 'react';
import { DisplayBox } from './components/DisplayBox';
import { MenuList } from './components/MenuList';
import './global.css';

function App() {
  const [currentDiffLevel, setCurrentDiffLevel] = useState('Low');

  function handleChangeLevel(level) {
    setCurrentDiffLevel(level);
  }

  return (
    <div className="container">
      <MenuList handleChange={handleChangeLevel} diffLevel={currentDiffLevel} />
      <DisplayBox diffLevel={currentDiffLevel} />
    </div>
  );
}

export default App;
