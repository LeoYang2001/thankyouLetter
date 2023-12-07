// src/App.js
import React, { useState } from 'react';
import Main from './pages/Main';
import Welcome from './pages/Welcome';


const App = () => {

  const [name, setName] = useState('')
  const [letter, setLetter] = useState('')

  const handleSubmit = (firstName, lastName, message)=>{
    console.log('message: ',message);
    
    setLetter(message)
    setName(`${firstName} ${lastName}`)
  }

  const resetName = ()=>{
    setName('')
  }
  
  return (
    <div className='flex-1 border  h-screen'>
      {
        name ? (
          <Main resetName={resetName} letter={letter} name={name}/>
        ) : (
          <Welcome onNameSubmit={handleSubmit}/>
        )
      }
    </div>
  );
}

export default App;
