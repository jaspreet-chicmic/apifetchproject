import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cities from './Components/Cities';
import Error from './Components/Error';
import Home from './Components/Home';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Cities/:selectedItem' element={<Cities/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
  );
}

export default App;
