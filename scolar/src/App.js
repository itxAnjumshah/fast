import { Route,Routes } from 'react-router-dom'; // Import Link from react-router-dom

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Testimoniols from './Components/Testimoniols/Testimoniols';
import Hero from './Components/Hero/Hero';
import Wjatchess from './Components/Watches/Wjatches';

function App() {
  return (
    <>
    
      <header>
        <div className='white-img'>
        <Navbar/>
        </div>
        <Hero/>
        <br/>
<Wjatchess/>

      </header>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/watches" element={<Watches />} /> */}
        <Route path="/menu" element={<Testimoniols />} />
      </Routes>
    </>
  );
}

export default App;
