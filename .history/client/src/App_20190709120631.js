import React, { useState} from 'react';
import Results from '../src/componets/Results';
import CalculateInterestForm from '../src/componets/Forms//CalculateInterestForm'
import './App.css';

function App() {


  return (
    <div className='container'>
       < Results />
      <CalculateInterestForm/>
      <DIV>
        <h1></h1>
      </DIV>

    </div>
  )
}

export default App;
