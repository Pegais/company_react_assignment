import { useEffect } from "react"
// import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Card from "./components/cardcomponent/Card";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cards" element={<Card/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
