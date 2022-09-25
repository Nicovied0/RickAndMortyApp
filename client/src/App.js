import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing'
import Home from './Components/Home';
import CharacterDetail from './Components/Details';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
