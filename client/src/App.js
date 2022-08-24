import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CharacterCreate from './components/CharacterCreate'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/characters' element={<CharacterCreate/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
