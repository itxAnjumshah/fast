
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import About from '../src/Components/About/About';
import Contact from '../src/Components/Contact/Contact';
import Watches from '../src/Components/Watches/Watches';
import Navbar from '../src/Components/Navbar/Navbar';
import Testmoniols from '../src/Components/Testimoniols/Testimoniols'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <div className='header'>
      <Navbar/>
      </div>
      <Routes>
  <Route exact path="/"  element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/watches" element={<Watches />} /> 
  <Route path="/testimoniols" element={<Testmoniols />} /> 
</Routes>
     <div><Footer/></div>

    </div>
  );
}

export default App;
