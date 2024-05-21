
import About from './components/pages/About';
import AboutCounters from './components/pages/AboutCounters';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Service from './components/pages/Service';
import Slider from './components/pages/Slider'

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
  <Home/>
  <About/>
  <AboutCounters/>
  <Service/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
