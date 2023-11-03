// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ArtistsPage } from './pages/ArtistsPage';
import { MusicsPage } from './pages/MusicsPage';
import { ToursAndTickets } from './pages/ToursandTickets';
import { Contact } from './pages/Contact';
import { Nav2 } from './components/Nav2';
import { createContext, useState,  } from 'react';
// import { ErrorPage } from './pages/CreateError';
export const DisplayHamContext = createContext(null);
function App() {
  // const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  return (
    <>
     <Router>
      <DisplayHamContext.Provider value={{display, setDisplay}}>
        <NavBar></NavBar>
      </DisplayHamContext.Provider>
      
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<AboutUs></AboutUs>} path='/about'></Route>
        <Route element={<ArtistsPage></ArtistsPage>} path='/artists'></Route>
        <Route element={<MusicsPage></MusicsPage>} path='/music'></Route>
        <Route element={<ToursAndTickets></ToursAndTickets>} path='/ticketsandtours'></Route>
        <Route element={<Contact></Contact>} path='/contact'></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
