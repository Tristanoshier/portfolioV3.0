import React from 'react';
import './css/main.css';
import { Landing } from './Components/Landing';
import { About } from './Components/About';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
    </div>
  );
}

export default App;
