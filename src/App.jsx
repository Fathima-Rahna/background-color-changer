import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark '>
      <div style={{ width: '600px', height: '600px', backgroundColor }} className=' p-5 rounded shadow d-flex justify-content-center align-items-center flex-column'>
        <h1 style={{ color: 'white' }}>Background Color Changer</h1>
        <div className="mb-3">
          <button className='button' style={{ marginRight: '10px'}} onClick={() => changeColor('red')}>Red</button>
          <button className='button' style={{ marginRight: '10px' }} onClick={() => changeColor('green')}>Green</button>
          <button className='button' style={{ marginRight: '10px' }} onClick={() => changeColor('blue')}>Blue</button>
          <button className='button' style={{ marginRight: '10px'}} onClick={() => changeColor('purple')}>purple</button>
        </div>
      </div>
     </div>
  );
}

export default App;
