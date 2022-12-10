import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Bot from "./pages/bot";

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path=""element={<Login />} />
          <Route path="bot" element={<Bot/>}/>
           </Routes>
    </BrowserRouter>
  );
}

export default App;
