import logo from './logo.svg';
import './App.css';
import Tablero from './components/Tablero';
import { useEffect, useState } from 'react';
import Start from './components/Start';

function App() {
  const [start, setStart] = useState("x")
  /* useEffect(() => {
    if (!start) return <Start setStart={setStart} />
  }, [start]) */
  return (
    <div className='container'>
      <div></div>
      <Tablero start={start} />
    </div>
  );
}

export default App;
