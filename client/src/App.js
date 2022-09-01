import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing'
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route exact path='/details' element={<Details/>}></Route>
      </Routes>

    </BrowserRouter> 
        
  )
}

export default App;
