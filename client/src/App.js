import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing'
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>

    </BrowserRouter> 
        
  )
}

export default App;
