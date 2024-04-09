import './App.css';
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Main from './MAIN/main';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/main"  element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;