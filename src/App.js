import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
