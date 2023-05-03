import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  function getRandomColor() {
    const someColor = randomColor({});
    return someColor;
  }
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  return (
    <div className="App">
      <div style={{ backgroundColor }}>
        <div style={{ backgroundColor }}>
          Generated Color: {backgroundColor}
        </div>
        <div>
          <br />
          <button onClick={() => setBackgroundColor(getRandomColor())}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
