import React from 'react';
import Maman from './components/Maman';
import './App.css';
import Toto from './components/Toto';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Maman />
      <Form
      head={true}/>
    </div>
     
  );
}

export default App; 