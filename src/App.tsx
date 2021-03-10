import React from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <Contador valorInicial={16}/>
      <Contador/>
    </div>
  );
}

export default App;
