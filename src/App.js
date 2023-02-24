import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Cities from './Components/Cities';
import Error from './Components/Error';
import ErrorImmediate from './Components/ErrorImmediate';
import Home from './Components/Home';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Cities/:selectedItem' element={<Cities/>}/>
        <Route path='Cities/select/*' element={<Error/>}/>
        <Route path='Cities/*' element={<Error/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
  );
}

export default App;
