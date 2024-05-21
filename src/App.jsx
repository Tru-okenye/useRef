import { useState } from 'react';
import './App.css';
import Props from './Rendering';
import My_name from './States'
import students from './States';
import Ref from './Ref';
function App() {

  return (
    <>
    <div>
      <My_name/>
      <students/>
      <Ref/>
    </div>
    </>
  )
}

export default App
