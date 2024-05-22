
import './App.css';
import About from './Components/About/About';
import Choose from './Components/Choose/Choose';
import Hero from './Components/Hero/Hero';
import Nav2 from './Components/Nav2/Nav2';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products.';
import Search from './Components/Search/Search';
import Touch from './Components/Touch/Touch';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Nav2/>
      <Hero/>
      <About/>
      <Search/>
      <Products/>
      <Choose/>
      <Touch/>
    </div>
  );
}

export default App;
