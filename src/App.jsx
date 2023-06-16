import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <NavBar></NavBar>
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<AboutUs></AboutUs>} path='/about'></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
